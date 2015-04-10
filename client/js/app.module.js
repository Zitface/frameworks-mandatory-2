(function(){
	"use strict";

	angular
		.module("Main",
			["Main.products","Main.product", "Main.orders", "Main.cart", "ngRoute"]
		)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		})

		.config(function($routeProvider){
        	$routeProvider
        	        .when("/checkout", {
                                templateUrl: "views/checkout.html",
                                controller: "ordersController"
                        })
                        .when("/admin", {
                                templateUrl: "views/admin.html",
                                controller: "productsController"
                        })
                        .when("/createProduct", {
                                templateUrl: "views/createProduct.html",
                                controller: "productsController"
                        })
                        .when("/displayProducts", {
                                templateUrl: "views/displayProducts.html",
                                controller: "productsController"
                        })
                        .when("/orders", {
                                templateUrl: "views/orders.html",
                                controller: "ordersController"
                        })
        		.when("/", {
        			templateUrl: 'views/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })
}());