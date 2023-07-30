import ReminderItem from "./reminderItem";
import Project from "./project";
import "./style.css";
import "date-fns/endOfDay";
import deleteImage from "./images/delete.svg";
import editImage from "./images/edit.svg";

import { endOfDay } from "date-fns";

const newProjectInput = document.querySelector(".projectname-input");
const addProjectBtn = document.querySelector(".addproject-btn");
const projectNameErrorMsg = document.querySelector(".error-message");
addProjectBtn.addEventListener("click", addNewProject);
const projectList = document.querySelector(".project-div");
const mainConent = document.querySelector(".main-content");
const listTitleDisplay = document.querySelector(".project-title");
const projects = [];
let prjPointer = projects.length === 0 ? null : projects[0];
const projectNameSet = new Set();

function renderProjectList() {
  projectList.innerHTML = "";
  for (const project of projects) {
    const projectItem = createNewProject(project.getName());
    projectList.appendChild(projectItem);
  }
}

function addNewProject(e) {
  let newProjectName = newProjectInput.value;
  if (!projectNameChecker(newProjectName)) {
    displayInvalidProjectNameMsg();
    return;
  }
  projectNameSet.add(newProjectName);
  const project = new Project(newProjectName);
  projects.push(project);
  const projectItem = createNewProject(project.getName());
  projectList.appendChild(projectItem);
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

function projectNameChecker(projectName) {
  if (projectName.length === 0 || projectNameSet.has(projectName)) {
    return false;
  }
  return true;
}

function displayInvalidProjectNameMsg() {
  projectNameErrorMsg.innerText = "project name is empty or already exists!!!";
  projectNameErrorMsg.classList.remove("invisible");
}

function createNewProject(projectName) {
  const projectItem = createDynamicElement("div", "project-item");
  const projectNameContainer = createDynamicElement("div", "project-name-container");
  projectNameContainer.innerText = projectName;
  const editProjectDiv = createDynamicElement("div", "edit-project-div");
  const editSymbol = createImage(editImage, "edit-symbol");
  editSymbol.addEventListener("click", editProjectName);
  editProjectDiv.appendChild(editSymbol);
  const deleteSymbol = createImage(deleteImage, "delete-symbol");
  deleteSymbol.addEventListener("click", deleteProject);
  editProjectDiv.appendChild(deleteSymbol);
  projectItem.appendChild(projectNameContainer);
  projectItem.appendChild(editProjectDiv);
  projectItem.addEventListener("click", displayTodoItemsOfProjects);
  return projectItem;
}

function displayTodoItemsOfProjects(e) {
  let selectedProject = null;
  if (e.target.classList.contains("project-item")) {
    selectedProject = e.target;
  } else if (
    e.target.classList.contains("edit-project-div") ||
    e.target.classList.contains("project-name-container")
  ) {
    selectedProject = e.target.parentNode;
  }

  prjPointer =
    projects[Array.from(projectList.children).indexOf(selectedProject)];
  console.log(Array.from(projectList.children).indexOf(selectedProject));
  listTitleDisplay.innerText = prjPointer.getName();
  console.log(prjPointer);
}

function editProjectName(e) {
  e.stopPropagation();
  const projectItem = e.target.parentNode.parentNode;
  const projectNameContainer = Array.from(projectItem.children).find((node) =>
    node.classList.contains("project-name-container")
  );
  const indexOfCurProject = Array.from(projectList.children).indexOf(
    projectItem
  );
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
    projects[indexOfCurProject].setName(projectNameContainer.innerText);
  });
}

function deleteProject(e) {
  e.stopPropagation();
  const projectItem = e.target.parentNode.parentNode;
  const indexOfCurPrj = Array.from(projectList.children).indexOf(projectItem);
  const projectToBeDeleted = projects[indexOfCurPrj];
  if (prjPointer == projectToBeDeleted){
    listTitleDisplay.innerText = '';
  }
  projects.splice(indexOfCurPrj, 1);
  renderProjectList();
}

function createDynamicElement(type, cssClass) {
  const element = document.createElement(type);
  if (cssClass) element.classList.add(cssClass);
  return element;
}

function createImage(image, cssClass) {
  const img = new Image();
  img.src = image;
  img.classList.add(cssClass);
  return img;
}

renderProjectList();
