module.exports = app => {
    const controller = require('../controllers/json2csvController')();
  
    app.route('/api/v1/getCsv')
      .get(controller.convertjson2csv);

      app.route('/api/v1/getRodrigo')
      .get(controller.getRodrigo);

  }