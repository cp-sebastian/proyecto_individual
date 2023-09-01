const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
const menu = document.getElementById('menu');
const darkBackground = document.getElementById('darkBackground');
const allArrow = document.querySelectorAll('.flecha')
const submenus = document.querySelectorAll('.submenu');
/*Al presionar el bóton menu, muestra barra lateral y oscurecer el fondo */
btnMenu.addEventListener('click', () => {
    menu.classList.add('show');
    darkBackground.style.display = 'block';
    btnClose.style.display = 'block';
});

/*Al hacer click en el fondo oscuro, oculta barra lateral, fondo oscuro y resetear los submenus*/
darkBackground.addEventListener('click', () => {
    menu.classList.remove('show');
    darkBackground.style.display = 'none';

    // Cerrar todas las pestañas de flechas y establecer el toggle en falso
    allArrow.forEach(arrow => arrow.classList.remove('up'));

    // Ocultar todos los submenus
    submenus.forEach(submenu => submenu.style.display = 'none');
});

/*Al hacer click en el boton 'X', oculta barra lateral, fondo oscuro y resetear los submenus */
btnClose.addEventListener('click', () => {
    menu.classList.remove('show');
    darkBackground.style.display = 'none';
    
    // Cerrar todas las pestañas de flechas y establecer el toggle en falso
    allArrow.forEach(arrow => arrow.classList.remove('up'));

    // Ocultar todos los submenus
    submenus.forEach(submenu => submenu.style.display = 'none');
})

/*Al iniciar la página que ocurra estos eventos, al hacer click en una de las
opciones del menú, se despliegue las opciones, caso contrario, se oculten */
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (menuItem) {
        const arrow = menuItem.querySelector('.flecha');
        const submenu = menuItem.querySelector('.submenu');
        menuItem.addEventListener('click', function () {
            arrow.classList.toggle('up');
            submenu.style.display = (arrow.classList.contains('up')) ? 'block' : 'none';
        });
    });
});