'use strict';

const moreBtn = document.querySelector('.nav_bar .toggle_button');
const mobile_menu = document.querySelector('.mobile_menu_list');
const menu = document.querySelector('.nav_bar');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    menu.classList.toggle('clamp');
    mobile_menu.classList.toggle('clamp');
});
