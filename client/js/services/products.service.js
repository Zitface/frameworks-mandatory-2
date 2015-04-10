(function(){
	"use strict";

	var productsService = function($http, $rootScope){

		var getProducts = function(){
			return $http.get("/api/products")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getProduct = function(id){
			return $http.get("/api/product")
						.then(function(response){
							return findProductInArray(response.data, id);
						}, getError)
		}

		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			})
		}
			
		var getCategories = function(){
			return $http.get("/api/categories")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getError = function(reason) {
			$rootScope.error = "Something went wrong with the data!";
		}

		//Admin privileges

		var createProduct = function(product){
			$http.post("/api/product/", {
				'name': product.name,
				'price': product.price,
				'category': product.category,
				'description': product.description
			})
			.success(function(response){
				console.log(response)
			})
			.error(function(response){
				console.log(response)
			})
		}

		var updateProduct = function(id, product){
			$http.put("/api/product/" + id, {
				'name': product.name,
				'price': product.price,
				'image': product.image,
				'category': product.category,
				'description': product.description
			})
			.success(function(){
				console.log('Product updatet');
			});
		}

		var deleteProduct = function(id){
			console.log(id);
			return $http.delete("/api/product/" + id)
						.then(function(response){
							return response;
						});
		}

		return {
			getProducts:getProducts,
			getCategories:getCategories,
			getProduct:getProduct,
			createProduct:createProduct,
			updateProduct:updateProduct,
			deleteProduct:deleteProduct,
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService);
}());