const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Некорректное название карточки или неверная ссылка на ресурс' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(() => new NotFoundError('Нет карточки с таким id'))
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: err.message }));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new NotFoundError('Нет карточки с таким id'))
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: err.message }));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new NotFoundError('Нет карточки с таким id'))
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(err.statusCode || 500).send({ message: err.message }));
};
