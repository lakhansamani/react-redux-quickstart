var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var ListSchema = new Schema({
  "previewHeight":Number,
  "likes":Number,
  "favorites":Number,
  "tags":String,
  "webformatHeight":Number,
  "views": Number,
  "webformatWidth": Number,
  "previewWidth": Number,
  "comments": Number,
  "downloads": Number,
  "pageURL": String,
  "previewURL": String,
  "webformatURL": String,
  "imageWidth": Number,
  "user_id": Number,
  "user": String,
  "type": String,
  "id": Number,
  "userImageURL": String,
  "imageHeight": Number
});
ListSchema.plugin(mongoosePaginate);
var List = mongoose.model("List",ListSchema);
module.exports = List;
