const fs = require('fs');
const path = require('path');

const dataDirPath = path.join(__dirname, '..', 'data');
const tasksFilePath = path.join(dataDirPath, 'tasks.json');

const initStorage = () => {
    if(!fs.existsSync(dataDirPath)){
        fs.mkdirSync(dataDirPath)
    }

    if (!fs.existsSync(tasksFilePath)){
        fs.writeFileSync(tasksFilePath, '[]')
    }
}

const readTasks = () => {
    const file = fs.readFileSync(tasksFilePath, 'utf8')
    return JSON.parse(file);
}

const saveTasks = (tasks) => {
    const file = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFilePath, file)
}

module.exports = {
    initStorage,
    readTasks,
    saveTasks,
}