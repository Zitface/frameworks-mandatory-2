var mongoose = require('mongoose');

var schema = {
	firstname: String,
	lastname: String,
	address: String,
	zip: Number,
	city: String,
	email: String
}	

var Orders = mongoose.model("Orders", schema);

module.exports = Orders;

