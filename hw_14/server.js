const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Отримано запит: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Головна сторінка. Код 200 — успіх.');
});

app.get('/about', (req, res) => {
    res.send('Сторінка "Про нас".');
});

app.get('/time', (req, res) => {
    res.send('Поточний час: ' + new Date().toLocaleString('uk-UA'));
});

app.get('/error', (req, res) => {
    res.status(500).send('Помилка сервера. Код 500.');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Користувач з ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).send('Не вказано пошуковий запит.');
    }

    res.send(`Ви шукали: ${query}`);
});

app.get('/user/:id/orders', (req, res) => {
    const userId = req.params.id;
    const status = req.query.status || 'не вказано';

    res.send(`Замовлення користувача ${userId} зі статусом: ${status}`);
});

app.use((req, res) => {
    res.status(404).send('Сторінку не знайдено. Код 404.');
});

app.listen(3000, () => {
    console.log('Сервер запущено: http://localhost:3000');
});