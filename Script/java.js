


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
  setTimeout(showSlides, 4000); 
}

const someElement = document.querySelector(".nav");
const someElement2 = document.querySelectorAll(".yes");

window.onscroll = function(){

  if(someElement.getBoundingClientRect().top <= 0){
   console.log("hi")
    someElement2.forEach(t => t.style.backgroundColor = "none")
    someElement.style.border = "2px groove  #a2a3a5"
    someElement.style.backgroundColor = "#251f2fd6"
  
  } 
  if (someElement.getBoundingClientRect().top > 0) {
    console.log("hi")
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
