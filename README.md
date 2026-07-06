Homework 11 "№2 — Збереження задач у файл"

Тема Робота з файловою системою

Що практикуємо fs path читання файлів запис у файл перевірку існування файлу/папки створення папки Завдання Розшир проєкт з ДЗ 1 так, щоб задачі зберігалися у файл.

Тепер після перезапуску програми задачі не мають зникати.

Оновлена структура Copy code study-task-tracker/ app.js data/ tasks.json modules/ taskService.js taskFormatter.js fileStorage.js Вимоги Створи модуль fileStorage.js.

У ньому мають бути функції:

Copy code readTasks() saveTasks(tasks) initStorage() Логіка initStorage() має:

перевірити, чи існує папка data; якщо папки немає — створити її; перевірити, чи існує файл tasks.json; якщо файлу немає — створити його з порожнім масивом: Copy code [] readTasks() має читати задачі з tasks.json.

saveTasks(tasks) має записувати актуальний список задач у tasks.json.

Обов’язково Для формування шляху до файлу використовуй path.join.

Наприклад:

Copy code path.join(__dirname, '..', 'data', 'tasks.json') Сценарій перевірки У app.js:

виклич initStorage(); додай кілька задач; збережи їх; прочитай задачі з файлу; виведи їх у консоль. Результат Після запуску програми має створитися файл:

Copy code data/tasks.json А всередині нього мають бути задачі.

№ 3 — Події, хеші та інформація про систему

Тема Логування подій у Task Tracker

Що практикуємо events crypto os fs створення логів Завдання Розшир проєкт так, щоб він логував важливі події.

Наприклад:

задача створена; задача виконана; задача видалена; програма запущена. Оновлена структура Copy code study-task-tracker/ app.js data/ tasks.json events.log modules/ taskService.js taskFormatter.js fileStorage.js eventLogger.js systemInfo.js Вимоги Створи модуль eventLogger.js.

У ньому використай EventEmitter.

Мають бути події:

Copy code taskCreated taskCompleted taskDeleted appStarted Коли подія відбувається, її треба записати у файл events.log.

Приклад запису:

Copy code 2026-07-03T12:30:00.000Z | taskCreated | Task "Learn fs module" was created Crypto Для кожної задачі додай поле hash.

Хеш має створюватися на основі:

назви задачі; дати створення; id. Наприклад:

Copy code crypto .createHash('sha256') .update(${id}-${title}-${createdAt}) .digest('hex') Задача тепер має виглядати так:

Copy code { id: 1, title: 'Learn Node.js events', completed: false, createdAt: '2026-07-03T...', hash: 'a8f3...' } OS Створи модуль systemInfo.js.

Він має виводити:

операційну систему; кількість вільної пам’яті; час роботи системи; кількість CPU. Цю інформацію треба вивести при старті програми.

Результат Після запуску:

Copy code node app.js має бути:

список задач; інформація про систему; файл events.log; у кожної задачі має бути hash.