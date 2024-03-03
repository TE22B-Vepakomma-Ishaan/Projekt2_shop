

function openMenu() {
    var x = document.getElementById("product_item_links");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  } 

function openCart() {
    var x = document.getElementById("cart");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  } 



const buttons = document.querySelectorAll("[data-slider-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.sliderButton === "next" ? 1 : -1;
        const slides = button.closest("[data-slider]").querySelector('[data-slides]');
      
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1; 
        if (newIndex >= slides.children.length) newIndex = 0;
        
        activeSlide.removeAttribute("data-active");
        slides.children[newIndex].setAttribute("data-active", "true");
      });
    });
    
    
    














    
    
    function saveCartData() {
      const cartItems = [];
      cartList.querySelectorAll('li').forEach(item => {
        const productName = item.dataset.product;
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.querySelector('.total-price').dataset.price);
        cartItems.push({ productName, quantity, price });
      });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    function loadCartData() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.forEach(item => {
        const newItem = document.createElement('li');
        newItem.dataset.product = item.productName;
        newItem.innerHTML = `
          <span>${item.productName}</span>
          x<span class="quantity">${item.quantity}</span>
          -  <span class="total-price" data-price="${item.price.toFixed(2)}">£${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartList.appendChild(newItem);
      });
      updateCartSummary(); 
    }
    



    
    const addToCartButtons = document.querySelectorAll('.item button');
    
    const cartList = document.getElementById('cart-list');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });

function addToCart(event) {

  const article = event.target.closest('.item');
  
  const productName = article.querySelector('.item-name h2').textContent.trim();
  const priceText = article.querySelector('.item-price h2').textContent.trim();
  const productPrice = parseFloat(priceText.slice(1));


  const existingCartItem = Array.from(cartList.children).find(item => item.dataset.product === productName);

  if (existingCartItem) {
    
    const quantityElement = existingCartItem.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;

    
    const totalPriceElement = existingCartItem.querySelector('.total-price');
    const newTotalPrice = (quantity * productPrice).toFixed(2);
    totalPriceElement.textContent = `£${newTotalPrice}`;

  } else {
    
    const newItem = document.createElement('li');
    newItem.dataset.product = productName;
    newItem.innerHTML = `
      <span>${productName}</span>
      x<span class="quantity">1</span>
      -  <span class="total-price" data-price="${productPrice.toFixed(2)}">£${productPrice.toFixed(2)}</span>
    `;
    cartList.appendChild(newItem);


    saveCartData();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCartData();
});


function clearCart(){
  const cartList = document.getElementById('cart-list');

  cartList.innerHTML = '';
  updateTotalPrice();
}


