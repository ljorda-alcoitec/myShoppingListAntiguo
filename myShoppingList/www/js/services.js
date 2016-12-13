'use strict';

angular.module('myShoppingList.services', ['ngResource'])
	.constant("baseURL", "http://localhost:3000/")

	.factory('listaCompraFactory', ['$resource', 'baseURL', function($resource, baseURL){
		return $resource(baseURL+"listaCompra/:id");
	}
	]);


