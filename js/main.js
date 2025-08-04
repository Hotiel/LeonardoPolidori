
// Selecciona todos los enlaces dentro del menú desplegable
function setupMenuCloseOnClick() {
document.querySelectorAll('.details--item').forEach(link => {
    link.addEventListener('click', () => {
        link.closest('details').removeAttribute('open');
    });
});
}
// vamos a jugar con la flecha
function setupScrollArrow() {
    const arrow = document.querySelector('.arrow-container');
    const mainContent = document.querySelector('.menu__container');

    if (arrow && mainContent) {
        arrow.addEventListener('click', () => {
            mainContent.scrollIntoView({ behavior: 'smooth' });
        });
        }  
    }

document.addEventListener('DOMContentLoaded', () => {
    setupMenuCloseOnClick();
    setupScrollArrow();
    });