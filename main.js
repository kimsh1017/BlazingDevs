'use strict';

const moreBtn = document.querySelector('.nav_bar .toggle_button');
const menu_list = document.querySelector('.nav_bar .menu_list');
const menu = document.querySelector('.nav_bar');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    menu.classList.toggle('clamp');
    menu_list.classList.toggle('clamp');
});
