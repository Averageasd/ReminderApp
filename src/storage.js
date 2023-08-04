const taskStorageObject = {
  todoId: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "",
};

const projectStorageObject = {};

export default class Storage {
  constructor() {
    this.init();
  }

  init() {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify({}));
    }
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", JSON.stringify([]));
    }
  }

  addTask(task) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    taskStorageObject["todoId"] = task.getTodoId();
    taskStorageObject["title"] = task.getTitle();
    taskStorageObject["description"] = task.getDescription();
    taskStorageObject["dueDate"] = task.getFormatDueDate();
    taskStorageObject["priority"] = task.getPriority();

    if (task.hasProject()) {
      taskStorageObject["projectId"] = task.getProject().getId();
    } else {
      if (taskStorageObject["projectId"]) {
        delete taskStorageObject.projectId;
      }
    }
    storedTasks[task.getTodoId()] = taskStorageObject;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}
