'use strict';

const moreBtn = document.querySelector('.nav_bar .toggle_button');
const menu_list = document.querySelector('.menu_list');
const menu = document.querySelector('.nav_bar');

const study = document.querySelectorAll('.study .desktop li');
const locations = document.querySelectorAll('.study .cards .card');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    menu.classList.toggle('clamp');
    menu_list.classList.toggle('clamp');
});


study[0].addEventListener('click', ()=>{
    window.scrollTo({top:locations[0].offsetTop - 100, left:0 ,behavior:'smooth'});
});

study[1].addEventListener('click', ()=>{
    window.scrollTo({top:locations[1].offsetTop - 100, left:0 ,behavior:'smooth'});
});

study[2].addEventListener('click', ()=>{
    window.scrollTo({top:locations[2].offsetTop - 100, left:0 ,behavior:'smooth'});
});

study[3].addEventListener('click', ()=>{
    window.scrollTo({top:locations[3].offsetTop - 100, left:0 ,behavior:'smooth'});
});