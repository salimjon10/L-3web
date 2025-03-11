const taskListStorageName = "tasks"

export function resetList() {
    const arr = [];
    localStorage.setItem(taskListStorageName, JSON.stringify(arr));
  }
  
  export function addTask(task) {
    let taskList = JSON.parse(localStorage.getItem(taskListStorageName));
    taskList.push(task);
    localStorage.setItem(taskListStorageName, JSON.stringify(taskList));
  }
  
  export function editTask(index, newTitle, newBody) {
    let taskList = JSON.parse(localStorage.getItem(taskListStorageName));
    taskList[index].title = newTitle;
    taskList[index].bodyTask = newBody;
    localStorage.setItem(taskListStorageName, JSON.stringify(taskList));
  }
  
  export function delTask(index) {
    let taskList = JSON.parse(localStorage.getItem(taskListStorageName));
    taskList.splice(index, 1);
    localStorage.setItem(taskListStorageName, JSON.stringify(taskList));
  }
  
  export function getTaskList() {
    let taskList = JSON.parse(localStorage.getItem(taskListStorageName));
    if(taskList == null){
      localStorage.setItem(taskListStorageName, JSON.stringify([]));
    }
    return taskList;
  }
  
  export function moveTask(dragIndex, hoverIndex) {
    const taskList = getTaskList();
    const draggedTask = taskList[dragIndex];
    taskList.splice(dragIndex, 1);
    taskList.splice(hoverIndex, 0, draggedTask);
    localStorage.setItem(taskListStorageName, JSON.stringify(taskList));
  }