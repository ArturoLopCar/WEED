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