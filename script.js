
function initModal(btnOpenSelector, btnCloseSelector, modalId) {
    const btnOpen = document.querySelector(btnOpenSelector);
    const btnClose = document.querySelector(btnCloseSelector);
    const modalOverlay = document.getElementById(modalId);

    
    if (!btnOpen || !modalOverlay) return;

    
    btnOpen.addEventListener('click', () => {
        modalOverlay.classList.add('is-open');
    });

    
    btnClose.addEventListener('click', () => {
        modalOverlay.classList.remove('is-open');
    });

    
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('is-open');
        }
    });

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
            modalOverlay.classList.remove('is-open');
        }
    });
}


initModal('.btn-switch', '.btn-close__tema', 'modal-tema');


initModal('.btn-products', '.btn-close__products', 'modal-products');



const btnToggle = document.querySelector('.task-panel__toggle');
const taskPanel = document.querySelector('.task-panel');

btnToggle.addEventListener('click', () => {
    
    taskPanel.classList.toggle('is-hidden');
});