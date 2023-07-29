import ReminderItem from "./reminderItem";
import Project from "./project";
import "./style.css";
import "date-fns/endOfDay";
import deleteImage from "./images/delete.svg";
import editImage from "./images/edit.svg";

import { endOfDay } from "date-fns";

const newProjectInput = document.querySelector(".projectname-input");
const addProjectBtn = document.querySelector(".addproject-btn");
addProjectBtn.addEventListener("click", addNewProject);
const projectList = document.querySelector(".project-div");
const projects = [];

function renderProjectList() {
  for (const project of projects) {
    const projectItem = createNewProject(project.getName());
    projectList.appendChild(projectItem);
  }
}

function addNewProject(e) {
  const project = new Project(newProjectInput.value);
  projects.push(project);
  const projectItem = createNewProject(project.getName());
  projectList.appendChild(projectItem);
  newProjectInput.value = "";
}

function createNewProject(projectName) {
  const projectItem = createDynamicElement("div", "project-item");
  const projectNameContainer = createDynamicElement("div","project-name-container");
  projectNameContainer.innerText = projectName;
  const editProjectDiv = createDynamicElement("div", "edit-project-div");
  const editSymbol = createImage(editImage, "edit-symbol");
  editSymbol.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const curProjectName = projectNameContainer.innerText;
    const editProjectNameInput = createDynamicElement("input");
    projectNameContainer.innerHTML = "";
    projectNameContainer.appendChild(editProjectNameInput);
    editProjectNameInput.focus();
    editProjectNameInput.addEventListener("blur", function () {
      if (editProjectNameInput.value.length === 0) {
        console.log("project name is ", curProjectName);
        projectNameContainer.innerText = curProjectName;
        return;
      }
      projectNameContainer.innerText = editProjectNameInput.value;
    });
  });
  editProjectDiv.appendChild(editSymbol);
  const deleteSymbol = createImage(deleteImage, 'delete-symbol');
  editProjectDiv.appendChild(deleteSymbol);
  projectItem.appendChild(projectNameContainer);
  projectItem.appendChild(editProjectDiv);
  return projectItem;
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
