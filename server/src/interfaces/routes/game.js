'use strict';

const gameController = require('../controllers/gameController');

const routeConfig = {
  name: 'game',
  version: '0.0.1',
  mainPath: '/game',
  routes: [
    {
      method: 'GET',
      path: '/:type',
      handler: gameController.getByType,
    },
    {
      method: 'GET',
      path: '/:name',
      handler: gameController.getByName,
    }
  ]
};

module.exports = routeConfig;