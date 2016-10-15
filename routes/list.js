var express = require('express');
var router = express.Router();
var List = require('../models/List');

router.get('/getList', function(req, res, next) {
  List.paginate({},{offset:parseInt(req.query.offset),limit:12,skip:0,sort:{_id:-1}},function(err,result){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"response":result,"status":true});
    }
  });
});
router.post('/addMultiple',function(req,res,next){
  var data = req.body.data;
  List.collection.insert(data,function(err,doc){
    if(err){
      res.send({"err":err,"status":false});
    }
    else{
      res.send("Operation successfully");
    }
  });

});
router.post('/addData',function(req,res,next){
  var list = new List(req.body);
  list.user_id = req.authToken._doc._id;
  console.log(list);
  list.save(function(err,doc){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"status":true,"response":{item:doc}});
    }
  });
});
router.put('/updateData/:id',function(req,res,next){
  List.update({_id:req.params.id},{$set:req.body},function(err,data){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"status":true,"response":data});
    }
  });
});
router.get('/getItem/:id',function(req,res,next){
  List.findOne({_id:req.params.id},function(err,data){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"status":true,"response":data});
    }
  });
});
router.delete('/deleteData/:id',function(req,res,next){
  List.remove({_id:req.params.id},function(err,data){
    if(err){
      res.send({"err":err,"status":false});
    }
    else{
      res.send({"status":true,"response":data});
    }
  });
});
module.exports = router;
