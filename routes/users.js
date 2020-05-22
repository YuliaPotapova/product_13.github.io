const routUsers = require('express').Router();
const {
  getAllUsers, getUser, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

routUsers.get('/', getAllUsers);
routUsers.get('/:id', getUser);
routUsers.post('/', createUser);
routUsers.patch('/me', updateUser);
routUsers.patch('/me/avatar', updateAvatar);

module.exports = routUsers;
