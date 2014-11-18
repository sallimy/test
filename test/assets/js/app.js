(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.product = gem;
	});
	var gem = {
		name:"maple",
		price:2.98,
		description:'',
	};
})();
