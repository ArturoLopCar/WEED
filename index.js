$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000 ,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 4
        }
    }
})

$('.owl-one').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  autoplayTimeout:3000 ,
  nav: true,
  responsive:{
      0:{
          items: 1
      },
      600:{
          items: 1
      },
      1000:{
          items: 2
      }
  }
})

// Get the button:
let mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// SCROLL REVEAL

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
