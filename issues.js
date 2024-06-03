function toggleMenu() {
    const drawerNav = document.getElementById('drawerNav');
    drawerNav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-item');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}
