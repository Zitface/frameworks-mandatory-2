(function(){
	"use strict";

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService, cartService){

		var modelProducts = function(data)
		{
			$scope.products = data;
		}

		var modelCategories = function(data)
		{
			$scope.categories = data;
		}

		$scope.categoriesSelected = [];
		$scope.categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category);

			if(i > -1) {
				$scope.categoriesSelected.splice(i, 1);
			} else {
				$scope.categoriesSelected.push(category);
			}
		}

		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		$scope.addToCart = function(product)
		{
			var quantity = this.quantity;
			cartService.addProductToCart(product, quantity);
		}

		$scope.createProduct= function(product){
				console.log("The product has been created and saved in the database")
				var product = this.product;
				productsService.createProduct(product);
		}	

		$scope.updateProduct = function(id){
				console.log("Update")
				var product = this.product;
				productsService.updateProduct(id, product);
		}

		$scope.deleteProduct = function(){
				console.log("Delete!")
				productsService.deleteProduct()
				.then(productsService.getProducts()
						.then(modelProducts))
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getCategories()
			.then(modelCategories);

	}

}());