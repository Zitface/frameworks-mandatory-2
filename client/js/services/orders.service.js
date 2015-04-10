(function(){
	"use strict";

	var ordersService = function($http, $rootScope){
		
		var createOrder = function(order){
			$http.post("/api/order/", {
				'firstname': order.firstname,
				'lastname': order.lastname,
				'address': order.address,
				'zip': order.zip,
				'city': order.city,
				'email': order.email
			})
			.success(function(response){
				console.log("The order has been placed")
				console.log(response)
			})
			.error(function(response){
				console.log(response)
			});
		}

		var getOrders = function(){
			return $http.get("/api/orders")
						.then(function(response){
							return response.data;
						}, getError);
		}

		var getError = function(reason) {
			$rootScope.error = "Something went wrong with the data!";
		}
		
		return {
			getOrders:getOrders,
			createOrder:createOrder
		}
	}

	angular
		.module("Main")
		.factory("ordersService", ordersService);
}());