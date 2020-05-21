const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routUsers = require('./routes/users.js');
const routCards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '5ebe782af493bd3acc2de606',
  };
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', routUsers);
app.use('/cards', routCards);
app.use((req, res) => res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
