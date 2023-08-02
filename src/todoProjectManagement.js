import { toDate } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { getExactDate } from "./exactDateCal";

export default class TodoProjectManagement {
  constructor() {
    this.allTodoList = [];
    this.curProject = null;
    this.allTask = true;
    this.tmrTask = false;
    this.todayTask = false;
    this.selectedTask = null;
  }

  addTodo(todo) {
    if (todo.getTitle().length === 0) {
      return;
    }
    this.allTodoList.unshift(todo);
  }

  removeTodo(todoId) {
    this.allTodoList = this.allTodoList.filter(
      (todoItem) => todoItem.getTodoId() !== todoId
    );
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

  setSelectedTask(index) {
    this.selectedTask = this.allTodoList[index];
  }

  getSelectedTask() {
    return this.selectedTask;
  }

  setAllTask() {
    this.allTask = true;
    this.tmrTask = false;
    this.todayTask = false;
  }

  setPlannedTask() {
    this.allTask = false;
    this.todayTask = false;
    this.tmrTask = true;
  }

  setTodayTask() {
    this.allTask = false;
    this.todayTask = true;
    this.tmrTask = false;
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

    return this.allTodoList;
  }
}
