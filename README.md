#### Проектная работа №13
по программе обучения WEB-разработке на Яндекс.Практикум

# Проект по темам: создание API.REST, базы данных
#### ***URL: <https://github.com/YuliaPotapova/product_13.github.io>***
#### ***Версия: 0.0.2***

***
*Автор проекта: Юлия Потапова*
***

В рамках данного проекта:
* в файл конфигурации линтера .eslintrc добавлено исключение для имён переменных с подчёркиванием (_id);
* Node.js приложение подключается к серверу баз данных Mongo;
* создана новая база данных;
* описаны схемы и созданы модели документов БД;
* созданы контроллеры и роуты;
* поля схем валидируются средствами mongoose и дополнительно установленного npm-модуля validator.

***
Чтобы развернуть проект локально необходимо:
* установить MongoDB (инструкция для ОС Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition, для macOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/, для Linux: https://docs.mongodb.com/manual/administration/install-on-linux/);
* создать директорию для базы данных: C:\data\db;
* установить графический интерфейс для взаимодействия с MongoDB: https://www.mongodb.com/download-center/compass;
* запустить сервер MongoDB на локальной машине;
* создать новую базу данных с именем mestodb;
* создать в ней 2 коллекции: users и cards;
* установить node.js;
* клонировать репозиторий на свой компьютер;
* из библиотеки пакетов NPM установить модули, перечисленные в зависимостях в файле package.json;
* запустить файл app.js на выполнение в node.js.
