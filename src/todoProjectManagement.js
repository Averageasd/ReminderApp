import { toDate } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export default class TodoProjectManagement {
  constructor() {
    this.allTodoList = [];
    this.curProject = null;
    this.allTask = true;
    this.tmrTask = false;
    this.importantTask = false;
    this.selectedTask = null;
  }

  // Note: simplified version.
  // for now we only add new tasks to allTodoList.
  // check if the item with the given title is in list. if it is, dont do anything. Otherwise, add to list.
  addTodo(todo) {
    if (todo.getTitle().length === 0) {
      return;
    }
    this.allTodoList.push(todo);
  }

  removeTodo(todoId) {
    this.allTodoList = this.allTodoList.filter(
      (todoItem) => todoItem.getTodoId() !== todoId
    );
  }

  editTask(todoId, newAttr) {
    const taskToBeEdited = this.allTodoList.find(
      (task) => task.getTodoId() === todoId
    );
    taskToBeEdited.setTitle(newAttr["newName"]);
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
    this.importantTask = false;
  }

  setTmrTask() {
    this.allTask = false;
    this.importantTask = false;
    this.tmr = true;
  }

  setImportantTask() {
    this.allTask = false;
    this.importantTask = true;
    this.tmrTask = false;
  }

  getCurTodoList() {
    return this.allTodoList;
  }
}
