let app = angular.module("medgrupo", [])

/* Begin - mockups */
const expertises = {
    medica: "Clínica Médica",
    geral:  "Cirurgia Geral"
}

const classes = {
    salvador1: "2008 MEDCURSO SALVADOR - Turma A/2008 MED SALVADOR",
    saopaulo1: "2008 MEDCURSO SÃO PAULO TURMA A/2008 MED SÃO PAULO TURMA A"
}

const cities = {
    salvador: "Salvador (BA)",
    saopaulo: "São Paulo (SP)"
}

const simulados = [
    {
        position: 1,
        grade: 42,
        registration: 897413,
        expertise: expertises.medica,
        class: classes.salvador1,
        city: cities.salvador
    },
    {
        position: 2,
        grade: 40,
        registration: 745133,
        expertise: expertises.geral,
        class: classes.saopaulo1,
        city: cities.saopaulo
    },
    {
        position: 2,
        grade: 40,
        registration: 897413,
        expertise: expertises.medica,
        class: classes.salvador1,
        city: cities.salvador
    },
    {
        position: 3,
        grade: 39,
        registration: 745133,
        expertise: expertises.geral,
        class: classes.saopaulo1,
        city: cities.saopaulo
    },
    {
        position: 4,
        grade: 38,
        registration: 897413,
        expertise: expertises.medica,
        class: classes.salvador1,
        city: cities.salvador
    },
    {
        position: 4,
        grade: 38,
        registration: 745133,
        expertise: expertises.geral,
        class: classes.saopaulo1,
        city: cities.saopaulo
    }
]
/* End - Mockups */

app.controller("main",["$scope", function($scope){
    let self = this;

    $scope.simulados = simulados
    $scope.expertise = "none"
    $scope.city = "none"
    $scope.class = "none"

    function filterByRegistration(){
        let registration = 
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