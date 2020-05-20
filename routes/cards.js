const routCards = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

routCards.get('/', getCards);
routCards.post('/', createCard);
routCards.delete('/:cardId', deleteCard);
routCards.put('/:cardId/likes', likeCard);
routCards.delete('/:cardId/likes', dislikeCard);

module.exports = routCards;
