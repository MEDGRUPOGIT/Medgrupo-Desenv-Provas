const flip = document.getElementById('flip');

flip.addEventListener('click', () => {
    const baseAtivo = document.getElementById('base-das-atividades-ativo');
    const baseFlip = document.getElementById('base-das-atividades-ativo-flip');

    baseAtivo.classList.toggle('flip-out');
    baseFlip.classList.toggle('flip-in');
});