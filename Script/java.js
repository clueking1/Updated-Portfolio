


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  
}

const someElement = document.querySelector(".nav");
const someElement2 = document.querySelectorAll(".yes");
const but = document.querySelectorAll(".item");
const img = document.querySelector(".no");
const con = document.querySelector(".container");
const nex = document.querySelectorAll(".buts");
const fig = document.querySelectorAll("figcaption");



but.forEach((t) => {
  t.addEventListener('click', () => {
    for (i = 0; i < but.length; i++) {
      but[i].style.opacity = ".3";
    }
    t.style.opacity = "1";
    if(con.style.perspective === '1200px') {
      con.style.perspective = '800px'
      fig.forEach((t) => {
        t.style.opacity= '1'
        t.style.visibility= 'visible'
    })
    nex.forEach((l) => {
      l.style.opacity= '0'
      l.style.visibility= 'hidden'
  })
    } else {
      con.style.perspective = '1200px'
      fig.forEach((t) => {
        t.style.opacity= '0'
        t.style.visibility= 'hidden'
    })
    nex.forEach((l) => {
      l.style.opacity= '1'
      l.style.visibility= 'visible'
  })

  for (i = 0; i < but.length; i++) {
    but[i].style.opacity = "1";
  }
    }
  })
})

window.onscroll = function(){

  if(someElement.getBoundingClientRect().top <= 0){

    someElement2.forEach(t => t.style.backgroundColor = "none")
    someElement.style.border = "2px groove  #a2a3a5"
    someElement.style.backgroundColor = "#251f2fd6"
  
  } 
  if (someElement.getBoundingClientRect().top > 0) {

    someElement.style.border = ""
    someElement.style.backgroundColor = ""
    someElement2.forEach(t => t.style.backgroundColor = "black")
  }
  
}
var carousel = $(".carousel"),
    currdeg  = 0;
   
     
    
$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){

  if(con.style.perspective === '800px') {
      
  } else {
   
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
  }
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".nope").css({
    transform: 'translate3d(0%, '+(scroll/10)+'%, 0) scale('+(100 + scroll/5)/100+')',
    //marginLeft: '-163px',
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/200) + "px)"
  });

  console.log($('.port').scrollTop())
  
  var yup = $('.nope').css('opacity')


  $(".port").css({
    opacity: (1.8  + - yup),
    marginTop: (0 - scroll),
	
    });
 
  
});



$(window).scroll(function(){
  $(".nope").css("opacity", 1 - $(window).scrollTop() / 1790);
});


$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tag = $(".img1")
  

  
  if ($(tag).position().top < pageBottom) {
  $(tag).addClass("visible")
  } else {
    $(tag).removeClass("visible")
  }
  })

  



  $(function(){  // $(document).ready shorthand
    $('.aboutMeDiv').fadeIn('slow');
  });
  
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".aboutMeDiv")
 
    
    if ($(".aboutMeDiv").position().top < pageBottom) {
    $(".aboutMeDiv").addClass("visible")
    } else {
      $(".aboutMeDiv").removeClass("visible")
  
    }
    })


 


  
