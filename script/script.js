var burger = document.querySelector(".button_burger");
var nav = document.querySelector(".nav");

// open menu
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("visible");
})

/*// close menu
burger.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("visible");
})*/

// buttons animation 

function swap(cssFile) {
    var link = document.getElementById("style")
    link.href = cssFile;
}