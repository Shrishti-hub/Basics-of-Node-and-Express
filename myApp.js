var express = require('express');
var app = express();
require('dotenv').config(); //including env_var 

app.use(function(req,res,next){
    console.log(req.method +" "+req.path+" - "+req.ip);
    next();
})

app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html");
})

app.use("/public",express.static(__dirname + "/public"));

app.get('/json',function(req,res){
    console.log(process.env.MESSAGE_STYLE+ "something?");
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json(
            {"message": "HELLO JSON"}
            );
    }else{
    res.json(
        {"message": "Hello json"}
        );
    }
})
app.get('/now',function(req,res,next){
    req.time = new Date().toString();
    next();
},function(req,res){
    res.json(
        {"time": req.time}
    )
}
)
app.get("/:word/echo",function(req,res){
    res.json(
        { "echo" : req.params.word}
    )
})

console.log("Hello World");


































 module.exports = app;
