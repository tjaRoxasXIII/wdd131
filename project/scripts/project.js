// Carousel Functionality

const images = document.querySelectorAll('#gallery .carousel img');
let current = 0;

function showImage(index) {
images.forEach(img => img.classList.remove('active'));
images[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
current = (current + 1) % images.length;
showImage(current);
});

document.getElementById('prev').addEventListener('click', () => {
current = (current - 1 + images.length) % images.length;
showImage(current);
});


// Navigation Menu Toggle
const menuButton = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('show');
  menuButton.textContent = isOpen ? '✖' : '☰';
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector(".navbar").addEventListener("click", e => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const text = e.target.textContent.trim();
      filterTemples(text);
    }
});