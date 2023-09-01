const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const darkBackground = document.getElementById('darkBackground')

/*Al presionar el bóton menu, muestra barra lateral y oscurecer el fondo */
btnMenu.addEventListener('click', () => {
    menu.classList.add('show');
    darkBackground.style.display = 'block';
});

/*Al hacer click en el fondo oscuro, ocultar barra lateral y fondo oscuro */
darkBackground.addEventListener('click', () => {
    menu.classList.remove('show');
    darkBackground.style.display = 'none';
});