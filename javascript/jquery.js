/*
$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "#477fd7");
        }, function(){
        $(this).css("background-color", "#47ffd7");
    });
});
*/




//Smooth scrolling when clicking a link
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });



  //Smooth scrolling mouse wheel
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
  
  function wheel(event) {
      var delta = 0;
      if (event.wheelDelta) delta = event.wheelDelta / 30; //Lower is faster
      else if (event.detail) delta = -event.detail / 3;
  
      handle(delta);
      if (event.preventDefault) event.preventDefault();
      event.returnValue = false;
  }
  
  var goUp = true;
  var end = null;
  var interval = null;
  
  function handle(delta) {
    var animationInterval = 30; //lower is faster
    var scrollSpeed = 20; //lower is faster
  
    if (end == null) {
      end = $(window).scrollTop();
    }
    end -= 12 * delta; //higher is more page travelled per scroll
    goUp = delta > 0;
  
    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = $(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 || 
            scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
            goUp && step > -1 || 
            !goUp && step < 1 ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        $(window).scrollTop(scrollTop + step );
      }, animationInterval);
    }
  }

  
 //bckground image zoom on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".container-moraine").css({
      //def value 5
      backgroundSize: (100+scroll/20) + "%",
      top: -(scroll/10) + "%",
      
      //BLUR      
      //"-webkit-filter": "blur(" + (scroll/200) + "px)",
      //filter: "blur(" + (scroll/200) + "px)"
    });
  });
  

// canoe dog
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".container-dog").css({
      // first number: low --> initial image starts more left
      //second number: low --> faster movement
      left: (-600+scroll/1.5) + 'px', 
    });
  });



//List active class
$(document).ready(function(){
 

  $('ul li').click(function(){
    $('li').removeClass("listactive");
    $(this).addClass("listactive");
  });


  // $('.listactive').hover (function(){
  //   $('.listactive').css('pointer-events', 'none');
  // });


  // $('.listactive').click(function() { return false; });
  

  $(".descoutdoor, .descdark, .descphoto, .descaviation").hide();
  $(".imgoutdoor, .imgdark, .imgphotography, .imgaviation").hide();


  $('.itemnature').on("click", function(){

    $(".imgoutdoor, .imgdark, .imgphotography, .imgaviation").fadeOut();
    setTimeout(function() {
      $(".imgnature").fadeIn(300);
    }, 300);

    $(".descnature, .descaviation, .descoutdoor, .descdark, .descphoto").fadeOut();
    setTimeout(function() {
      $(".descnature").fadeIn(300);
    }, 300);
    setTimeout(function() {
      ScrollReveal().reveal('div.line1', {delay: 000, distance: '100%', duration: 0250, origin: 'top'});
      ScrollReveal().reveal('div.line2', {delay: 025, distance: '080%', duration: 0500, origin: 'top'});
      ScrollReveal().reveal('div.line3', {delay: 050, distance: '060%', duration: 0750, origin: 'top'});
      ScrollReveal().reveal('div.line4', {delay: 075, distance: '050%', duration: 1000, origin: 'top'});
      ScrollReveal().reveal('div.line5', {delay: 100, distance: '040%', duration: 1250, origin: 'top'});
    }, 300);
  });

  $('.itemoutdoor').on("click", function(){

    $(".imgnature, .imgdark, .imgphotography, .imgaviation").fadeOut();
    setTimeout(function() {
      $(".imgoutdoor").fadeIn(300);
    }, 300);

    $(".descnature, .descaviation, .descoutdoor, .descdark, .descphoto").fadeOut();
    setTimeout(function() {
      $(".descoutdoor").fadeIn(300);
    }, 300);
    setTimeout(function() {
      ScrollReveal().reveal('div.line1', {delay: 000, distance: '100%', duration: 0250, origin: 'top'});
      ScrollReveal().reveal('div.line2', {delay: 025, distance: '080%', duration: 0500, origin: 'top'});
      ScrollReveal().reveal('div.line3', {delay: 050, distance: '060%', duration: 0750, origin: 'top'});
      ScrollReveal().reveal('div.line4', {delay: 075, distance: '050%', duration: 1000, origin: 'top'});
      ScrollReveal().reveal('div.line5', {delay: 100, distance: '040%', duration: 1250, origin: 'top'});
    }, 300);
  });

  $('.itemdark').on("click", function(){

    $(".imgnature, .imgoutdoor, .imgphotography, .imgaviation").fadeOut();
    setTimeout(function() {
      $(".imgdark").fadeIn(300);
    }, 300);

    $(".descnature, .descaviation, .descoutdoor, .descdark, .descphoto").fadeOut();
    setTimeout(function() {
      $(".descdark").fadeIn(300);
    }, 300);
    setTimeout(function() {
      ScrollReveal().reveal('div.line1', {delay: 000, distance: '100%', duration: 0250, origin: 'top'});
      ScrollReveal().reveal('div.line2', {delay: 025, distance: '080%', duration: 0500, origin: 'top'});
      ScrollReveal().reveal('div.line3', {delay: 050, distance: '060%', duration: 0750, origin: 'top'});
      ScrollReveal().reveal('div.line4', {delay: 075, distance: '050%', duration: 1000, origin: 'top'});
      ScrollReveal().reveal('div.line5', {delay: 100, distance: '040%', duration: 1250, origin: 'top'});
    }, 300);
  });

  $('.itemphoto').on("click", function(){

    $(".imgoutdoor, .imgdark, .imgnature, .imgaviation").fadeOut();
    setTimeout(function() {
      $(".imgphotography").fadeIn(300);
    }, 300);

    $(".descnature, .descaviation, .descoutdoor, .descdark, .descphoto").fadeOut();
    setTimeout(function() {
      $(".descphoto").fadeIn(300);
    }, 300);
    setTimeout(function() {
      ScrollReveal().reveal('div.line1', {delay: 000, distance: '100%', duration: 0250, origin: 'top'});
      ScrollReveal().reveal('div.line2', {delay: 025, distance: '080%', duration: 0500, origin: 'top'});
      ScrollReveal().reveal('div.line3', {delay: 050, distance: '060%', duration: 0750, origin: 'top'});
      ScrollReveal().reveal('div.line4', {delay: 075, distance: '050%', duration: 1000, origin: 'top'});
    }, 300);
  });

  $('.itemaviation').on("click", function(){

    $(".imgoutdoor, .imgdark, .imgphotography, .imgnature").fadeOut();
    setTimeout(function() {
      $(".imgaviation").fadeIn(300);
    }, 300);

    $(".descnature, .descaviation, .descoutdoor, .descdark, .descphoto").fadeOut();
    setTimeout(function() {
      $(".descaviation").fadeIn(300);
    }, 300);
    setTimeout(function() {
      ScrollReveal().reveal('div.line1', {delay: 000, distance: '100%', duration: 0250, origin: 'top'});
      ScrollReveal().reveal('div.line2', {delay: 025, distance: '080%', duration: 0500, origin: 'top'});
      ScrollReveal().reveal('div.line3', {delay: 050, distance: '060%', duration: 0750, origin: 'top'});
      ScrollReveal().reveal('div.line4', {delay: 075, distance: '050%', duration: 1000, origin: 'top'});
      ScrollReveal().reveal('div.line5', {delay: 100, distance: '040%', duration: 1250, origin: 'top'});
      ScrollReveal().reveal('div.line6', {delay: 125, distance: '030%', duration: 1500, origin: 'top'});
    }, 300);
  });



  ScrollReveal().reveal('.container-moraine');
  ScrollReveal().reveal('#heythere', { delay: 500, duration: 1000 });
  ScrollReveal().reveal('#intro', { delay: 750, duration: 1000 });
  ScrollReveal().reveal('.container-divider');
  ScrollReveal().reveal('.about-photo', {delay: 500, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.item-black-about', {delay: 750, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.container-flash', {delay: 0, duration:250, reset: true, viewFactor: 0.99});
  ScrollReveal().reveal('.item-photowords', {delay: 500, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.about-photo', {delay: 500, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.itemnature', {delay: 500, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.itemoutdoor', {delay: 525, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.itemdark', {delay: 550, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.itemphoto', {delay: 575, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.itemaviation', {delay: 600, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.item-simpleArt', {delay: 500, distance: '10%', duration: 1000});
  ScrollReveal().reveal('.item-description', {delay: 500, distance: '10%', duration: 1000});

});





//Refresh to top of page
$(document).ready(function(){
  $(this).scrollTop(0);
});






// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    


    
// }