var app=angular.module('myApp',[]);

app.controller('ctrl',['$scope',function($scope){
	$scope.objArray=[];
	$scope.getData=function(){
		var newObj={
			name:$scope.obj.name,
			roll:$scope.obj.roll
		}
		$scope.objArray.push(newObj);
		$scope.obj={};
	}	
	
	$scope.deleteObj=function(item){
		console.log(item);
		//$scope.objArray.remove(item);
	}
	$scope.editObj=function(item){
		//
	}
	var arr=[1,2,3,4,5,6];
	//arr.slice(2,4) --> 345
	//arr.splice(2,4) --> 3456
	
	// arr.remove(5)
}]);