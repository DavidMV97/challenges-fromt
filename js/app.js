document.addEventListener( 'DOMContentLoaded' , () => {
    let buttonMenu = document.querySelector('.menu-hamburguer');
    let menu = document.querySelector('.container-header');

    buttonMenu.addEventListener('click' , (e) => {
        e.preventDefault();
        buttonMenu.classList.toggle('open'); 
        menu.classList.toggle('show-menu');
    })
} )
