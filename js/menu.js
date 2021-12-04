let menu_icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".nav-links-container");
let tablet = window.matchMedia("(min-width = 768px)");

menu_icon.addEventListener("click", function() {
    console.log(menu.style.display);
    if (menu.style.display === '') {
        menu.style.display = 'block';
    }

    else{
        menu.style.display = '';
    }
});

