const routeConfig = {
  name: 'hello',
  version: '0.0.1',
  mainPath: '/healthcheck',
  route: {
    method: 'GET',
    path: '/',
    handler: (req, res) => res.json({message: 'is alive'}),
  }
};

module.exports = routeConfig;