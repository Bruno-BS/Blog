/*Script de arrasta da pesquisa*/
document.addEventListener("DOMContentLoaded", function () {
    var searchToggle = document.getElementById("search-toggle");
    var searchContainer = document.getElementById("search-container");
    var navMenu = document.querySelector("nav ul");

    searchToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        searchContainer.classList.toggle("expanded");
        navMenu.classList.toggle("pushed");
    });
});

/*Script de fading e dropdown da produtos.html*/
const dropdown = document.querySelector('.dropdown');
const content = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
    content.classList.toggle('show');

    // Aplica o efeito de fade-in
    const products = document.querySelectorAll('.product');
    let delay = 0;
    products.forEach(product => {
        setTimeout(() => {
            product.style.opacity = '1';
        }, delay);
        delay += 100; // Ajuste o valor para controlar o tempo de fade-in
    });
});
