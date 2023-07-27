import ReminderItem from "./reminderItem";
import Project from "./project";
import './style.css';
import 'date-fns/endOfDay';

import { endOfDay } from "date-fns";

const p1 = new Project('p1');
const p2 = new Project('p2');
const task1 = new ReminderItem('t1','this task', endOfDay(new Date()),'high');
const task2 = new ReminderItem('t2','this task', endOfDay(new Date()),'high');

p1.addItem(task1);
p2.addItem(task2);

const sidebar = document.createElement('div');
sidebar.classList.add('side-bar');
document.body.appendChild(sidebar);
const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);
const taskLink = document.createElement('a');
taskLink.innerHTML = 'Tasks';
const importantLink = document.createElement('a');
importantLink.innerHTML = 'Important';
const todayLink = document.createElement('a');
todayLink.innerHTML = 'Today';
const tomrrowLink = document.createElement('a');
tomrrowLink.innerHTML = 'Tomorrow';
const horizontalLine = document.createElement('hr');
horizontalLine.classList.add('sidebar-divider');
const sidebarTop = document.createElement('div');
sidebarTop.classList.add('sidebar-top');
sidebarTop.appendChild(taskLink);
sidebarTop.appendChild(importantLink);
sidebarTop.appendChild(todayLink);
sidebarTop.appendChild(tomrrowLink);
sidebar.appendChild(sidebarTop);
sidebar.appendChild(horizontalLine);

const projectDiv = document.createElement('div');
projectDiv.classList.add('project-div');
const project1 = document.createElement('div');
const project2 = document.createElement('div');
projectDiv.appendChild(project1);
projectDiv.appendChild(project2);
project1.innerText = p1.getName();
project2.innerText = p2.getName();
sidebar.appendChild(projectDiv);

const secondHorizontalLine = document.createElement('hr');
secondHorizontalLine.classList.add('sidebar-divider');

sidebar.appendChild(secondHorizontalLine);

const addProjectDiv = document.createElement('div');
addProjectDiv.classList.add('add-project-div');
sidebar.appendChild(addProjectDiv);

const projectNameInput = document.createElement('input');
projectNameInput.classList.add('projectname-input');
addProjectDiv.appendChild(projectNameInput);
const addProjectBtn = document.createElement('button');
addProjectBtn.innerText = 'Add project';
addProjectBtn.classList.add('addproject-btn');
addProjectDiv.appendChild(addProjectBtn);

const projectItem1 = document.createElement('div');
const projectItem2 = document.createElement('div');
projectItem1.classList.add('todo-item');
projectItem2.classList.add('todo-item');
mainContent.appendChild(projectItem1);
mainContent.appendChild(projectItem2);
 
