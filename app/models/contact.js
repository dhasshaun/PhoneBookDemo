var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
	contactName: {
		type: String,
		require: true
	},
	contactNo: {
		type: String,
		require: true
	},
	contactEmail: {
		type: String,
		require: true
	}
});
var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
