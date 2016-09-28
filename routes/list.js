var express = require('express');
var router = express.Router();
var List = require('../models/List');
var data = require('../data/');
router.get('/getList', function(req, res, next) {
  List.paginate({},{offset:req.query.offset,limit:10},function(err,result){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"response":result,"status":true});
    }
  });
});
router.post('/addMultiple',function(req,res,next){
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
  list.save(function(err,doc){
    if(err){
      res.send({"err":err,"status":false});
    }else{
      res.send({"status":true,"response":doc});
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
