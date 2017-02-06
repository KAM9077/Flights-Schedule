var express=require('express');
var app=express();
var port=process.env.PORT|| 4500;

app.use(express.static(__dirname + '/client'));

app.listen(port);

console.log("server run.....!");
