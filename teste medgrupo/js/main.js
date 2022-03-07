const card1 = [
    {
        texto: "NEF",
        number: '5',
        value: 25,
    },
    {
        texto: "PED",
        number: '1',
        value: 35,
    },
]

let item_1 = card1.map(function (element) {

    return `<div class="progress" style="background: conic-gradient(#00f5d2 ${element.value}%, #202d2e ${element.value}%)">
                <span class="progress-value ">
                <p class="progress-number ">${element.texto}</p>   
                    <p class="progress-number ">${element.number}</p>    
                </span>
            </div>
            `
});
document.querySelector(".card-script1").innerHTML = item_1.join('\n');
const card2 = [
    {
        letra: "NEF",
        num: '1',
        valor: 0,
    },
    {
        letra: "CIR",
        num: '1',
        valor: 0,
    },

]
let item_2 = card2.map(function (elemento) {

    return `<button class="button5"><i class="fa-solid fa-arrow-down icon "></i></button>
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});
document.querySelector(".card-script2").innerHTML = item_2.join('\n');








const card3 = [
    {
        letra: "REU",
        num: '2',
        valor: 25,
    },
    {
        letra: "OBS",
        num: '2',
        valor: 0,
    },

]
let item_3 = card3.map(function (elemento) {

    return `
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value ">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});

document.querySelector(".card-script3").innerHTML = item_3.join('\n');



const card4 = [
    {
        letra: "NEF",
        num: '2',
        valor: 0,
    },
    {
        letra: "CIR",
        num: '2',
        valor: 0,
    },

]
let item_4 = card4.map(function (elemento) {

    return `<button class="button5"><i class="fa-solid fa-arrow-down icon "></i></button>
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});
document.querySelector(".card-script4").innerHTML = item_4.join('\n');

document.addEventListener("DOMContentLoaded", function () {
    const activeicon1 = document.querySelectorAll('.card');
    if (activeicon1) {
        activeicon1.forEach((el, key) => {
            el.addEventListener('click', function (evt) {
                if (evt.target.className === 'fa-solid fa-plus') {
                    return;
                }if (evt.target.className === 'fa-solid fa-minus') {
                    return;
                } else {
                    el.classList.toggle('active');
                    activeicon1.forEach((active, index) => {
                        if (key !== index) {
                            active.classList.remove('active')
                        }
                        
                    })
                }

            })
        })
    }
    const activeicon2 = document.querySelectorAll('.icon');
    if (activeicon2) {
        activeicon2.forEach((el, key) => {
            el.addEventListener('click', function (event) {
                if (event.target.className === 'fa-solid fa-arrow-down') {
                    return;
                } else {
                    el.classList.toggle('active');
                    activeicon2.forEach((index) => {
                        if (key !== index){
                            active.classList.remove('active')
                        }
                    })
                }

            })
        })
    }


document.getElementById('button1').style.visibility = 'visible';
document.getElementById('button2').style.visibility = 'visible';

document.getElementById('button1').onclick = function () {
    document.getElementById('flip-card').classList.toggle('do-flip');
    document.querySelector('.card2')
};
document.getElementById('button2').onclick = function () {
    document.getElementById('flip-card').classList.toggle('do-flip');
};

document.getElementById('button3').style.visibility = 'visible';
document.getElementById('button4').style.visibility = 'visible';

document.getElementById('button3').onclick = function () {
    document.getElementById('flip-card2').classList.toggle('do-flip');
    document.querySelector('.card4')
};
document.getElementById('button4').onclick = function () {
    document.getElementById('flip-card2').classList.toggle('do-flip');
    document.querySelector('.card4')
};

});
