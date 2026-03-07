//DOM JS

document.addEventListener('DOMContentLoaded', () => {
    
    //Onjeto no HTML ícone de Sol ou Lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = documentElement;

//Função mudar/alternar a cor do tema dark/light)

function changeTheme() {
    //Tema atual
    const currentTheme = rootHtml.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';

    rootHtml.setAttribute('data-theme' , isDark ? 'light' : 'dark' );

    //troca do ícone
    toggleTheme.classList.toggle('bi-sun' , !isDark);
    toggleTheme.classList.toggle('bi-moon' , 'isDark')
}

if (toggleTheme) {
    toggleTheme.addEventListener('click' , changeTheme);
}

});