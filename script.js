let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}