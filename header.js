const menuBtn = document.querySelector(".burger-menu-btn");
const menu = document.querySelector(".burger_nav");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", function () {
   menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
   if (window.scrollY > 10) header.classList.add("shrink");
   else header.classList.remove("shrink");
});
