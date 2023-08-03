export default class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.todoItems = [];
    this.todoCount = 0;
  }

  addItem(todo) {
    this.todoItems.push(todo);
    this.todoCount++;
  }

  removeItem(todoId) {
    this.todoItems = this.todoItems.filter(
      (item) => item.getTodoId() !== todoId
    );
    if (this.todoItems.length > 0) this.todoCount--;
  }

  getId() {
    return this.id;
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
