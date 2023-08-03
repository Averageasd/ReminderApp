import { toDate } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { getExactDate } from "./exactDateCal";

export default class TodoProjectManagement {
  constructor() {
    this.allTodoList = [];
    this.projectList = [];
    this.curProject = null;
    this.allTask = true;
    this.tmrTask = false;
    this.todayTask = false;
  }

  addProject(project) {
    if (project.getName().length === 0) {
      return;
    }
    this.projectList.unshift(project);
  }

  addTodo(todo) {
    if (todo.getTitle().length === 0) {
      return;
    }
    this.allTodoList.unshift(todo);
    if (this.curProject) this.curProject.addItem(todo);
  }

  removeTodo(todoId) {
    this.allTodoList = this.allTodoList.filter(
      (todoItem) => todoItem.getTodoId() !== todoId
    );
    if (this.curProject) this.curProject.removeItem(todoId);
  }

  editTask(todoId, newAttr) {
    const taskToBeEdited = this.getTaskWithId(todoId);
    taskToBeEdited.setTitle(newAttr["newName"]);
    taskToBeEdited.setDueDate(newAttr["newDate"]);
    taskToBeEdited.setPriority(newAttr["newPriority"]);
  }

  getTaskWithId(todoId) {
    return this.allTodoList.find((task) => task.getTodoId() === todoId);
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
    console.log(getExactDate(Date.now()));
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
}
