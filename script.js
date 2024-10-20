// Automatic image slider
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].classList.add('active'); // Show the next image
}

// Set interval for image change (e.g., every 3 seconds)
setInterval(showNextImage, 3000);
