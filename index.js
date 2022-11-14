$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000 ,
    nav: true,
    responsive:{
        0:{
            items: 3
        },
        600:{
            items: 3
        },
        1000:{
            items: 2
        }
    }
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000 ,
    nav: true,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
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