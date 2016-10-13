var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var ListSchema = new Schema({
  "title":{type:String,required:true,index:true },
  "url":{type:String,required:true},
  "user_id":{type:Schema.ObjectId,ref:'User'}
});
ListSchema.index({ name: 1, type: -1 });
ListSchema.plugin(mongoosePaginate);
var List = mongoose.model("List",ListSchema);
module.exports = List;
