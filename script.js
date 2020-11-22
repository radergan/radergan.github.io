function toggleNav(){
    var burger = document.querySelector('.navbar-burger');
    var nav = document.querySelector('#navMenu');
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
}