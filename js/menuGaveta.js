function menuGaveta(){
    const menu = document.querySelector('.treinamento__sup');

    function abrirMenu(){
        menu.parentNode.classList.toggle('ativar');
    }

    menu.addEventListener('click', abrirMenu);
}
menuGaveta();