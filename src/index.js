import ReminderItem from "./reminderItem";
import Project from "./project";
import "./style.css";
import "date-fns/endOfDay";

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
  projectItem.addEventListener("click", createDynamicInput);
  newProjectInput.value = "";
}

function createDynamicInput(e) {
  e.target.removeEventListener("click", createDynamicInput);
  const curProjectName = e.target.innerText;
  e.target.innerHTML = "";
  const editProjectNameInput = document.createElement("input");
  e.target.appendChild(editProjectNameInput);
  editProjectNameInput.focus();
  editProjectNameInput.addEventListener("blur", function () {
    e.target.addEventListener('click', createDynamicInput);
    if (editProjectNameInput.value.length === 0){
      e.target.innerText = curProjectName;
      return;
    }
    e.target.innerText = editProjectNameInput.value;
  });
}

function createNewProject(projectName) {
  const projectItem = document.createElement("div");
  projectItem.innerText = projectName;
  return projectItem;
}
renderProjectList();
