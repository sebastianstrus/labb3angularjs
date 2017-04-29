var app = angular.module('app', ['ui.router']);

app.controller('EinsteinController', function ($scope) {
    $scope.description = "Albert Einstein was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).vEinstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc2 (which has been dubbed 'the world's most famous equation'').He received the 1921 Nobel Prize in Physics 'for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect', a pivotal step in the evolution of quantum theory.";

})
app.controller('HawkingController', function ($scope) {
    $scope.description = "Stephen William Hawking is an English theoretical physicist, cosmologist, author and Director of Research at the Centre for Theoretical Cosmology within the University of Cambridge. His scientific works include a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity and the theoretical prediction that black holes emit radiation, often called Hawking radiation. Hawking was the first to set forth a theory of cosmology explained by a union of the general theory of relativity and quantum mechanics. He is a vigorous supporter of the many-worlds interpretation of quantum mechanics.";

})
app.controller('ThatcherController', function ($scope) {
    $scope.description = "Margaret Hilda Thatchervwas a British stateswoman who was the Prime Minister of the United Kingdom from 1979 to 1990 and the Leader of the Conservative Party from 1975 to 1990. She was the longest-serving British prime minister of the 20th century, and the first woman to have held the office. A Soviet journalist dubbed her The Iron Lady, a nickname that became associated with her uncompromising politics and leadership style. As Prime Minister, she implemented policies that have come to be known as Thatcherism.";

})
app.controller('ReaganController', function ($scope) {
    $scope.description = "Ronald Wilson Reagan was an American politician and actor who served as the 40th President of the United States from 1981 to 1989. Before his presidency, he was the 33rd Governor of California, from 1967 to 1975, after a career as a Hollywood actor and union leader.";

})

app.controller('AddController', function ($scope) {
    $scope.add = function (a, b) {
        return a + b;
    };
});

app.controller('CityController', function ($http, $scope) {
    $http.get('http://cities.jonkri.se/0.0.0/cities').then(function (data) {
        console.log(data.data.items);
        $scope.cities = data.data.items;
    });
    $scope.cities;
});

app.config(function ($stateProvider) {
    $stateProvider
        .state('einstein', { 
            controller: 'EinsteinController',
            templateUrl: 'einstein.html',
            url: '/einstein'})
        .state('hawking', { 
            controller: 'HawkingController',
            templateUrl: 'hawking.html',
            url: '/hawking'})
        .state('thatcher', { 
            controller: 'ThatcherController',
            templateUrl: 'thatcher.html',
            url: '/thatcher'})
        .state('reagan', { 
            controller: 'ReaganController',
            templateUrl: 'reagan.html',
            url: '/reagan'});
});

app.directive('bottomSignature', function() {
    return {
        template: 'Developed by Sebastian Strus.'
    }
})


