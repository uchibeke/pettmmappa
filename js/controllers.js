var guestControllers = angular.module('guestControllers', [])

guestControllers.controller('ListController', ['$scope', '$http', '$timeout',
function($scope, $http, $timeout) {

	$scope.data = $scope.data ? $scope.data : {};
	$scope.actions = $scope.actions ? $scope.actions : {};
	var d = $scope.data;
	var a = $scope.actions;

	d.portfolioItems = [];

	d.data = []

	var c = 0;

	d.current = {};

	$http.get("http://40.71.253.77:8080/get_all_dogs/").then(function(response) {
		sample = response.data.animals;

		// d.petData = sample;

		console.log(response)

		d.petData = response.data.animals.map(pet => {
			if (pet.img_url) {
				return pet;
			}
		})

		d.p2 = d.petData.map(v => {
			d.current[v.geo_lat + v.geo_long] = v;
			d.data.push({
				foo : sample.indexOf(v) + 1,
				bar : sample.indexOf(v) + 1
			})
			return {
				pos : [v.geo_lat, v.geo_long]
			};
		})

		d.positions = d.p2;

		a.getPetInfo = function(desiredKey) {
			console.log("Hey")
			for (var key in d.petData) {
				if (d.petData.hasOwnProperty(key)) {
					if (d.petData[key].lat == desiredKey.lat && d.petData[key]["long"] == desiredKey["long"]) {
						return d.petData[key];
					}
				}
			}
		};
		// console.log(d.data)
		// d.positions = d.p2;

	});

	// a.getPetInfo = function(desiredKey) {
	// console.log("Hey")
	// for (var key in d.petData) {
	// if (d.petData.hasOwnProperty(key)) {
	// if (d.petData[key].lat == desiredKey.lat && d.petData[key]["long"] == desiredKey["long"]) {
	// return d.petData[key];
	// }
	// }
	// }
	// };
	// console.log(d.data)

	// console.log(d.positions)

	a.showData = function() {
		alert(this.data.foo);
	}
	a.openNav = function() {
		console.log("open")
		document.getElementById("myNav").style.width = "100%";
	}

	a.closeNav = function() {
		console.log("close")
		document.getElementById("myNav").style.width = "0%";
	}
}]);
