
let async=require("async");
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let debug=require("debug")("2017pa:main");
let read=require("./read");
let write=require("./write");
async.waterfall([
    function(cb){
        read(url,cb)
    },
    function(data,cb){
        write(data,cb)
    },
],function(err,result){
    debug("处理完毕!");
    process.exit(0);//退出node进程   0是正常退出
});
module.exports=function(){
    async.waterfall([
        function(cb){
            read(url,cb)
        },
        function(data,cb){
            write(data,cb)
        },
    ],function(err,result){
        debug("处理完毕!");
        process.exit(0);//退出node进程   0是正常退出
    });
};