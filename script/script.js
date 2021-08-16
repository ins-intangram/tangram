var burger = document.querySelector(".button_burger");
var nav = document.querySelector(".nav");

// open menu
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("visible");
})

// close menu
menu.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("visible");
})