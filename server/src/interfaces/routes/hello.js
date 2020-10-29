'use strict';

const helloController = require('../controllers/helloController');

const routeConfig = {
  name: 'hello',
  version: '0.0.1',
  mainPath: '/hello',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: helloController.sayHello,
    },
    {
      method: 'GET',
      path: '/:name',
      handler: helloController.sayHelloPerson,
    }
  ]
};

module.exports = routeConfig;