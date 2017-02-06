var express=require('express');
var app=express();
var port=process.env.PORT|| 4500;

app.use(express.static(__dirname + '/client'));
//app.set('views', __dirname + '/client');
//app.set('view engine', 'html');


app.listen(port);

console.log("server run.....!");

app.post('/',function(req,res){
	res.send('Test.html');
})  