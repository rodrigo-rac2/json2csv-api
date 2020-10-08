module.exports = app => {
    const controller = require('../controllers/json2csvController')();
  
    app.route('/api/v1/getCsv')
      .get(controller.convertjson2csv);

      app.route('/api/v1/postJson')
      .post(controller.postJson);
      
      // router.post('/login',function(req,res){
      //   var user_name=req.body.user;
      //   var password=req.body.password;
      //   console.log("User name = "+user_name+", password is "+password);
      //   res.end("yes");
      // });

  }