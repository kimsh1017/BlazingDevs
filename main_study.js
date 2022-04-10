'use strict';

const moreBtn = document.querySelector('.nav_bar .toggle_button');
const menu_list = document.querySelector('.menu_list');
const menu = document.querySelector('.nav_bar');

const study1 = document.querySelector('.study .desktop .study_1');
const study2 = document.querySelector('.study .desktop .study_2');
const study3 = document.querySelector('.study .desktop .study_3');
const study4 = document.querySelector('.study .desktop .study_4');

const locations = [ document.getElementById('card1').offsetTop, 
document.getElementById('card2').offsetTop,
document.getElementById('card3').offsetTop,
document.getElementById('card4').offsetTop ];

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    menu.classList.toggle('clamp');
    menu_list.classList.toggle('clamp');
});

study1.addEventListener('click', ()=>{
    window.scrollTo({top:locations[0] - 100, left:0 ,behavior:'smooth'})
});


study2.addEventListener('click', ()=>{
    window.scrollTo({top:locations[1] - 100, left:0 ,behavior:'smooth'});
});

study3.addEventListener('click', ()=>{
    window.scrollTo({top:locations[2] - 100, left:0 ,behavior:'smooth'});
});

study4.addEventListener('click', ()=>{
    window.scrollTo({top:locations[3] - 100, left:0 ,behavior:'smooth'});
});