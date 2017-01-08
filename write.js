let WebModel=require("./model").WebModel;
let debug=require("debug")("2017pa:write");
let async=require("async");
module.exports=function(items,callback){
    //WebModel.create(items,callback);
    WebModel.remove({},function(err,res){
        async.forEach(items,function(item,cb){
            WebModel.create(item,function(err,result){
                debug("保存电影:"+item.name);
                cb();
            })
        },function(){
            debug("保存完毕!");
            callback();
        })
    });

};