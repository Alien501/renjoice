const navBtn = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-cont');
const closeBtn = document.getElementById('nav-close-btn');

navBtn.addEventListener('click',
() => {
    navMenu.classList.toggle('active');
}
)

closeBtn.addEventListener('click',
() => {
    navMenu.classList.toggle('active');
}
)