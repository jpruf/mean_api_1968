var app1968 = angular.module('app1968', []);

app1968.factory('pfactory', function($http){
	var factory = {};
	factory.get_all = function(callback){
		$http.get('/show').success(function(output){
			callback(output)
		})
	}
	factory.addperson = function(info, callback){
		$http.get('/new/' + info.name).success(function(output){
			callback(output)
		})
	}
	factory.removeperson = function(info, callback){
		$http.post('/remove/' + info.name).success(function(output){
			callback(output)
		})
	}
	return factory;
})

app1968.controller('pcontroller', function($scope, pfactory){
	pfactory.get_all(function(data){
		$scope.people = data;
	})
	$scope.addperson = function(){
		pfactory.addperson($scope.newperson, function(data){
			$scope.people.push(data);		
		})
			$scope.newperson = null;
	}
	$scope.removeperson = function(person){
		pfactory.removeperson(person, function(data){
			$scope.people = data;	
		})
	}
})