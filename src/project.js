export default class Project {
  constructor(name) {
    this.name = name;
    this.todoItems = [];
    this.todoCount = 0;
  }

  addItem(todo) {
    this.todoItems.push(todo);
    this.todoCount++;
  }

  removeItem(todoIndex) {
    this.todoItems = this.todoItems.splice(todoIndex, 1);
    this.todoCount--;
  }

  getProject() {
    return this.todoItems;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getToDoCount() {
    return this.todoCount;
  }
}
