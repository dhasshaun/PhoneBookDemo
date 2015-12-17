var mongoose = require('mongoose');
var contact = require('../../app/models/contact.js');
mongoose.connect('mongodb://localhost/phoneBook');

var models = {
	contact: contact
}
module.exports = models;
