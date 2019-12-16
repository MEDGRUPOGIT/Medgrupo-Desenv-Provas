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

    function filterByRegistration(){
        let registration = $scope.registration
        $scope.simulados = simulados.filter( (s) => s.registration == registration)
    }

    $scope.filterByRegistration = filterByRegistration;
}])