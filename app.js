const express = require('express');
const app = express();
app.engine('ejs', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index.ejs", {"page": 'index'});
});

app.get("/mercury", function(req, res){
	res.render('mercury.ejs', {"page": 'mercury'});
});

app.get("/venus", function(req, res){
	res.render("venus.ejs", {"page": 'venus'})
});

app.get("/mars", function(req, res){
	res.render("mars.ejs", {"page": 'mars'});
});

app.get("/pluto", function(req, res){
	res.render("pluto.ejs", {"page": 'pluto'});
});

app.get("/earth", function(req, res){
	res.render("earth.ejs", {"page": 'earth'});
});

app.get("/")
//server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express Server is running..")
});