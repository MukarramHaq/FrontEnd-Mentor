let currentIndex = 0;

function showSlide(index) {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;

  // Wrap around if index goes out of bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update transform property to slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Initialize slider
showSlide(currentIndex);
