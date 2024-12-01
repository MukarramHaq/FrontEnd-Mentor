const sidebarEl = document.getElementById('sidebar');
const closeBtnEl = document.getElementById('close-btn');
const menuBtnEl = document.getElementById('menu-btn')
const minusBtnEl = document.getElementById('minus-btn');
const plusBtnEl = document.getElementById('plus-btn');
const quantityEl = document.getElementById('quantity');
const cartBtnEl = document.getElementById('cart-btn');
const cartContainerEl = document.getElementById('cart-container');
let productQuantity = 0;
let currentIndex = 0;

/********** For the sidebar **********/
closeBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'none'
})

menuBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'flex'
    sidebarEl.style.boxShadow = '0 0 0 10000px rgba(0, 0, 0, 0.5)';
})

/********** For the slider **********/

function showSlide(index) {
  const slides = document.getElementById('slides'); //Gets the slider container
  const totalSlides = slides.children.length; // Gets the total number of slides

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


/********** Plus and minus buttons **********/

plusBtnEl.addEventListener('click',() => {
    productQuantity += 1;
    quantityEl.textContent = productQuantity;
    minusBtnEl.disabled = false;
})

minusBtnEl.addEventListener('click',() => {
    if(productQuantity === 0) {
        minusBtnEl.disabled = true;
    }else{
        minusBtnEl.disabled = false;
        productQuantity -= 1;
        quantityEl.textContent = productQuantity;
    }
    
})

/********** Cart Functionality **********/
cartBtnEl.addEventListener('click', () => {
    if(cartContainerEl.style.display === 'none'){
        cartContainerEl.style.display = 'block'
    }else{
        cartContainerEl.style.display = 'none'
    }
})