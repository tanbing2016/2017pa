var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/2017pa");
var WebSchema=new mongoose.Schema({
    name:String,
    url:String
});
var WebModel=mongoose.model("Web",WebSchema);
module.exports.WebModel=WebModel;