const taskService = require('./modules/taskService');
const taskFormatter = require('./modules/taskFormatter');


const taskList = () => {
    const tasks = taskService.getTasks();

    tasks.forEach(task => {
        console.log(taskFormatter.formatTask(task));
    })
}

taskService.addTask('Learn Node.js modules');
taskService.addTask('Practice fs module');
taskService.addTask('Practice in Hillel');

taskList();

taskService.completeTask(1);

taskList();

taskService.deleteTask(1);

taskList();