app.controller('myCtrl', function ($scope, $http) {
    $http.get('./app/data.json').then(function(response) {
        $scope.tabela = response.data;
    });
});

