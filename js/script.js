const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scroll > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navlist.classList.toggle('open');
};

menu.onscroll = () => {
    menu.classList.remove('bx-bx');
    navlist.classList.remove('close');
};