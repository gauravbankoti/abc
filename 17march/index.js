var app=angular.module('myApp',[]);

app.controller('ctrl',['$scope',function($scope){
	$scope.getData=function(){
		console.log($scope.obj);
		
		
	}
	
	$scope.arr=[1,2,3,4,5,6,7];
	
	
	$scope.objArray=[
		{name:'Nadeem',roll:1},
		{name:'Gaurav',roll:2},
		{name:'Amit',roll:3},
		{name:'Nishank',roll:4}
	];
}]);