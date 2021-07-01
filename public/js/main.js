
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

const form = document.querySelector('#searchForm');
form.addEventListener('submit', function (error) {
    error.preventDefault();
    // console.log('submitted!')
    console.dir(form);
})
