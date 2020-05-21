const { express } = require('../config');
const routUsers = require('./users');
const routCards = require('./cards');

const routes = express.Router();

routes.use('/users', routUsers);
routes.use('/cards', routCards);
routes.use((req, res) => res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }));

module.exports = routes;
