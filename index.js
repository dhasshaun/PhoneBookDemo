var express = require('express');
var app = express();
//var mongoose = require('mongoose');

app.use(express.static('public'));
app.set('view engine', 'jade');
app.set('views', './views');
app.listen(3000);

app.get('/', function(req, res){
	res.render('index');
});
