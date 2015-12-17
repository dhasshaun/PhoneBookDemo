var express = require('express');
var app = express();
//var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', './views');
app.listen(3000, function(){
	console.log("Running on port 3000");
});
require('./app/routes/routes.js')(app);
// var ll = require('./app/models/contact.js');
// console.log(ll)
