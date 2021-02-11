function botaoVolta(){
    window.history.back();
}

function mostra1(){
    let x = document.getElementById('drop1');

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        (x.style.display) = "none"
    }
}

function mostra2(){
    let x = document.getElementById('drop2');

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        (x.style.display) = "none"
    }
}

function mostra3(){
    let x = document.getElementById('drop3');

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        (x.style.display) = "none"
    }
}

function mostra4(){
    let x = document.getElementById('drop4');

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        (x.style.display) = "none"
    }
}

function mostrax(){
    let xz = document.getElementById('dropx');
    let botao = document.getElementById('botaoinferior');
    
    if(xz.style.display == "none"){
        xz.style.display = "block";
        xz.style.position = "relative";  
    }
    else{
        xz.style.display = "none";
    }
}
