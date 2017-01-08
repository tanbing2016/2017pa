
let express=require("express");
let app=express();
let path=require("path");
let WebModel=require("./model").WebModel;
app.set("view engine","html");
app.use(express.static(path.resolve("public")));
app.engine("html",require("ejs").__express);
app.set("views",path.resolve("views"));
app.get("/",function(req,res){
    WebModel.find({},function(err,result){
        res.render("project",{title:"电影风云榜",result})
    })
});
app.listen(9090);
let CronJob=require("cron").CronJob;
let job=new CronJob("0 * * * * *",function(){
    let main=require("./main");
    main();
});
job.start();