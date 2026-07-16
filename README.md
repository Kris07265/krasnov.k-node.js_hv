Homework 15 "Middleware в Express.js"

Це завдання продовжує попереднє ДЗ. Можете працювати в тій самій директорії та тому самому server.js, або скопіювати проєкт у нову директорію

Завдання 1: Middleware-логер
Додайте на початок файлу (одразу після створення app) власний middleware, який для кожного запиту виводить у термінал метод, URL та час у форматі:

Copy code
GET /about — 14.07.2026, 19:32:05
Підказка: new Date().toLocaleString('uk-UA'). І не забудьте про next().

Запустіть сервер, відкрийте кілька сторінок у браузері.

Очікуваний результат: у терміналі з'являється рядок на кожен запит — включно з 404-ми.

POST-запит
Додайте маршрут POST /feedback, який приймає JSON із полями name і message та відповідає текстом:

Copy code
Дякуємо, <name>! Ваш відгук отримано.
Не забудьте підключити потрібний вбудований middleware — інакше req.body буде undefined.

Перевірте через curl:

bash

Copy code
curl -X POST -H "Content-Type: application/json" \
-d '{"name":"Оля","message":"Чудовий курс!"}' \
http://localhost:3000/feedback
Очікуваний результат: Дякуємо, Оля! Ваш відгук отримано.

Додайте валідацію: якщо в тілі запиту немає поля name — поверніть статус 400 і текст Поле name є обов'язковим.

bash

Copy code
curl -I -X POST -H "Content-Type: application/json" -d '{}' http://localhost:3000/feedback
Очікуваний результат: HTTP/1.1 400 Bad Request.

Завдання 3: Статичні файли
Створіть папку public, а в ній файл info.html з будь-яким HTML-вмістом:

bash

Copy code
mkdir public && touch public/info.html
Підключіть вбудований middleware express.static так, щоб файл був доступний за адресою http://localhost:3000/info.html.

Очікуваний результат: браузер показує вашу HTML-сторінку, хоча окремого маршруту /info.html у коді немає.

Завдання 4: Обробник помилок
Додайте маршрут GET /crash, який навмисно кидає помилку:

javascript

Copy code
app.get('/crash', (req, res) => {
throw new Error('Тестова помилка');
});
Та глобальний обробник помилок у самому кінці файлу (після 404), який:

логує помилку в термінал через console.error(err.stack);
відповідає статусом 500 і текстом Щось пішло не так!.
Пам'ятайте: обробник помилок Express розпізнає за чотирма аргументами.

bash

Copy code
curl -I http://localhost:3000/crash
Очікуваний результат: HTTP/1.1 500 Internal Server Error, у терміналі сервера — stack trace, а сам сервер продовжує працювати й відповідати на інші запити.