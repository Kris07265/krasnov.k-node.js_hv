Homework 10

№1 Модулі та базова логіка Task Tracker

Тема
Розділення коду на власні модулі

Що практикуємо
require
module.exports
створення власних модулів
базову структуру Node.js-проєкту
роботу з функціями
Завдання
Створи простий проєкт study-task-tracker.

У проєкті має бути базова логіка для роботи із задачами, поки що без файлів і сервера.

Структура
Copy code
study-task-tracker/
app.js
modules/
taskService.js
taskFormatter.js
ТВимоги
У файлі taskService.js створи функції:

Copy code
addTask(title)
getTasks()
completeTask(id)
deleteTask(id)
еЗадача має мати таку структуру:

Copy code
{
id: м1,
title: 'Learn Node.js modules',
completed: false,
createdAt: '2026-07-03T...'
}
У файлі taskFormatter.js створи функцію, яка красиво виводить задачу в консоль.

Наприклад:

Copy code
[1] Learn Node.js modules — in progress
[2] Practice fs module — completed
аУ app.js імпортуй модулі та протестуй роботу:

додай 3 задачі;
виведи всі задачі;
познач одну задачу як виконану;
видали одну задачу;
знову виведи список.
Важливо
Використовуй один підхід до модулів:

Copy code
module.exports = ...
require(...)

Не змішуй export і require в одному завданні.

Результат
Після запуску:

Copy code

Роnode app.js
у консолі має бути видно, як задачі створюються, оновлюються і видаляються.



№2 — Збереження задач у файл

Тема
Робота з файловою системою

Що практикуємо
fs
path
читання файлів
запис у файл
перевірку існування файлу/папки
створення папки
Завдання
Розшир проєкт з ДЗ 1 так, щоб задачі зберігалися у файл.

Тепер після перезапуску програми задачі не мають зникати.

Оновлена структура
Copy code
study-task-tracker/
app.js
data/
tasks.json
modules/
taskService.js
taskFormatter.js
fileStorage.js
Вимоги
Створи модуль fileStorage.js.

У ньому мають бути функції:

Copy code
readTasks()
saveTasks(tasks)
initStorage()
Логіка
initStorage() має:

перевірити, чи існує папка data;
якщо папки немає — створити її;
перевірити, чи існує файл tasks.json;
якщо файлу немає — створити його з порожнім масивом:
Copy code
[]
readTasks() має читати задачі з tasks.json.

saveTasks(tasks) має записувати актуальний список задач у tasks.json.

Обов’язково
Для формування шляху до файлу використовуй path.join.

Наприклад:

Copy code
path.join(__dirname, '..', 'data', 'tasks.json')
Сценарій перевірки
У app.js:

виклич initStorage();
додай кілька задач;
збережи їх;
прочитай задачі з файлу;
виведи їх у консоль.
Результат
Після запуску програми має створитися файл:

Copy code
data/tasks.json
А всередині нього мають бути задачі.



№ 3 — Події, хеші та інформація про систему

Тема
Логування подій у Task Tracker

Що практикуємо
events
crypto
os
fs
створення логів
Завдання
Розшир проєкт так, щоб він логував важливі події.

Наприклад:

задача створена;
задача виконана;
задача видалена;
програма запущена.
Оновлена структура
Copy code
study-task-tracker/
app.js
data/
tasks.json
events.log
modules/
taskService.js
taskFormatter.js
fileStorage.js
eventLogger.js
systemInfo.js
Вимоги
Створи модуль eventLogger.js.

У ньому використай EventEmitter.

Мають бути події:

Copy code
taskCreated
taskCompleted
taskDeleted
appStarted
Коли подія відбувається, її треба записати у файл events.log.

Приклад запису:

Copy code
2026-07-03T12:30:00.000Z | taskCreated | Task "Learn fs module" was created
Crypto
Для кожної задачі додай поле hash.

Хеш має створюватися на основі:

назви задачі;
дати створення;
id.
Наприклад:

Copy code
crypto
.createHash('sha256')
.update(`${id}-${title}-${createdAt}`)
.digest('hex')
Задача тепер має виглядати так:

Copy code
{  id: 1,
title: 'Learn Node.js events',
completed: false,
createdAt: '2026-07-03T...',
hash: 'a8f3...'
}
OS
Створи модуль systemInfo.js.

Він має виводити:

операційну систему;
кількість вільної пам’яті;
час роботи системи;
кількість CPU.
Цю інформацію треба вивести при старті програми.

Результат
Після запуску:

Copy code
node app.js
має бути:

список задач;
інформація про систему;
файл
events.log;
у кожної задачі має бути hash.