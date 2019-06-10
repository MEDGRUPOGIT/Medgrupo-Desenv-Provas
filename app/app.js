var app = angular
    .module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'myCtrl',
            controllerAs: 'vm'
        });
    })
    .filter('unique', function () {
        return function (collection, keyname) {
            var output = [], keys = [];
            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            return output;
        };
    });
