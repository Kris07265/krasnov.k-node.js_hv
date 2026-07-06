const taskService = require('./modules/taskService');
const taskFormatter = require('./modules/taskFormatter');

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