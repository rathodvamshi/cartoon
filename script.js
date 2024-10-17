let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

// Function to show the current image
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to start
    showImage(currentIndex);
}

// Start the slider
showImage(currentIndex);
setInterval(nextImage, 3000); // Change image every 3 seconds

