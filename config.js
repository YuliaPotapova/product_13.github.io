module.exports.express = require('express');
module.exports.mongoose = require('mongoose');
module.exports.bodyParser = require('body-parser');

module.exports.routUsers = require('./routes/users.js');
module.exports.routCards = require('./routes/cards.js');

module.exports.PORT = process.env.PORT || 3000;
module.exports.DATABASE_URL = 'mongodb://localhost:27017/mestodb';
