import format from "date-fns/format";
export default class ReminderItem {
  constructor(todoId, title, description, dueDate, priority) {
    this.todoId = todoId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = null;
  }

  setProject(project){
    this.project = project;
  }

  getProject() {
    return this.project;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getTodoId(){
    return this.todoId;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return format(this.dueDate, "MM/dd/yyyy");
  }

  getPriority() {
    return this.priority;
  }
}
