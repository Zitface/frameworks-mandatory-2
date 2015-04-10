(function(){
	"use strict";

	angular
		.module("Main.orders", [])
		.controller("ordersController", ordersController);

	function ordersController($scope, ordersService, cartService){

		
		$scope.createOrder= function(order){
			console.log("Order saved!")
			var order = this.order;
			ordersService.createOrder(order);
		}			

		var modelOrders = function(data)
		{
			$scope.orders = data;
		}

		ordersService.getOrders()
			.then(modelOrders);


	}

}());