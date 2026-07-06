const tasks = [];

let taskId = 1;

const addTask = (title) => {
    const task = {
        id: taskId++,
        title: title,
        completed: false,
        createdAt: new Date().toISOString(),
    };
    tasks.push(task);
    return task;
}
const getTasks = () => {
    return tasks;
}

const completeTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.completed = true;
        return task;
    }
    return null;
}

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        return deletedTask[0];
    }
    return null;
}

module.exports = {
    addTask,
    getTasks,
    completeTask,
    deleteTask,
}