

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






  var $slider = document.getElementById('product-item-links');
  var $toggle = document.getElementById('toggle');
  
  $toggle.addEventListener('click', function() {
      var isOpen = $slider.classList.contains('slide-in');
  
      $slider.setAttribute('class', isOpen ? 'slide-in' : 'slide-out');
  });

  

  





const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);







