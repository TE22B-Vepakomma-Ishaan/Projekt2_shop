

function openMenu() {
    var x = document.getElementById("product_item_links");
    
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
  
      $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
  });

  