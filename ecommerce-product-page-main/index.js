const slides = document.querySelectorAll('.slider');
// console.log(slides)
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})