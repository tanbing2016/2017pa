let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug=require("debug")("2017pa:read");
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
//读取接口返回的数据并且把数据传给callback
module.exports = function(url,callback){
    //编码为null 那么 body会保留原始的buffer类型
    request({url,encoding:null},function(err,response,body){
        //如果请求没有出错,并且状态码等于200的话
        if(!err && response.statusCode == 200){
            //把gbk编码的Buffer转成utf8格式的字符串
            body = iconv.decode(body,'gbk');
            //用cheerio把响应体字符串转成jquery对象
            let $ = cheerio.load(body);
            let items = [];
            $(".keyword .list-title").each(function () {
                let $me=$(this);
                let item={
                    name:$me.text(),
                    url:$me.attr("href")
                };
                debug("读到"+item.name);
                items.push(item)
            });
            debug("读取完毕！");
            callback(null,items);//[{name:'你的名字',url:'https://www.baidu.com/baidu'}]
        }else{
            callback('请求数据失败');
        }
    })
};