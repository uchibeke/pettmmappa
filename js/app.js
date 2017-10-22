var myApp = angular.module('myApp', ['ngRoute', 'guestControllers', 'ngMap']);

myApp.config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/love/', {
		templateUrl : 'views/home.html',
		controller : 'ListController'
	}).when('/about/', {
		templateUrl : 'views/about.html',
		controller : 'ListController'
	}).otherwise({
		redirectTo : '/love/'
	});
}]);
myApp.run(['$rootScope', '$location',
function($rootScope, $location) {

	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
		if (currRoute.originalPath == '/about/') {
			$rootScope.tog = 1;
		} else if (currRoute.originalPath == '/love/') {
			$rootScope.tog = 2;
		}
	});
}]);

var sample = [{
	'long' : -71.05062845822772,
	'lat' : 42.35374039049727,
	'url' : 'http://animalli.com/wp-content/uploads/2016/09/dogs-dog-rottweiler-new-wallpaper-1920x1080.jpg',
	'time' : 1327962,
	'phone' : '7813816235',
	'stat' : 'MISSING'
}, {
	'long' : -71.05814585015014,
	'lat' : 42.37670521641227,
	'url' : 'https://i.pinimg.com/736x/96/78/22/967822c0f1fb9171b424bcf1b765edb5--pom-puppies-cutest-dogs-puppies.jpg',
	'time' : 1325169,
	'phone' : '7811703821',
	'stat' : 'MISSING'
}, {
	'long' : -71.09612951232658,
	'lat' : 42.32664433180301,
	'url' : 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2017-09/bored2.jpg',
	'time' : 1325662,
	'phone' : '7813461262',
	'stat' : 'FOUND'
}, {
	'long' : -71.04263696595793,
	'lat' : 42.35444572341728,
	'url' : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Cute_dog_-_Silves_-_ancient_capital_of_Algarve_-_The_Algarve%2C_Portugal_%281388880640%29.jpg',
	'time' : 1325169,
	'phone' : '7812572991',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.06414027196922,
	'lat' : 42.32807918394673,
	'url' : 'http://2.bp.blogspot.com/-Tfsm19GRWew/VWtb6w47swI/AAAAAAABX84/E7uHzSliHwg/s1600/cute-dogs-075-26.jpg',
	'time' : 1325293,
	'phone' : '7811720727',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.0890754051706,
	'lat' : 42.30918620182143,
	'url' : 'http://www.thenewsminute.com/sites/default/files/styles/news_detail/public/dog-753269_1280.jpg?itok=dq3BKhqm',
	'time' : 1325572,
	'phone' : '7813907508',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.04970321011821,
	'lat' : 42.33931133484226,
	'url' : 'https://images.pexels.com/photos/85363/puppy-buddy-look-50mm-85363.jpeg?h=350&auto=compress&cs=tinysrgb',
	'time' : 1328093,
	'phone' : '7811547719',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.06601323957594,
	'lat' : 42.342200610913046,
	'url' : 'https://media-cdn.tripadvisor.com/media/photo-s/09/5b/64/ad/chiufen-jiufen-old-street.jpg',
	'time' : 1324841,
	'phone' : '7813562247',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.040160972597,
	'lat' : 42.324126876205085,
	'url' : 'http://images2.onionstatic.com/clickhole/1892/original/600.jpg',
	'time' : 1327317,
	'phone' : '7811521105',
	'stat' : 'FOUND'
}, {
	'long' : -71.08710835900845,
	'lat' : 42.34583683792005,
	'url' : 'http://bearshapedsphere.com/wp-content/uploads/2012/04/IMG_0101.jpg',
	'time' : 1327832,
	'phone' : '7813064463',
	'stat' : 'FOUND'
}, {
	'long' : -71.05131975758947,
	'lat' : 42.32126602470178,
	'url' : 'http://www.esdaw-eu.eu/uploads/1/0/2/4/10241201/9294877_orig.jpg',
	'time' : 1327440,
	'phone' : '7812750614',
	'stat' : 'SIGHTING'
}, {
	'long' : -71.05643101484102,
	'lat' : 42.32873065760196,
	'url' : 'http://s1.scoopwhoop.com/cd1/4.JPG',
	'time' : 1324742,
	'phone' : '7811822867',
	'stat' : 'FOUND'
}, {
	'long' : -71.06014799559662,
	'lat' : 42.311866364170285,
	'url' : 'https://cdn.pixabay.com/photo/2016/07/31/12/31/cat-1558863_960_720.jpg',
	'time' : 1327713,
	'phone' : '7813424962',
	'stat' : 'FOUND'
}, {
	'long' : -71.10874807810035,
	'lat' : 42.341222897505524,
	'url' : 'https://1.bp.blogspot.com/-Bmxj1_E_oGs/Vyzj3d3akqI/AAAAAAAABuU/yp7jRobAqXk9kTNLAltKeCpLueHlHqM8ACLcB/s1600/Dogs_1479300f.jpg',
	'time' : 1324389,
	'phone' : '7812554062',
	'stat' : 'FOUND'
}, {
	'long' : -71.09207157435841,
	'lat' : 42.3660708686927,
	'url' : 'https://pbs.twimg.com/media/BozqlBmIIAAoDI-.jpg',
	'time' : 1327936,
	'phone' : '7813781860',
	'stat' : 'MISSING'
}, {
	'long' : -71.06777183793234,
	'lat' : 42.33568850704485,
	'url' : 'http://i.dailymail.co.uk/i/pix/2014/02/24/article-0-1BC8EC0900000578-527_964x585.jpg',
	'time' : 1325468,
	'phone' : '7813786088',
	'stat' : 'FOUND'
}, {
	'long' : -71.05967124947647,
	'lat' : 42.367656817783676,
	'url' : 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1364/1364942-bigthumbnail.jpg',
	'time' : 1325320,
	'phone' : '7811327569',
	'stat' : 'FOUND'
}, {
	'long' : -71.044756016867,
	'lat' : 42.307564566172,
	'url' : 'https://c4.staticflickr.com/4/3654/3343824492_6695000ebf_z.jpg?zz=1',
	'time' : 1327177,
	'phone' : '7812322933',
	'stat' : 'MISSING'
}]

