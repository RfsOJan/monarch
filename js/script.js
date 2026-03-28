//DOM JS

document.addEventListener('DOMContentLoaded', () => {

    //Objeto no HTML ícone de Sol ou Lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;
    // Var para menu Hamburguer
    const menuHamburger = document.getElementById('menuHamburger');
    // Estrutura do menu - conteúdo/lista
    const menuMobile = document.getElementById('menuMobile');
    // Verificação ou condição
    const icon = menuHamburger?.querySelector('i');
    const menuLinks = document.querySelectorAll('.menu-link');





    //Função mudar/alternar a cor do tema dark/light)

    function changeTheme() {
        //Tema atual
        const currentTheme = rootHtml.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';

        rootHtml.setAttribute('data-theme', isDark ? 'light' : 'dark');

        //troca do ícone
        toggleTheme.classList.toggle('bi-sun', !isDark);
        toggleTheme.classList.toggle('bi-moon', isDark);
    }

    if (toggleTheme) {
        toggleTheme.addEventListener('click', changeTheme);
    }


    // Alternar o Menu Mobile
    function toggleMenu() {

        //Lista nav
        const isOpen = menuMobile.classList.toggle('active')
        //Condição
        if (icon) {
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }


    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }

    //Ativar link clicado == menu
    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menuLinks.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    })
    

});