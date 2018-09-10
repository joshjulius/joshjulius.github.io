$(document).ready(function(){
    $('.autoplay').slick({
        settings: "unslick",
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false
                }
            }
        ]

      });
});