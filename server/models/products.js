var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	img: String,
	description: String,
	category: String
}

var Products = mongoose.model("Products", schema);

module.exports = Products;