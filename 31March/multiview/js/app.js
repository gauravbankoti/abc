var app=angular.module('myapp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'views/form.html',
        controller:'FormController'
    });
    
    $routeProvider.when('/contact',{
        templateUrl:'views/contact.html',
        controller:'ContactController'
    });
    $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope',function($rootScope){
    $rootScope.contacts=[];
}]);

app.controller('FormController',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
    $scope.formSubmit=function(){
        console.log($scope.user)
        $rootScope.contacts.push($scope.user);
       
       
       /*//$location.path('/contact');
       
        $rootScope.$broadcast('mysharedfun');
        */
    }
}]);


app.controller('ContactController',['$scope','$rootScope',function($scope,$rootScope){
    
    $scope.contacts=$rootScope.contacts;
    /*
    $rootScope.$on('mysharedfun',function(){
        console.log('Shared Function Called');
    });
    */
}]);

// contact-view

// <div contact-view></div>
// <contact-view></contact-view>

// @ ->to pass as string

// = -> to pass as object
app.directive('contactView',['$http',function($http){
    return {
        templateUrl:'directives/contact.html',
        restrict:'E',
        replace:true,
        scope:{
            user:'='
        },
        controller:function($scope){
           $scope.show=function(){
               alert('Hello ' + $scope.user.name);
           }
        }
    }
}]);