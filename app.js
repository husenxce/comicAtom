var util = require('util');
var fs = require('fs');
var engines = require('consolidate');
var url = require('url');
var express = require('express');
var app = express();
var path = require('path');
var name, email, message;
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname,'')));
app.use(function(req,res){
res.sendfile(__dirname+'/index.html');
});

app.get('*',function(req,res){
res.render('index.html');
});

app.listen(port);
console.log("Express server listening on Port: "+port);
