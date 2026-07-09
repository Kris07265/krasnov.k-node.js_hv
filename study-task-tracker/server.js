const http = require('http');
const taskService = require('./modules/taskService');
const fileStorage = require('./modules/fileStorage');
const myEmitter = require('./modules/eventLogger');

fileStorage.initStorage();
fileStorage.readTasks((tasksFromFile) => {
    taskService.setTasks(tasksFromFile);
});

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Study Task Tracker API</h1>');

    } else if (parsedUrl.pathname === '/tasks' && req.method === 'GET') {
        const status = parsedUrl.searchParams.get('status');
        let tasks = taskService.getTasks();

        if (status === 'completed') tasks = tasks.filter(t => t.completed === true);
        if (status === 'active') tasks = tasks.filter(t => t.completed === false);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));

    } else if (parsedUrl.pathname.startsWith('/tasks/') && req.method === 'GET') {
        const taskId = parseInt(parsedUrl.pathname.replace('/tasks/', ''), 10);
        const task = taskService.getTasks().find(t => t.id === taskId);

        if (task) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(task));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Task not found" }));
        }

    } else if (parsedUrl.pathname === '/tasks' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const newTask = taskService.addTask(data.title);

                myEmitter.emit('taskCreated', newTask.title);
                fileStorage.saveTasks(taskService.getTasks());

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newTask));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Invalid data" }));
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log('Server has started.: http://localhost:3000');
});