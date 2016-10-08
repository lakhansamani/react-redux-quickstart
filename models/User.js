var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    "username":{
        type:String,
        index:true,
        unique:true
    },
    "password":{
        type:String,
        index:true
    }
});
var User = mongoose.model("User",user);
module.exports = User;
