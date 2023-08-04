import { toDate } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { getExactDate } from "./exactDateCal";
import DefaultProjectNames from "./DefaultProjectNames";
import Storage from "./storage";

export default class TodoProjectManagement {
  constructor() {
    this.allTodoList = [];
    this.projectList = [];
    this.curProject = null;
    this.allTask = true;
    this.tmrTask = false;
    this.todayTask = false;
    this.storage = new Storage();
  }

  addProject(project) {
    if (project.getName().length === 0) {
      return;
    }
    this.projectList.unshift(project);
  }

  deleteProject(projectId) {
    const projectToBeDeleted = this.projectList.find(
      (prj) => prj.getId() === projectId
    );

    if (projectToBeDeleted === this.getSelectedProject()){
      this.setAllTask();
    }
    this.projectList = this.projectList.filter(
      (prj) => prj.getId() !== projectId
    );
    this.allTodoList = this.allTodoList.filter(
      (todo) =>
        todo.getProject() === null || todo.getProject() !== projectToBeDeleted
    );
  }

  editProject(projectId, projectName) {
    const projectToBeEdited = this.projectList.find(
      (prj) => prj.getId() === projectId
    );
    projectToBeEdited.setName(projectName);
  }

  addTodo(todo) {
    if (todo.getTitle().length === 0) {
      return;
    }
    this.allTodoList.unshift(todo);
    if (this.curProject) {
      this.curProject.addItem(todo);
      todo.setProject(this.curProject);
    }
    this.storage.addTask(todo);
  }

  removeTodo(todoId) {
    this.allTodoList = this.allTodoList.filter(
      (todoItem) => todoItem.getTodoId() !== todoId
    );

    this.projectList.forEach((proj) => proj.removeItem(todoId));
  }

  editTask(todoId, newAttr) {
    const taskToBeEdited = this.getTaskWithId(todoId);
    taskToBeEdited.setTitle(newAttr["newName"]);
    taskToBeEdited.setDueDate(newAttr["newDate"]);
    taskToBeEdited.setPriority(newAttr["newPriority"]);
    const newProjectId = newAttr["projectId"];
    const projectOfTask = taskToBeEdited.getProject();
    if (projectOfTask){
      projectOfTask.removeItem(todoId);
      taskToBeEdited.setProject(null);
    }
    if (newProjectId){
      const newProject = this.getProjectWithId(newProjectId);
      newProject.addItem(taskToBeEdited);
      taskToBeEdited.setProject(newProject);
    }
  }

  getTaskWithId(todoId) {
    return this.allTodoList.find((task) => task.getTodoId() === todoId);
  }

  getProjectWithId(projectId){
    return this.projectList.find((prj) => prj.getId() === projectId);
  }

  setSelectedProject(projectId) {
    this.curProject = this.projectList.find((prj) => prj.getId() === projectId);
    this.allTask = false;
    this.tmrTask = false;
    this.todayTask = false;
  }

  getSelectedProject() {
    return this.curProject;
  }

  setAllTask() {
    this.allTask = true;
    this.tmrTask = false;
    this.todayTask = false;
    this.curProject = null;
  }

  setPlannedTask() {
    this.allTask = false;
    this.todayTask = false;
    this.tmrTask = true;
    this.curProject = null;
  }

  setTodayTask() {
    this.allTask = false;
    this.todayTask = true;
    this.tmrTask = false;
    this.curProject = null;
  }

  getCurTodoList() {
    if (this.tmrTask) {
      return this.allTodoList.filter(
        (todo) =>
          differenceInDays(todo.getDueDate(), getExactDate(Date.now())) >= 0
      );
    }

    if (this.todayTask) {
      return this.allTodoList.filter(
        (todo) =>
          differenceInDays(todo.getDueDate(), getExactDate(Date.now())) == 0
      );
    }

    if (this.curProject) {
      return this.curProject.getProject();
    }

    return this.allTodoList;
  }

  getAllProjects(){
    return this.projectList;
  }

  getCurTodoListName(){
    if (this.allTask){
      return DefaultProjectNames.ALL_TASK;
    }
    if (this.tmrTask){
      return DefaultProjectNames.PLANNED_TASK;
    }
    if (this.curProject){
      return this.curProject.getName();
    }
    if (this.todayTask){
      return DefaultProjectNames.TODAY_TASK;
    }
    return '';
  }
}
