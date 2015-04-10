var Orders = require('../../models/orders');

var order = {
  create: function(req, res, next){
    res.send(req.body);
    var newOrder = new Orders(req.body);
    newOrder.save();
  },
  getAll: function(req, res, next){
    Orders.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

module.exports = order;
