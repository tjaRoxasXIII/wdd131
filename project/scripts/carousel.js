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