const taskService = require('./modules/taskService');
const taskFormatter = require('./modules/taskFormatter');
const fileStorage = require('./modules/fileStorage');
const systemInfo = require('./modules/systemInfo');
const myEmitter = require('./modules/eventLogger');

fileStorage.initStorage();

console.log("System Info")
systemInfo.systemInfoLog();

myEmitter.emit('appStarted');

const taskList = () => {
    const tasks = taskService.getTasks();

    tasks.forEach(task => {
        console.log(taskFormatter.formatTask(task));
    })
}
console.log("Added tasks");
const task1 = taskService.addTask('Learn Node.js modules');
myEmitter.emit('taskCreated', task1.title);
const task2 = taskService.addTask('Practice fs module');
myEmitter.emit('taskCreated', task2.title);
const task3 = taskService.addTask('Practice in Hillel');
myEmitter.emit('taskCreated', task3.title);
taskList();

console.log("Completed task");
const completedTask = taskService.completeTask(1);
if (completedTask) {
    myEmitter.emit('taskCompleted', completedTask.id);
}
taskList();

console.log("Deleted task");
const deletedTask = taskService.deleteTask(1);
if (deletedTask) {
    myEmitter.emit('taskDeleted', deletedTask.id);
}
taskList();

console.log("Saved tasks");
fileStorage.saveTasks(taskService.getTasks());

console.log("Read tasks");
fileStorage.readTasks((tasksFromFile) => {
    tasksFromFile.forEach(task => {
        console.log(taskFormatter.formatTask(task));
    });
});