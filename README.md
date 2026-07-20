Homework 17 "MongoDZ"

🔹 Завдання 1: Налаштування MongoDB
Запусти MongoDB Compass та створіть базу shopDB.
Створи колекцію products.
Додай вручну 3 товари у вигляді JSON-документів:
Copy code
{
"name": "iPhone 15",
"price": 1200,
"category": "electronics",
"stock": 10
}
Формат здачі: скріншот створеної бази даних у Compass.
🔹 Завдання 2: Створення Node.js API з MongoDB
Створи Node.js API для роботи з товарами (products), яке дозволяє виконувати CRUD-операції.

📌 Вимоги:
✅ Окремі файли для:

Підключення до MongoDB (config/db.js)
Моделі товару (models/productModel.js)
CRUD-контролера (controllers/productController.js)
Маршрутів (routes/productRoutes.js)
Серверу Express (server.js)
✅ Операції API:

🔹 GET /api/products – отримати всі товари
🔹 GET /api/products/:id – отримати один товар
🔹 POST /api/products – створити товар
🔹 PUT /api/products/:id – оновити товар
🔹 DELETE /api/products/:id – видалити товар
✅ Використовувати:

Express.js для створення сервера
Mongoose для роботи з MongoDB
dotenv для збереження URI підключення
Структуру проекту можна брати з уроку