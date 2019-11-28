'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel';

$(function() {
  $(' .walpaper-section .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    nav:true,
    navText: [ "<img src='../assets/right.png'>","<img src='../assets/left.png'>"],
    responsive:{

        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#events  .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    navText: [ "<img src='../assets/right.png'>","<img src='../assets/left.png'>"],
    responsive:{

        0:{
            items:1
        },
        600:{
            items:3
        },

    }
})





});
