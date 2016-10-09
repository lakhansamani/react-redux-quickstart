var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var config = require("../bin/config");
var jwt = require('jsonwebtoken');
router.post('/saveUser',function(req,res,next){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        console.log(hash);
        req.body.password = hash;
        var user = new User(req.body);
        user.save(function(err,doc){
            if(err){
                res.send({err:err,status:false});
            }
            else{
                res.send({response:doc,status:true});
            }
        });
    });

});
router.post("/login",function(req,res,next){
    User.findOne({username:req.body.username},function(err,doc){
        if(err){
            res.send({err:err,status:false});
        }
        else{
            if(doc){
                bcrypt.compare(req.body.password, doc.password, function(e, r) {
                    if(r){
                        var token = jwt.sign(doc, config.cipherSalt, {
                            expiresIn:1440
                        });
                        res.send({response:{message:"Login successfully",user:doc,token:token},status:true});
                    }
                    else{
                        res.send({err:"Invalid password",status:false});
                    }
                });
            }
            else{
                res.send({err:"No User found",status:false});
            }

        }
    });
});
router.get('/getUsers',function(req,res,next){
    User.find({},function(err,users){
        if(err){
            res.send({err:err,status:false});
        }
        res.send({status:true,response:users});
    });
});
module.exports  = router;
