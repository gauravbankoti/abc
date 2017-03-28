var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html'
    });
    $routeProvider.when('/about_us', {
        templateUrl: 'views/about_us.html'
    });
    $routeProvider.when('/contact_us', {
        controller: 'XyzController'
        , templateUrl: 'views/contact_us.html'
    });
    $routeProvider.when('/filter', {
        controller: 'FilterController'
        , templateUrl: 'views/filter.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    $routeProvider.when('/promise', {
        controller: 'PromiseController'
        , templateUrl: 'views/promise.html'
    });
    $routeProvider.when('/currency', {
        controller: 'CurrencyController'
        , templateUrl: 'views/currency.html'
    });
    $routeProvider.when('/location', {
        controller: 'LocationController'
        , templateUrl: 'views/location.html'
    });
    $locationProvider.html5Mode(true);
}]);
app.controller('XyzController', ['$scope', function ($scope) {
    $scope.getData = function () {
        console.log($scope.obj);
    }
}])
app.controller('FilterController', ['$scope', '$filter', function ($scope, $filter) {
    var date = new Date();
    $scope.myVal = {
        x: 124523654.568
        , y: date
        , w: 'helllo'
    }
}]);
app.factory('MyFactory', ['$timeout', '$q', function ($timeout, $q) {
    var obj = {
        getData: function (num) {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    if (num == 0) {
                        reject('Error');
                    }
                    else {
                        resolve(num + 5);
                    }
                }, 2000);
            });
        }
        , getData2: function (num) {
            var square;
            var final;
            return $q(function (resolve, reject) {
                $timeout(function () {
                    square = num * num;
                    console.log('Square done');
                    $timeout(function () {
                        final = square + 5
                        console.log('final value calculated');
                        resolve(final);
                    }, 2000)
                }, 2000);
            });
            return final;
        }
        , getData3: function (num) {
            var square;
            var final;
            var q = $q.defer();
            $timeout(function () {
                if(num==0){
                    q.reject('Error')
                }
                square = num * num;
                q.notify(10);
                $timeout(function () {
                    final = square + 5
                    q.notify(90);
                    q.resolve(final);
                }, 2000)
            }, 2000);
            return q.promise;
        }
    }
    return obj;
}]);
app.controller('PromiseController', ['$scope', 'MyFactory','$http', function ($scope, MyFactory,$http) {
    $scope.submitForm = function () {
        MyFactory.getData3($scope.mynum).then(function (r) {
            console.log('resolved ' + r)
            $scope.result = r;
        },function(r){
            console.log(r)
        },function(r){
            console.log(r)
        });
    }
    $scope.calc=function(){
        $http({
            url:'http://api.fixer.io/latest?base=USD',
            method:'GET'
        }).then(function(res){
            console.log(res);
        },function(res){
            console.log(res);
        })
    }
}]);

app.controller('CurrencyController',['$scope','$http',function($scope,$http){
    $scope.submitForm=function(){
        $http({
            url:'http://api.fixer.io/latest',
            params:{
                'base':'a&b'
            },
            body:{
                
            },
            method:''
        }).then(function(response){
            console.log(response);
            $scope.rates=response.data.rates;
        },function(response){
            alert('Something went wrong');
            console.log(response);
        })
    }
}])

app.controller('LocationController',['$scope','$http',function($scope,$http){
    $scope.submitForm=function(){
        $http({
            url:'https://maps.googleapis.com/maps/api/geocode/json',
            params:{
                address:$scope.address
            }
        }).then(function(response){
            $scope.data=response.data;
        },function(response){
            $scope.data=response;
        })
    }
}])