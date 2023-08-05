export default class Storage {
  constructor() {
    this.init();
  }

  init() {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify({}));
    }
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", JSON.stringify({}));
    }
  }

  addTask(task) {
    const storedTasks = this.getStoredTasks();
    const mappedTaskObject = this.modelToLocalStorageTaskMapper(task);
    storedTasks[task.getTodoId()] = mappedTaskObject;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  modelToLocalStorageTaskMapper(taskModel) {
    const taskObject = {};
    taskObject["todoId"] = taskModel.getTodoId();
    taskObject["title"] = taskModel.getTitle();
    taskObject["description"] = taskModel.getDescription();
    taskObject["dueDate"] = taskModel.getFormatDueDate();
    taskObject["priority"] = taskModel.getPriority();
    if (taskModel.hasProject()) {
      taskObject["projectId"] = taskModel.getProject().getId();
    } else {
      if (taskObject["projectId"]) {
        delete taskObject.projectId;
      }
    }
    return taskObject;
  }

  deleteTask(taskId) {
    const storedTasks = this.getStoredTasks();
    delete storedTasks[taskId];
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  editTask(task) {
    const storedTasks = this.getStoredTasks();
    const taskToBeEdited = this.modelToLocalStorageTaskMapper(task);
    storedTasks[task.getTodoId()] = taskToBeEdited;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  addProject(project) {
    const storedProjects = this.getStoredProjects();
    const mappedProjectObject = this.modelToLocalStorageProjectMapper(project);
    storedProjects[project.getId()] = mappedProjectObject;
    localStorage.setItem("projects", JSON.stringify(storedProjects));
  }

  removeProject(projectId) {
    const storedProjects = this.getStoredProjects();
    const storedTasks = this.getStoredTasks();
    delete storedProjects[projectId];
    for (const idKey in storedTasks) {
      const taskObj = storedTasks[idKey];
      if (taskObj["projectId"] && taskObj["projectId"] === projectId) {
        delete storedTasks[idKey];
      }
    }
    localStorage.setItem('projects', JSON.stringify(storedProjects));
    localStorage.setItem('tasks',JSON.stringify(storedTasks));
  }

  editProject(project){
    const storedProjects = this.getStoredProjects();
    const projectToBeEdited = storedProjects[project.getId()];
    projectToBeEdited['name'] = project.getName();
    localStorage.setItem('projects', JSON.stringify(storedProjects));
  }

  modelToLocalStorageProjectMapper(projectModel) {
    const projectObject = {};
    projectObject["id"] = projectModel.getId();
    projectObject["name"] = projectModel.getName();
    projectObject["todoCount"] = projectModel.getToDoCount();
    return projectObject;
  }

  getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  getStoredProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }
}
