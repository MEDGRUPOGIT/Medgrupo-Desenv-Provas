let button = document.getElementById("butt");
let bdown1 = document.querySelector(".bt1");
let bdown2 = document.querySelector(".bt2");
let bdown3 = document.querySelector(".bt3");
let bdown4 = document.querySelector(".bt4");
let bdown5 = document.querySelector(".bt5");
let bdown6 = document.querySelector(".bt6");

let front1 = document.getElementById("front1");
let front2 = document.getElementById("front2");
let front3 = document.getElementById("front3");

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");

front1.addEventListener("click", function () {
    front1.style.backgroundColor = "#005c49";
    front2.style.backgroundColor = "#070e0e";
    front3.style.backgroundColor = "#070e0e";
});

front2.addEventListener("click", function () {
    front2.style.backgroundColor = "#005c49"; 
    front1.style.backgroundColor = "#070e0e";
    front3.style.backgroundColor = "#070e0e";
});

front3.addEventListener("click", function () {
    front3.style.backgroundColor = "#005c49"; 
    front1.style.backgroundColor = "#070e0e";
    front2.style.backgroundColor = "#070e0e";
});

/* back1.addEventListener("click", function () {
    back1.style.backgroundColor = "#005c49";
    back2.style.backgroundColor = "#070e0e";
    back3.style.backgroundColor = "#070e0e";
});

back2.addEventListener("click", function () {
    back2.style.backgroundColor = "#005c49"; 
    back1.style.backgroundColor = "#070e0e";
    back3.style.backgroundColor = "#070e0e";
});

back3.addEventListener("click", function () {
    back3.style.backgroundColor = "#005c49"; 
    back1.style.backgroundColor = "#070e0e";
    back2.style.backgroundColor = "#070e0e";
}); */

/*back1.addEventListener("click", (event) =>{
    if (back1.style.backgroundColor == "#070e0e") {
        back2.style.backgroundColor = "#005c49";
        back3.style.backgroundColor = "#070e0e";
    }  else {
        back1.style.backgroundColor = "#070e0e";
        back2.style.backgroundColor = "#005c49";
    }
}) */

bdown1.addEventListener("click", function () {
    bdown1.style.background = "#00ae93";
    bdown1.style.color = "#070e0e";
});

bdown2.addEventListener("click", function () {
    bdown2.style.background = "#00ae93";
    bdown2.style.color = "#070e0e";
});

bdown3.addEventListener("click", function () {
    bdown3.style.background = "#00ae93";
    bdown3.style.color = "#070e0e";
});

bdown4.addEventListener("click", function () {
    bdown4.style.background = "#00ae93";
    bdown4.style.color = "#070e0e";
});

bdown5.addEventListener("click", function () {
    bdown5.style.background = "#00ae93";
    bdown5.style.color = "#070e0e";
});

bdown6.addEventListener("click", function () {
    bdown6.style.background = "#00ae93";
    bdown6.style.color = "#070e0e";
});