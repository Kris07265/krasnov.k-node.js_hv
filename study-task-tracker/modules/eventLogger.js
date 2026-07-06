const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'data', 'events.log');
const myEmitter = new EventEmitter();

const logToFile = (eventType, message) => {
    const timestamp = new Date().toISOString();
    const logLine = `${timestamp} | ${eventType} | ${message}\n`;

    fs.appendFile(logFilePath, logLine, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });
};

myEmitter.on('appStarted', () => {
    logToFile('appStarted', 'Application has started.');
});

myEmitter.on('taskCreated', (taskTitle) => {
    logToFile('taskCreated', `Task "${taskTitle}" was created.`);
});

myEmitter.on('taskCompleted', (taskId) => {
    logToFile('taskCompleted', `Task with ID ${taskId} was completed.`);
});

myEmitter.on('taskDeleted', (taskId) => {
    logToFile('taskDeleted', `Task with ID ${taskId} was deleted.`);
});

module.exports = myEmitter;