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

  getItemAtIndex(index) {
    return this.todoItems[index];
  }

  setProject(project) {
    this.project = project;
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

  findTodoWithTitle(title) {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].getTitle() === title) {
        return i;
      }
    }
    return -1;
  }
}
