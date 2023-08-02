import ReminderItem from "./reminderItem";
import Project from "./project";
import TodoProjectManagement from "./todoProjectManagement";
import "./style.css";
import "date-fns/endOfDay";
import deleteImage from "./images/delete.svg";
import editImage from "./images/edit.svg";
import addImage from "./images/add.svg";
import checkImage from "./images/check.svg";
import { v4 as uuidv4 } from "uuid";
import { getExactDate } from "./exactDateCal";
import { getExactDateWithDateStr } from "./exactDateCal";

import format from "date-fns/format";
import endOfToday from "date-fns/endOfToday";

const bodyContainer = document.querySelector(".body-container");
const todoContainer = document.querySelector(".todo-container");
const mainContent = document.querySelector(".main-content");
const addToDoDiv = createDynamicElement("div", "add-todo-div");
mainContent.appendChild(addToDoDiv);
const addSymbol = createImage(addImage, "add-symbol");
const newToDoInput = createDynamicElement("input", "new-todo-input");
const popUpModal = document.querySelector(".edit-task-modal");
newToDoInput.placeholder = "add new item here...";
const datePicker = createDynamicElement("input", "date-input");
datePicker.type = "date";
datePicker.valueAsDate = getExactDate(Date.now());
addToDoDiv.appendChild(addSymbol);
addToDoDiv.appendChild(newToDoInput);
addToDoDiv.appendChild(datePicker);
addToDoDiv.addEventListener("click", addNewTodoListener);
const todoProjectSource = new TodoProjectManagement();
const tomorrowLink = document.querySelector('.plan-link');
tomorrowLink.addEventListener('click', function(e){
  todoProjectSource.setPlannedTask();
  renderTodoItems();
});

function renderTodoItems() {
  while (todoContainer.childNodes.length > 0) {
    todoContainer.removeChild(todoContainer.lastChild);
  }
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
  }

  else if (e.target.classList.contains("todo-edit")) {
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
  console.log("id of edit task ", idOfTask);
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
  const confirmEditCallBack = modalListenerWrapper(
    idOfSelectTask,
    taskWithId.getTitle(),
    nameInput,
    dateInput,
    priorityInput
  );
  popUpModal
    .querySelector(".accept-btn")
    .addEventListener("click", confirmEditCallBack);
}

function setDefaultModalDropdown(dropdown, priority) {
  switch (priority) {
    case "":
      dropdown.selectedIndex = 3;
      break;
    case "high":
      dropdown.selectedIndex = 0;
      break;
    case "medium":
      dropdown.selectedIndex = 1;
      break;
    case "low":
      dropdown.selectedIndex = 2;
      break;
  }
}

function modalListenerWrapper(
  taskid,
  initTitle,
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
      newDate: new Date(dateInput.value + " EDT"),
      newPriority: priorityInput.value,
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
    const newTodo = new ReminderItem(
      uuidv4(),
      newToDoInput.value,
      "",
      endOfToday(),
      ""
    );
    const addBar = e.target.parentNode;
    const dateInput = [...addBar.children].find((child) =>
      child.classList.contains("date-input")
    );
    console.log(dateInput.value);
    newTodo.setDueDate(getExactDateWithDateStr(dateInput.value));
    todoProjectSource.addTodo(newTodo);
    newToDoInput.value = "";
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

// renderProjectList();
// displaySelectedProject();
// const projectNameSet = new Set();

// function renderProjectList() {
//   projectList.innerHTML = "";
//   for (const project of projects) {
//     const projectItem = createNewProject(project.getName());
//     projectList.appendChild(projectItem);
//   }
// }

/**
 *
 * Dont touch these adding projects functions.
 */
// function addNewProject(e) {
//   let newProjectName = newProjectInput.value;
//   if (!projectNameChecker(newProjectName)) {
//     displayInvalidProjectNameMsg();
//     return;
//   }
//   projectNameSet.add(newProjectName);
//   const project = new Project(newProjectName);
//   projects.push(project);
//   const projectItem = createNewProject(project.getName());
//   projectList.appendChild(projectItem);
//   hideErrorMessage();
//   clearProjectNameInput();
// }

// function hideErrorMessage() {
//   projectNameErrorMsg.innerText = "";
//   projectNameErrorMsg.classList.add("invisible");
// }

// function clearProjectNameInput() {
//   newProjectInput.value = "";
// }

// function projectNameChecker(projectName) {
//   if (projectName.length === 0 || projectNameSet.has(projectName)) {
//     return false;
//   }
//   return true;
// }

// function displayInvalidProjectNameMsg() {
//   projectNameErrorMsg.innerText = "project name is empty or already exists!!!";
//   projectNameErrorMsg.classList.remove("invisible");
// }

// function createNewProject(projectName) {
//   const projectItem = createDynamicElement("div", "project-item");
//   const projectNameContainer = createDynamicElement(
//     "div",
//     "project-name-container"
//   );
//   projectNameContainer.innerText = projectName;
//   const editProjectDiv = createDynamicElement("div", "edit-project-div");
//   const editSymbol = createImage(editImage, "edit-symbol");
//   editSymbol.addEventListener("click", editProjectName);
//   editProjectDiv.appendChild(editSymbol);
//   const deleteSymbol = createImage(deleteImage, "delete-symbol");
//   deleteSymbol.addEventListener("click", deleteProject);
//   editProjectDiv.appendChild(deleteSymbol);
//   projectItem.appendChild(projectNameContainer);
//   projectItem.appendChild(editProjectDiv);
//   projectItem.addEventListener("click", selectProject);
//   return projectItem;
// }

// function selectProject(e) {
//   let selectedProject = null;
//   if (e.target.classList.contains("project-item")) {
//     selectedProject = e.target;
//   } else if (
//     e.target.classList.contains("edit-project-div") ||
//     e.target.classList.contains("project-name-container")
//   ) {
//     selectedProject = e.target.parentNode;
//   } else {
//     return;
//   }

//   prjPointer =
//     projects[Array.from(projectList.children).indexOf(selectedProject)];
//   console.log(Array.from(projectList.children).indexOf(selectedProject));
//   displaySelectedProject();
// }

// function displaySelectedProject() {
//   if (prjPointer == null) {
//     return;
//   }
//   listTitleDisplay.innerText = prjPointer.getName();
//   renderTodoItems(prjPointer);
// }

// function editProjectName(e) {
//   e.stopPropagation();
//   const projectItem = e.target.parentNode.parentNode;
//   const projectNameContainer = Array.from(projectItem.children).find((node) =>
//     node.classList.contains("project-name-container")
//   );
//   const indexOfCurProject = Array.from(projectList.children).indexOf(
//     projectItem
//   );
//   const curProjectName = projectNameContainer.innerText;
//   const editProjectNameInput = createDynamicElement("input", null);
//   projectNameContainer.innerHTML = "";
//   projectNameContainer.appendChild(editProjectNameInput);
//   editProjectNameInput.focus();
//   editProjectNameInput.addEventListener("blur", function () {
//     projectNameContainer.innerText =
//       editProjectNameInput.value.length === 0
//         ? curProjectName
//         : editProjectNameInput.value;
//     projects[indexOfCurProject].setName(projectNameContainer.innerText);
//   });
// }

// function deleteProject(e) {
//   e.stopPropagation();
//   const projectItem = e.target.parentNode.parentNode;
//   const indexOfCurPrj = Array.from(projectList.children).indexOf(projectItem);
//   const projectToBeDeleted = projects[indexOfCurPrj];
//   if (prjPointer == projectToBeDeleted) {
//     listTitleDisplay.innerText = "";
//     todoContainer.innerHTML = "";
//   }
//   projects.splice(indexOfCurPrj, 1);
//   renderProjectList();
// }

//const newProjectInput = document.querySelector(".projectname-input");
// const addProjectBtn = document.querySelector(".addproject-btn");
// const projectNameErrorMsg = document.querySelector(".error-message");
// addProjectBtn.addEventListener("click", addNewProject);
// const projectList = document.querySelector(".project-div");
// const listTitleDisplay = document.querySelector(".project-title");
