

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