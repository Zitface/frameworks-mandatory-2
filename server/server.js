var express 	= require('express'),
	path 		= require('path'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	milkDb		= 'milkDb',

  	router		= express.Router(),
  	product		= require('./controllers/api/product'),
  	category	= require('./controllers/api/category'),
  	order		= require('./controllers/api/order');

	app 		= express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client'))); 

router.get('/api/products', product.getAll);
router.get('/api/categories', category.getAll);
router.get('/api/orders', order.getAll);
router.post('/api/order', order.create);
router.post('/api/product', product.create);
router.route('/api/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);

app.use('/', router);

mongoose.connect('mongodb://localhost/' + milkDb);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

function startServer(){
	var server = app.listen(4000, function () {
		var port = server.address().port;
		console.log('Listening hard on port ' + port);
	});
}