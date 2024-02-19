

function openMenu() {
    var x = document.getElementById("product_item_links");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.style.filter = "greyscale(60%)";
    }

    let prom =document.querySelector("#promoted_page");
    prom.style.backgroundColor="grey";
    // document.body.style.filter="grayscale(100%)";

  } 


  