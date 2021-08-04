const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/demo', {
    target: 'http://localhost:7531',
//    target: 'http://localhost:5600',
    changeOrigin: true
  }))
};
