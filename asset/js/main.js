new WOW().init();



const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


let button2 = document.getElementById('dark');
let body = document.querySelector('body');
let img2 = document.getElementsByClassName('shokran2');





button2.onclick = function () {

    if (body.classList.toggle('dark-mood')) {
        body.classList.add('dark-mood')
        this.innerText = 'Light Mood'




    } else {
        body.classList.remove('dark-mood')
        this.innerText = 'Dark Mood'




    }


}




var scroll = new SmoothScroll('a[href*="#"]');