-A single page web application built using HTML, CSS, JS and Webpack.

## Objectives :
- [x] Only work with tasks for now.
- [x] Remove task.
- [x] Add task.
- [x] when modal shows up, background is blurred.
- [x] Add options to add date for user in the add task bar.
- [x] Display task's priority.
- [x] Edit task.
- [x] View all tasks.
- [x] View planned tasks.
- [x] View today's tasks.
- [x] todo-items now have IDs.
- [x] Allow duplicate tasks.

## More feature when we add custom projects :
- [x] Add new project to project list on the sidebar.
- [x] Projects have unique IDs.
- [x] Create functions to create html non-image elements and images.
- [x] Edit the project name by clicking on the edit symbol.
- [x] Delete project by clicking on the delete symbol.
- [x] Refactor code. Make functions to delete and edit projects.
- [x] Log some text when click on a project item.
- [x] Create a project pointer that keeps track of the currently selected project.
- [x] When a project is selected, its background color changed to darker gray.
- [x] Log the project info after it gets clicked on.
- [x] Display project's name in main content div.
- [x] Show error message when user does not enter project name(duplicate project names are allowed)
- [x] when the currently selected project is deleted, its name in main content div should also be deleted.
- [x] View to-do items of a project by clicking on this project.
- [x] Add a div where user can enter name of new item.
- [x] Add todo items to currently selected project.
- [x] Create a class that manages the interactions between to-do items and projects.
- [x] Move all the logic about managing todo-items and projects into this class.
- [x] By default, the task link is selected and all to-do items are displayed.
- [x] if user does not select a project before adding items, newly created items are only added to 'tasks'. Otherwise, the new to-do item are also added to selected project.
- [x] When a project is deleted, all of its to-do items will also be deleted.
- [x] User can remove project and items.
- [x] Now user can choose to move any to-do item to the currently available projects.
- [ ] make this code more modular. (maybe latter)

## Features when we add local storage :
- [x] Create a local storage.
- [x] Implement add operation. if task belongs to a project, in the local storage, it will have reference to the project ID.
- [x] initially, we have a key called "tasks" in localStorage. 
- [ ] initially, we have a key called "projects" in localStorage.
