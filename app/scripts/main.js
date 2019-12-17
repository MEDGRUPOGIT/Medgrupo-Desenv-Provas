let app = angular.module("medgrupo", [])

//variables expertises, classes, cities and simulados are
//defined in mockups.js

app.controller("main",["$scope", function($scope){
    let self = this;

    $scope.simulados = simulados
    $scope.expertise = "none"
    $scope.city = "none"
    $scope.class = "none"

    function filterByRegistration(){
        $scope.simulados = simulados.filter( (s) => {
            return s.registration == $scope.registration
        })
    }

    function filterByFilters(){
        $scope.simulados = simulados.filter((simulado) => {
            let allowed = true

            if($scope.expertise != "none")
                allowed = allowed && simulado.expertise == expertises[$scope.expertise]
            
            if($scope.city != "none")
                allowed = allowed && simulado.city == cities[$scope.city]
            
            if($scope.class != "none")
                allowed = allowed && simulado.class == classes[$scope.class]

            return allowed;
        })
    }

    $scope.filterByFilters = filterByFilters
    $scope.filterByRegistration = filterByRegistration;
}])