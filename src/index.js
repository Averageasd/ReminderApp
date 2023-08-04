import ReminderItem from "./reminderItem";
import Project from "./project";
import TodoProjectManagement from "./todoProjectManagement";
import "./style.css";
import "date-fns/endOfDay";
import deleteImage from "./images/delete.svg";
import editImage from "./images/edit.svg";
import addImage from "./images/add.svg";
import checkImage from "./images/check.svg";
import projectImage from "./images/project.svg";
import { v4 as uuidv4 } from "uuid";
import { getExactDate } from "./exactDateCal";
import { getExactDateWithDateStr } from "./exactDateCal";
import PriorityConstant from "./priorityConstant";

// GUI for adding projects
const newProjectInput = document.querySelector(".projectname-input");
const addProjectBtn = document.querySelector(".addproject-btn");
const projectNameErrorMsg = document.querySelector(".error-message");
addProjectBtn.addEventListener("click", addNewProject);
const projectList = document.querySelector(".project-div");
const listTitleDisplay = document.querySelector(".project-title");

// GUI for adding container
const bodyContainer = document.querySelector(".body-container");
const todoContainer = document.querySelector(".todo-container");
const mainContent = document.querySelector(".main-content");
const addToDoDiv = createDynamicElement("div", "add-todo-div");
mainContent.appendChild(addToDoDiv);
const popUpModal = document.querySelector(".edit-task-modal");
const sideBarTop = document.querySelector(".sidebar-top");
sideBarTop.addEventListener("click", filterLinksListener);
createAddTaskBar(addToDoDiv);

const todoProjectSource = new TodoProjectManagement();

function createAddTaskBar(addToDoDiv) {
  const addSymbol = createImage(addImage, "add-symbol");
  const newToDoInput = createDynamicElement("input", "new-todo-input");
  newToDoInput.placeholder = "add new item here...";
  const datePicker = createDynamicElement("input", "new-todo-date-input");
  datePicker.type = "date";
  datePicker.valueAsDate = getExactDate(Date.now());
  const newTodoPriorityInput = createDynamicElement(
    "select",
    "new-todo-priority-input"
  );

  const noneOption = createDynamicElement("option", null);
  noneOption.value = PriorityConstant.PRI_NONE;
  noneOption.innerText = "None";

  const highOption = createDynamicElement("option", null);
  highOption.value = PriorityConstant.PRI_HIGH;
  highOption.innerText = PriorityConstant.PRI_HIGH;

  const medOption = createDynamicElement("option", null);
  medOption.value = PriorityConstant.PRI_MED;
  medOption.innerText = PriorityConstant.PRI_MED;

  const lowOption = createDynamicElement("option", null);
  lowOption.value = PriorityConstant.PRI_LOW;
  lowOption.innerText = PriorityConstant.PRI_LOW;

  newTodoPriorityInput.appendChild(noneOption);
  newTodoPriorityInput.appendChild(highOption);
  newTodoPriorityInput.appendChild(medOption);
  newTodoPriorityInput.appendChild(lowOption);
  addToDoDiv.appendChild(addSymbol);
  addToDoDiv.appendChild(newToDoInput);
  addToDoDiv.appendChild(datePicker);
  addToDoDiv.appendChild(newTodoPriorityInput);
  addToDoDiv.addEventListener("click", addNewTodoListener);
}

function filterLinksListener(e) {
  if (e.target.classList.contains("task-link")) {
    todoProjectSource.setAllTask();
    renderTodoItems();
  } else if (e.target.classList.contains("plan-link")) {
    todoProjectSource.setPlannedTask();
    listTitleDisplay.innerText = "Planned";
    renderTodoItems();
  } else if (e.target.classList.contains("today-link")) {
    todoProjectSource.setTodayTask();
    listTitleDisplay.innerText = "Today";
    renderTodoItems();
  }
  renderProjectList();
  listTitleDisplay.innerText = todoProjectSource.getCurTodoListName();
}

function renderTodoItems() {
  todoContainer.innerHTML = "";
  listTitleDisplay.innerText = todoProjectSource.getCurTodoListName();
  for (const todo of todoProjectSource.getCurTodoList()) {
    const todoItem = createTodo(todo);
    todoContainer.appendChild(todoItem);
  }
}

function createTodo(todoModel) {
  const todoDiv = createDynamicElement("div", "todo-item");
  const todoName = createDynamicElement("div", null);
  const todoId = createDynamicElement("div", "todo-id");
  const todoDueDate = createDynamicElement("div", "todo-due-date");
  const todoPriority = createDynamicElement("div", "todo-priority");
  const todoProject = createDynamicElement("div", "todo-project");
  todoName.innerText = todoModel.getTitle();
  todoDueDate.innerText = todoModel.getFormatDueDate();
  todoPriority.innerText = todoModel.getPriority();
  todoId.innerText = todoModel.getTodoId();
  const todoDisplayInfo = createDynamicElement("div", "todo-display");
  todoDisplayInfo.appendChild(todoName);
  todoDisplayInfo.appendChild(todoId);
  const todoInfoBottomPart = createDynamicElement("div", "todo-display-bottom");
  const todoBottomSeparation = createDynamicElement(
    "div",
    "todo-display-bottom-separation"
  );
  todoInfoBottomPart.appendChild(todoDueDate);

  if (todoModel.hasPriority()) {
    todoInfoBottomPart.appendChild(todoBottomSeparation);
    todoInfoBottomPart.appendChild(todoPriority);
  }

  if (todoModel.hasProject()) {
    todoProject.innerText = todoModel.getProject().getName();
    todoInfoBottomPart.appendChild(todoBottomSeparation);
    todoInfoBottomPart.appendChild(todoProject);
  }

  todoDisplayInfo.appendChild(todoInfoBottomPart);
  const todoFinish = createImage(checkImage, "todo-check");
  const todoDelete = createImage(deleteImage, "todo-delete");
  const todoEdit = createImage(editImage, "todo-edit");
  const todoAction = createDynamicElement("div", "todo-action");
  todoAction.appendChild(todoFinish);
  todoAction.appendChild(todoDelete);
  todoAction.appendChild(todoEdit);
  todoDiv.appendChild(todoDisplayInfo);
  todoDiv.appendChild(todoAction);
  todoDiv.addEventListener("click", todoDivListener);
  return todoDiv;
}

function todoDivListener(e) {
  if (e.target.classList.contains("todo-delete")) {
    deleteTodo(e);
  } else if (e.target.classList.contains("todo-edit")) {
    editTodo(e);
  }
}

function deleteTodo(e) {
  let idOfTask = getIdOfSelectedTask(e);
  todoProjectSource.removeTodo(idOfTask);
  renderTodoItems();
  e.target.parentNode.parentNode.removeEventListener("click", deleteTodo);
}

function editTodo(e) {
  let idOfTask = getIdOfSelectedTask(e);
  showModal(idOfTask);
  blurBackground();
}

function showModal(idOfSelectTask) {
  popUpModal.classList.remove("modal-invisible");
  const taskWithId = todoProjectSource.getTaskWithId(idOfSelectTask);
  console.log(taskWithId);
  const dateInput = popUpModal.querySelector(".date-input");
  dateInput.valueAsDate = taskWithId.getDueDate();
  const nameInput = popUpModal.querySelector(".name-input");
  nameInput.value = taskWithId.getTitle();
  const priorityInput = popUpModal.querySelector(".priority-input");
  setDefaultModalDropdown(priorityInput, taskWithId.getPriority());
  const projectSelectInput = popUpModal.querySelector(".project-input");
  projectSelectInput.innerHTML = "";
  addAllProjectsToSelect(taskWithId, projectSelectInput);

  const confirmEditCallBack = modalListenerWrapper(
    idOfSelectTask,
    taskWithId.getTitle(),
    projectSelectInput,
    nameInput,
    dateInput,
    priorityInput
  );
  popUpModal
    .querySelector(".accept-btn")
    .addEventListener("click", confirmEditCallBack);
}

function addAllProjectsToSelect(taskWithId, projectSelectInput) {
  const noneOption = createDynamicElement("option", "null");
  noneOption.innerText = "None";
  noneOption.value = "";
  projectSelectInput.appendChild(noneOption);
  const allProjects = todoProjectSource.getAllProjects();
  for (let i = 0; i < allProjects.length; i++) {
    const project = allProjects[i];
    const projectOption = createDynamicElement("option", null);
    projectOption.innerText = `${project.getName()} (id:${project.getId()})`;
    projectOption.value = project.getId();

    projectSelectInput.appendChild(projectOption);
    if (
      taskWithId.getProject() &&
      taskWithId.getProject().getId() === project.getId()
    ) {
      projectSelectInput.selectedIndex = i + 1;
    }
  }
}

function setDefaultModalDropdown(dropdown, priority) {
  const dropdownArr = [...dropdown.children];
  for (let i = 0; i < dropdownArr.length; i++) {
    if (dropdownArr[i].value === priority) {
      dropdown.selectedIndex = i;
      return;
    }
  }
}

function modalListenerWrapper(
  taskid,
  initTitle,
  projectSelectInput,
  nameInput,
  dateInput,
  priorityInput
) {
  const confirmEditListener = function (e) {
    e.stopPropagation();
    if (nameInput.value.length === 0) {
      nameInput.value = initTitle;
    }
    todoProjectSource.editTask(taskid, {
      newName: nameInput.value,
      newDate: new Date(getExactDateWithDateStr(dateInput.value)),
      newPriority: priorityInput.value,
      projectId: projectSelectInput.value,
    });
    e.target.removeEventListener("click", confirmEditListener);
    e.target.parentNode.classList.add("modal-invisible");
    unblurBackground();
    renderTodoItems();
  };

  return confirmEditListener;
}

function blurBackground() {
  Array.from(
    [...bodyContainer.children].filter(
      (child) => !child.classList.contains("edit-task-modal")
    )
  ).map((child) => child.classList.add("blur-background"));
}

function unblurBackground() {
  Array.from(
    [...bodyContainer.children].filter(
      (child) => !child.classList.contains("edit-task-modal")
    )
  ).map((child) => child.classList.remove("blur-background"));
}

function getIdOfSelectedTask(e) {
  let idOfSelectProject = Array.from(
    [...e.target.parentNode.parentNode.children].find((elem) =>
      elem.classList.contains("todo-display")
    ).children
  ).find((elem) => elem.classList.contains("todo-id")).innerText;
  return idOfSelectProject;
}

function addNewTodoListener(e) {
  if (e.target.classList.contains("add-symbol")) {
    const datePicker = [...addToDoDiv.children].find((elem) =>
      elem.classList.contains("new-todo-date-input")
    );

    const newTodoPriorityInput = [...addToDoDiv.children].find((elem) =>
      elem.classList.contains("new-todo-priority-input")
    );

    const newToDoInput = [...addToDoDiv.children].find((elem) =>
      elem.classList.contains("new-todo-input")
    );
    const newTodo = new ReminderItem(
      uuidv4(),
      newToDoInput.value,
      "",
      getExactDateWithDateStr(datePicker.value),
      newTodoPriorityInput.value
    );
    todoProjectSource.addTodo(newTodo);
    newToDoInput.value = "";
    datePicker.valueAsDate = getExactDate(Date.now());
    newTodoPriorityInput.selectedIndex = 0;
    renderTodoItems();
  }
}

function createDynamicElement(type, cssClass) {
  const element = document.createElement(type);
  if (cssClass) element.classList.add(cssClass);
  return element;
}

function createImage(image, cssClass) {
  const img = new Image();
  img.src = image;
  if (cssClass) img.classList.add(cssClass);
  return img;
}

function renderProjectList() {
  renderDefaultList();
  projectList.innerHTML = "";
  for (const project of todoProjectSource.projectList) {
    const projectItem = createNewProjectItem(project);
    if (
      todoProjectSource.curProject &&
      project.getId() === todoProjectSource.getSelectedProject().getId()
    ) {
      projectItem.classList.add("selected");
    } else {
      projectItem.classList.remove("selected");
    }
    projectList.appendChild(projectItem);
  }
}

function renderDefaultList() {
  if (todoProjectSource.allTask) {
    sideBarTop.querySelector(".task-link").classList.add("selected");
    sideBarTop.querySelector(".plan-link").classList.remove("selected");
    sideBarTop.querySelector(".today-link").classList.remove("selected");
  } else if (todoProjectSource.tmrTask) {
    sideBarTop.querySelector(".task-link").classList.remove("selected");
    sideBarTop.querySelector(".plan-link").classList.add("selected");
    sideBarTop.querySelector(".today-link").classList.remove("selected");
  } else if (todoProjectSource.todayTask) {
    sideBarTop.querySelector(".task-link").classList.remove("selected");
    sideBarTop.querySelector(".plan-link").classList.remove("selected");
    sideBarTop.querySelector(".today-link").classList.add("selected");
  } else if (todoProjectSource.curProject) {
    sideBarTop.querySelector(".task-link").classList.remove("selected");
    sideBarTop.querySelector(".plan-link").classList.remove("selected");
    sideBarTop.querySelector(".today-link").classList.remove("selected");
  }
}

function addNewProject() {
  let newProjectName = newProjectInput.value;
  if (newProjectName.length === 0) {
    projectNameErrorMsg.classList.remove("invisible");
    projectNameErrorMsg.innerText = "Project name cannot be empty!!!";
    return;
  }
  const project = new Project(uuidv4(), newProjectName);
  console.log(project);
  todoProjectSource.addProject(project);
  renderProjectList();
  hideErrorMessage();
  clearProjectNameInput();
}

function hideErrorMessage() {
  projectNameErrorMsg.innerText = "";
  projectNameErrorMsg.classList.add("invisible");
}

function clearProjectNameInput() {
  newProjectInput.value = "";
}

function createNewProjectItem(project) {
  const projectItem = createDynamicElement("div", "project-item");
  const projectNameContainer = createDynamicElement(
    "div",
    "project-name-container"
  );
  const projectSymbol = createImage(projectImage, "project-symbol");
  projectItem.appendChild(projectSymbol);
  projectNameContainer.innerText = project.getName();
  const projectIdContainer = createDynamicElement("div", "project-id");
  projectIdContainer.innerText = project.getId();
  const editProjectDiv = createDynamicElement("div", "edit-project-div");
  const editSymbol = createImage(editImage, "edit-symbol");
  editProjectDiv.appendChild(editSymbol);
  const deleteSymbol = createImage(deleteImage, "delete-symbol");
  const projectInfo = createDynamicElement("div", "project-info-display");
  projectInfo.appendChild(projectNameContainer);
  projectInfo.appendChild(projectIdContainer);
  editProjectDiv.appendChild(deleteSymbol);
  projectItem.appendChild(projectInfo);
  projectItem.appendChild(editProjectDiv);
  const projectItemListenerCallBack = projectItemListenerWrapper(projectItem);
  projectItem.addEventListener("click", projectItemListenerCallBack);
  return projectItem;
}

function projectItemListenerWrapper(projectItem) {
  const itemListener = function (e) {
    if (
      !e.target.classList.contains("delete-symbol") &&
      !e.target.classList.contains("edit-symbol")
    ) {
      todoProjectSource.setSelectedProject(
        projectItem.querySelector(".project-id").innerText
      );
      renderTodoItems();
      renderProjectList();
    } else if (e.target.classList.contains("delete-symbol")) {
      deleteProject(projectItem);
    } else if (e.target.classList.contains("edit-symbol")) {
      editProjectName(projectItem);
    }
  };

  return itemListener;
}

function editProjectName(projecItem) {
  const projectNameContainer = projecItem.querySelector(
    ".project-name-container"
  );
  console.log(projectNameContainer.innerText);
  const editProjectId = projecItem.querySelector(".project-id").innerText;
  const curProjectName = projectNameContainer.innerText;
  const editProjectNameInput = createDynamicElement("input", null);
  projectNameContainer.innerHTML = "";
  projectNameContainer.appendChild(editProjectNameInput);
  editProjectNameInput.focus();
  editProjectNameInput.addEventListener("blur", function () {
    projectNameContainer.innerText =
      editProjectNameInput.value.length === 0
        ? curProjectName
        : editProjectNameInput.value;
    todoProjectSource.editProject(
      editProjectId,
      projectNameContainer.innerText
    );
    renderProjectList();
    renderTodoItems();
  });
}

function deleteProject(projectItem) {
  const deleteProjectId = projectItem.querySelector(".project-id").innerText;
  todoProjectSource.deleteProject(deleteProjectId);
  renderTodoItems();
  renderProjectList();
}

renderTodoItems();
renderProjectList();
