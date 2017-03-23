var app=angular.module('myApp',[]);

console.log("run")
app.run(function(){
	console.log("Hello")
});


app.controller('abc',['$scope','$rootScope',function($scope,$rootScope){
	console.log("myController")
	var name= ['gaurav', 'vyom','Mayank','amit','nishank'];

	$scope.getinfo = function(){

		console.log($scope.user)
		$scope.details = $scope.user;
		$scope.show1 = true;

		$scope.names = name;

	}


	
}]);

app.controller('xyz',['$scope','$rootScope',function($scope,$rootScope){
	console.log("myController")
	$rootScope.a = 2;
	$scope.b = 5;
	
}]);