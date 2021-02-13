const hamburger = document.querySelector('.hamburger');
const closeDiv = document.querySelector('.closeDiv-btn');
const mainMenu = document.querySelector('.main-menu');
const up = document.querySelector('#up');



hamburger.addEventListener('click', () => {
    mainMenu.classList.add('slide');
   
})

closeDiv.addEventListener('click', () => {
    mainMenu.classList.remove('slide');
})

up.addEventListener('click', () => {
    window.scrollTo(0, 0);
})