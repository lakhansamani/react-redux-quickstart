var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../bin/config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/verifyToken',function(req,res,next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    jwt.verify(token, config.cipherSalt, function(err, decoded) {
      if(err){
        res.send({ status: false, message: 'Failed to authenticate token.',err:err });
      }
      else{
        res.send({status:true,response:"valid token"});
      }
    });
  }
  else{
    return res.status(403).send({ status:false,message:"Empty Token"});
  }
});
module.exports = router;
