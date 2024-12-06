const sidebarEl = document.getElementById("sidebar");
const closeBtnEl = document.getElementById("close-btn");
const menuBtnEl = document.getElementById("menu-btn");
const minusBtnEl = document.getElementById("minus-btn");
const plusBtnEl = document.getElementById("plus-btn");
const quantityEl = document.getElementById("quantity");
const cartBtnEl = document.getElementById("cart-btn");
const cartBtnQuantityEl = document.getElementById("cart-btn-quantity");
const theQuantityEl = document.getElementById("the-quantity");
const cartContainerEl = document.getElementById("cart-container");
const cartContainerEmptyEl = document.getElementById("cart-container-empty");
const cartContainerFullEl = document.getElementById("cart-container-full");
const addToCartEl = document.getElementById('add-to-cart');
const itemsInCartEl = document.getElementById('items-in-cart');
const totalBillEl = document.getElementById('total');
const deleteItemEl = document.getElementById('delete-item');
const secondDisplayEl = document.querySelectorAll('.second-display');
const mainDisplayContainerEl = document.getElementById('main-display-container');
console.log(mainDisplayContainerEl);
let productQuantity = 0;
let currentIndex = 0;

/********** For the sidebar **********/
closeBtnEl.addEventListener("click", () => {
  sidebarEl.style.display = "none";
});

menuBtnEl.addEventListener("click", () => {
  sidebarEl.style.display = "flex";
  sidebarEl.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, 0.5)";
});

/********** For the slider **********/

function showSlide(index) {
  const slides = document.getElementById("slides"); //Gets the slider container
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

plusBtnEl.addEventListener("click", () => {
  productQuantity += 1;
  quantityEl.textContent = productQuantity;
  minusBtnEl.disabled = false;
});

minusBtnEl.addEventListener("click", () => {
  if (productQuantity === 0) {
    minusBtnEl.disabled = true;
  } else {
    minusBtnEl.disabled = false;
    productQuantity -= 1;
    quantityEl.textContent = productQuantity;
  }
});

/********** Show Cart Functionality **********/
cartBtnEl.addEventListener('click', () => {

  cartVisibility();

})

addToCartEl.addEventListener('click', () => {
  
  if(productQuantity > 0){
    cartContainerEmptyEl.style.display = "none";
    cartContainerFullEl.style.display = "block"
    itemsInCartEl.textContent = productQuantity;
    console.log(itemsInCartEl.textContent);
    totalBillEl.textContent = "$" + productQuantity * + 125 + ".00"
    cartBtnQuantityEl.style.display = "flex"
    theQuantityEl.textContent = productQuantity;
    productQuantity = 0;
    quantityEl.textContent = "0";
  }

})

/********** Delete Items Functionality **********/

deleteItemEl.addEventListener('click', () => {

  productQuantity = 0;
  itemsInCartEl.textContent = 0;
  totalBillEl.textContent = "";
  cartContainerFullEl.style.display = "none";
  cartContainerEmptyEl.style.display = "block";
  cartBtnQuantityEl.style.display = "none";
})

/********** Changing the main display when an img is clicked **********/

secondDisplayEl.forEach((img, index) => {
  img.addEventListener('click', () => {
    mainDisplayContainerEl.style.backgroundImage = `url('./images/image-product-${index + 1}.jpg')`;
    mainDisplayContainerEl.style.backgroundSize = "cover";
    mainDisplayContainerEl.style.backgroundPosition = "center";
  })
})

/********** Function for the cart functionality **********/
function cartVisibility(){
  if(cartContainerEl.style.display === "none"){
    cartContainerEl.style.display = "block"
  }else{
    cartContainerEl.style.display = "none";
  }

}

function fullCartVisibility(){
  if(cartContainerFullEl.style.display === "none"){
    cartContainerFullEl.style.display = "block"
  }else{
    cartContainerFullEl.style.display = "none";
  }
}