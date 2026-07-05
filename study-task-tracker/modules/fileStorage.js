const fs = require('fs');
const path = require('path');

const dataDirPath = path.join(__dirname, '..', 'data');
const tasksFilePath = path.join(dataDirPath, 'tasks.json');

const initStorage = () => {
    if(!fs.existsSync(dataDirPath)){
        fs.mkdir(dataDirPath, (err) => {
            if(err){
                console.error("Error creating folder");
                return;
            }
            console.log("Creating folder successfully");
        });
    }

    if (!fs.existsSync(tasksFilePath)){
        fs.writeFile(tasksFilePath, '[]', (err) => {
            if(err){
                console.error("Error creating file");
                return;
            }
            console.log("Creating file successfully");
        });
    }
}

const readTasks = () => {
    const file = fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if(err){
            console.error("Error reading file");
            return;
        }
        console.log("File contents:", data);
    });
    return JSON.parse(file);
}

const saveTasks = (tasks) => {
    const file = JSON.stringify(tasks, null, 2);
    fs.writeFile(tasksFilePath, file, (err) => {
        if(err){
            console.error("Error saving tasks");
            return;
        }
        console.log("Saved tasks");
    });
}

module.exports = {
    initStorage,
    readTasks,
    saveTasks,
}