const taskService = require('./modules/taskService');
const taskFormatter = require('./modules/taskFormatter');
const fileStorage = require('./modules/fileStorage');

fileStorage.initStorage();

const taskList = () => {
    const tasks = taskService.getTasks();

    tasks.forEach(task => {
        console.log(taskFormatter.formatTask(task));
    })
}
console.log("Added tasks");
taskService.addTask('Learn Node.js modules');
taskService.addTask('Practice fs module');
taskService.addTask('Practice in Hillel');
taskList();

console.log("Completed task");
taskService.completeTask(1);
taskList();

console.log("Deleted task");
taskService.deleteTask(1);
taskList();

console.log("Saved tasks");
fileStorage.saveTasks(taskService.getTasks());

console.log("Read tasks");
fileStorage.readTasks((tasksFromFile) => {
    tasksFromFile.forEach(task => {
        console.log(taskFormatter.formatTask(task));
    });
});