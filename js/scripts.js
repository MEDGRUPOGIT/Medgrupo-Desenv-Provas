function toggleFunction(){
    var element_arrow = document.getElementById("arrow");
    var element = document.getElementById("toggle");
    element.classList.toggle("class-toggle");
    element_arrow.classList.toggle("arrow-toggle");
}

function toggleMenuHeader(){
    var element = document.getElementById("toggleMenu");
    element.classList.toggle("toggleMenuHeader");
}

function fullPiechart() {
    var element = document.getElementById("fullPiechart");
    element.classList.toggle("fullPiechart");
}

function toggleMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("menu-toggle");
}