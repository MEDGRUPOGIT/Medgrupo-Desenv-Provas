// PROGRESSAO CARD1
// NEF1

let progressBar1F = document.querySelector("#circular-progress1F")
let valueContainer1F = document.querySelector(".value-container1F")

let progressValue1F = 0;
let progressEndValue1F = 5;
let progressTotalValue1F = "";
let speed1F = 100;

let progress1F = setInterval( () => {
    progressValue1F++;
    valueContainer1F.textContent = `${progressValue1F}`;
    progressBar1F.style.background = `conic-gradient(
        #00EBCA ${progressValue1F * 18}deg,
        #202D2E ${progressValue1F * 20}deg
        )`;
    console.log(progressValue1F);
    if(progressValue1F == progressEndValue1F) {
        clearInterval(progress1F);
    }
}, speed1F);

// PED1

let progressBar2F = document.querySelector("#circular-progress2F")
let valueContainer2F = document.querySelector(".value-container2F")

let progressValue2F = 0;
let progressEndValue2F = 1;
let progressTotalValue2F = "";
let speed2F = 450;

let progress2F = setInterval( () => {
    progressValue2F++;
    valueContainer2F.textContent = `${progressValue2F}`;
    progressBar2F.style.background = `conic-gradient(
        #00EBCA ${progressValue2F * 125}deg,
        #202D2E ${progressValue2F * 130}deg
        )`;
    console.log(progressValue2F);
    if(progressValue2F == progressEndValue2F) {
        clearInterval(progress2F);
    }
}, speed2F);

// NEF1 BACK

let progressBar1B = document.querySelector("#circular-progress1B")
let valueContainer1B = document.querySelector(".value-container1B")

let progressValue1B = 0;
let progressEndValue1B = 1;
let progressTotalValue1B = "";
let speed1B = 100;

let progress1B = setInterval( () => {
    progressValue1B++;
    valueContainer1B.textContent = `${progressValue1B}`;
    progressBar1B.style.background = `conic-gradient(
        #00EBCA ${progressValue1B * -600}deg,
        #202D2E ${progressValue1B * 0}deg
        )`;
    console.log(progressValue1B);
    if(progressValue1B == progressEndValue1B) {
        clearInterval(progress1B);
    }
}, speed1B);

// CIR1 BACK

let progressBar2B = document.querySelector("#circular-progress2B")
let valueContainer2B = document.querySelector(".value-container2B")

let progressValue2B = 0;
let progressEndValue2B = 1;
let progressTotalValue2B = "";
let speed2B = 200;

let progress2B = setInterval( () => {
    progressValue2B++;
    valueContainer2B.textContent = `${progressValue2B}`;
    progressBar2B.style.background = `conic-gradient(
        #00EBCA ${progressValue2B * -600}deg,
        #202D2E ${progressValue2B * 0}deg
        )`;
    console.log(progressValue2B);
    if(progressValue2B == progressEndValue2B) {
        clearInterval(progress2B);
    }
}, speed2B);

// PROGRESSAO CARD2
// REU1

let progressBar3F = document.querySelector("#circular-progress3F")
let valueContainer3F = document.querySelector(".value-container3F")

let progressValue3F = 0;
let progressEndValue3F = 2;
let progressTotalValue3F = "";
let speed3F = 200;

let progress3F = setInterval( () => {
    progressValue3F++;
    valueContainer3F.textContent = `${progressValue3F}`;
    progressBar3F.style.background = `conic-gradient(
        #00EBCA ${progressValue3F * 45}deg,
        #202D2E ${progressValue3F * 50}deg
        )`;
    console.log(progressValue3F);
    if(progressValue3F == progressEndValue3F) {
        clearInterval(progress3F);
    }
}, speed3F);

// OBS1

let progressBar4F = document.querySelector("#circular-progress4F")
let valueContainer4F = document.querySelector(".value-container4F")

let progressValue4F = 0;
let progressEndValue4F = 2;
let progressTotalValue4F = "";
let speed4F = 200;

let progress4F = setInterval( () => {
    progressValue4F++;
    valueContainer4F.textContent = `${progressValue4F}`;
    progressBar4F.style.background = `conic-gradient(
        #00EBCA ${progressValue4F * -600}deg,
        #202D2E ${progressValue4F * 0}deg
        )`;
    console.log(progressValue4F);
    if(progressValue4F == progressEndValue4F) {
        clearInterval(progress4F);
    }
}, speed4F);

// NEF2 BACK

let progressBar3B = document.querySelector("#circular-progress3B")
let valueContainer3B = document.querySelector(".value-container3B")

let progressValue3B = 0;
let progressEndValue3B = 1;
let progressTotalValue3B = "";
let speed3B = 200;

let progress3B = setInterval( () => {
    progressValue3B++;
    valueContainer3B.textContent = `${progressValue3B}`;
    progressBar3B.style.background = `conic-gradient(
        #00EBCA ${progressValue3B * -600}deg,
        #202D2E ${progressValue3B * 3.6}deg
        )`;
    console.log(progressValue3B);
    if(progressValue3B == progressEndValue3B) {
        clearInterval(progress3B);
    }
}, speed3B);

//CIR2 BACK

let progressBar4B = document.querySelector("#circular-progress4B")
let valueContainer4B = document.querySelector(".value-container4B")

let progressValue4B = 0;
let progressEndValue4B = 1;
let progressTotalValue4B = "";
let speed4B = 200;

let progress4B = setInterval( () => {
    progressValue4B++;
    valueContainer4B.textContent = `${progressValue4B}`;
    progressBar4B.style.background = `conic-gradient(
        #00EBCA ${progressValue4B * -600}deg,
        #202D2E ${progressValue4B * 0}deg
        )`;
    console.log(progressValue4B);
    if(progressValue4B == progressEndValue4B) {
        clearInterval(progress4B);
    }
}, speed4B);

// PROGRESSAO CARD3
// NEF3 FRONT

let progressBar5F = document.querySelector("#circular-progress5F")
let valueContainer5F = document.querySelector(".value-container5F")

let progressValue5F = 0;
let progressEndValue5F = 3;
let progressTotalValue5F = "";
let speed5F = 150;

let progress5F = setInterval( () => {
    progressValue5F++;
    valueContainer5F.textContent = `${progressValue5F}`;
    progressBar5F.style.background = `conic-gradient(
        #00EBCA ${progressValue5F * 15}deg,
        #202D2E ${progressValue5F * 18}deg
        )`;
    console.log(progressValue5F);
    if(progressValue5F == progressEndValue5F) {
        clearInterval(progress5F);
    }
}, speed5F);

// PED2

let progressBar6F = document.querySelector("#circular-progress6F")
let valueContainer6F = document.querySelector(".value-container6F")

let progressValue6F = 0;
let progressEndValue6F = 2;
let progressTotalValue6F = "";
let speed6F = 200;

let progress6F = setInterval( () => {
    progressValue6F++;
    valueContainer6F.textContent = `${progressValue6F}`;
    progressBar6F.style.background = `conic-gradient(
        #00EBCA ${progressValue6F * 119}deg,
        #202D2E ${progressValue6F * 125}deg
        )`;
    console.log(progressValue6F);
    if(progressValue6F == progressEndValue6F) {
        clearInterval(progress6F);
    }
}, speed6F);

// NEF3 BACK

let progressBar5B = document.querySelector("#circular-progress5B")
let valueContainer5B = document.querySelector(".value-container5B")

let progressValue5B = 0;
let progressEndValue5B = 1;
let progressTotalValue5B = "";
let speed5B = 200;

let progress5B = setInterval( () => {
    progressValue5B++;
    valueContainer5B.textContent = `${progressValue5B}`;
    progressBar5B.style.background = `conic-gradient(
        #00EBCA ${progressValue5B * -600}deg,
        #202D2E ${progressValue5B * 3.6}deg
        )`;
    console.log(progressValue5B);
    if(progressValue5B == progressEndValue5B) {
        clearInterval(progress5B);
    }
}, speed5B);

// CIR3 BACK

let progressBar6B = document.querySelector("#circular-progress6B")
let valueContainer6B = document.querySelector(".value-container6B")

let progressValue6B = 0;
let progressEndValue6B = 1;
let progressTotalValue6B = "";
let speed6B = 200;

let progress6B = setInterval( () => {
    progressValue6B++;
    valueContainer6B.textContent = `${progressValue6B}`;
    progressBar5B.style.background = `conic-gradient(
        #00EBCA ${progressValue6B * -600}deg,
        #202D2E ${progressValue6B * 3.6}deg
        )`;
    console.log(progressValue6B);
    if(progressValue6B == progressEndValue6B) {
        clearInterval(progress6B);
    }
}, speed6B);



// ESTADO ATIVO DO COMPONENTE

const selecionado1 = document.querySelector("#front")
const selecionado2 = document.querySelector("#back")
const selecionado3 = document.querySelector("#front2")
const selecionado4 = document.querySelector("#back2")
const selecionado5 = document.querySelector("#front3")
const selecionado6 = document.querySelector("#back3")

// ATIVAR FRONT CARD 1 / REMOVER OUTROS

    selecionado1.addEventListener("click",(e) => {
        selecionado1.classList.toggle("ativar-face")
        selecionado2.classList.toggle("ativar-face")
        selecionado3.classList.remove("ativar-face")
        selecionado4.classList.remove("ativar-face")
        selecionado5.classList.remove("ativar-face")
        selecionado6.classList.remove("ativar-face")
    
})

// ATIVAR BACK CARD 1 / REMOVER OUTROS

    selecionado2.addEventListener("click",(e) => {
        selecionado2.classList.toggle("ativar-face")
        selecionado1.classList.toggle("ativar-face")
        selecionado3.classList.remove("ativar-face")
        selecionado4.classList.remove("ativar-face")
        selecionado5.classList.remove("ativar-face")
        selecionado6.classList.remove("ativar-face")
})

// ATIVAR FRONT CARD 2 / REMOVER OUTROS

    selecionado3.addEventListener("click",(e) => {
        selecionado3.classList.toggle("ativar-face")
        selecionado4.classList.toggle("ativar-face")
        selecionado1.classList.remove("ativar-face")
        selecionado2.classList.remove("ativar-face")
        selecionado5.classList.remove("ativar-face")
        selecionado6.classList.remove("ativar-face")
})

// ATIVAR BACK CARD 2 / REMOVER OUTROS

    selecionado4.addEventListener("click",(e) => {
        selecionado4.classList.toggle("ativar-face")
        selecionado3.classList.toggle("ativar-face")
        selecionado1.classList.remove("ativar-face")
        selecionado2.classList.remove("ativar-face")
        selecionado5.classList.remove("ativar-face")
        selecionado6.classList.remove("ativar-face")
})

// ATIVAR FRONT CARD 3 / REMOVER OUTROS

    selecionado5.addEventListener("click",(e) => {
        selecionado5.classList.toggle("ativar-face")
        selecionado6.classList.toggle("ativar-face")
        selecionado1.classList.remove("ativar-face")
        selecionado2.classList.remove("ativar-face")
        selecionado3.classList.remove("ativar-face")
        selecionado4.classList.remove("ativar-face")
})

// ATIVAR BACK CARD 3 / REMOVER OUTROS

    selecionado6.addEventListener("click",(e) => {
        selecionado6.classList.toggle("ativar-face")
        selecionado5.classList.toggle("ativar-face")
        selecionado1.classList.remove("ativar-face")
        selecionado2.classList.remove("ativar-face")
        selecionado3.classList.remove("ativar-face")
        selecionado4.classList.remove("ativar-face")
})

// BUTTON SETA CARD1
// BUTTON NEF1B

const button1 = document.querySelector(".button1")
const NEF1B = document.querySelector("#NEF1B")
const result1 = document.querySelector(".value-container1B")

    button1.addEventListener("click",(e) => {
        button1.classList.toggle("ativar")
        CIR1B.classList.toggle("ativar2");
        result2.classList.toggle("ativar2");
})

// BUTTON CIR1B

const button2 = document.querySelector(".button2")
const CIR1B = document.querySelector("#CIR1B")
const result2 = document.querySelector(".value-container2B")

    button2.addEventListener("click",(e) => {
        button2.classList.toggle("ativar");
        NEF1B.classList.toggle("ativar2")
        result1.classList.toggle("ativar2")
})

// BUTTON SETA CARD2
// BUTTON NEF2B

const button3 = document.querySelector(".button3")
const NEF2B = document.querySelector("#NEF2B")
const result3 = document.querySelector(".value-container3B")

    button3.addEventListener("click",(e) => {
        button3.classList.toggle("ativar")
        CIR2B.classList.toggle("ativar2")
        result4.classList.toggle("ativar2")
})

// BUTTON CIR2B

const button4 = document.querySelector(".button4")
const CIR2B = document.querySelector("#CIR2B")
const result4 = document.querySelector(".value-container4B")

    button4.addEventListener("click",(e) => {
        button4.classList.toggle("ativar")
        NEF2B.classList.toggle("ativar2")
        result3.classList.toggle("ativar2")
})

// BUTTON SETA CARD3
// BUTTON NEF3B

const button5 = document.querySelector(".button5")
const NEF3B = document.querySelector("#NEF3B")
const result5 = document.querySelector(".value-container5B")

    button5.addEventListener("click",(e) => {
        button5.classList.toggle("ativar")
        CIR3B.classList.toggle("ativar2")
        result6.classList.toggle("ativar2")
})

// BUTTON CIR3B

const button6 = document.querySelector(".button6")
const CIR3B = document.querySelector("#CIR3B")
const result6 = document.querySelector(".value-container6B")

    button6.addEventListener("click",(e) => {
        button6.classList.toggle("ativar")
        NEF3B.classList.toggle("ativar2")
        result5.classList.toggle("ativar2")
})

//FLIP CARD1

const card = document.querySelector("#card")
const mais = document.querySelector("#mais")
const menos = document.querySelector("#menos")

mais.addEventListener("click",(e) => {
    card.classList.toggle("flip")
    menos.classList.add("aparecer")
})

menos.addEventListener("click",(e) => {
    card.classList.toggle("flip")
    menos.classList.remove("aparecer")

})

// FLIP CARD2

const card2 = document.querySelector("#card2");
const mais2 = document.querySelector("#mais2");
const menos2 = document.querySelector("#menos2");

mais2.addEventListener("click",(e) => {
    card2.classList.toggle("flip2");
    menos2.classList.add("aparecer")
})

menos2.addEventListener("click",(e) => {
    card2.classList.toggle("flip2");
    menos2.classList.remove("aparecer")
})

// FLIP CARD3

const card3 = document.querySelector("#card3");
const mais3 = document.querySelector("#mais3");
const menos3 = document.querySelector("#menos3");

mais3.addEventListener("click",(e) => {
    card3.classList.toggle("flip3");
    menos3.classList.add("aparecer") 
})

menos3.addEventListener("click",(e) => {
    card3.classList.toggle("flip3");
    menos3.classList.remove("aparecer")

})

