


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

// forEach method
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); 
  }
};

var spin = document.querySelector('figure#spinner')
var ua = navigator.userAgent.toLowerCase(); 
var spinner = document.querySelector("#spinner"),
angle = 0,
images = document.querySelectorAll("#spinner figure"),
numpics = images.length,
degInt = 360 / numpics,
start = 0,
current = 1;

forEach (images, function (index, value) {
    images[index].style.webkitTransform = "rotateY(-"+start+"deg)";
    images[index].style.transform = "rotateY(-"+start+"deg)";
 
    start = start + degInt;
});

function setCurrent(current) { 
  document.querySelector('figure#spinner figure:nth-child('+current+')').classList.add('current'); 


  
}

function style () {
 
  if (ua.indexOf('safari') != -1) { 
  
    
      spin.style.transform = 'translateZ(-500px)';
  }
}

function galleryspin(sign) { 

  console.log('noooooo')
  forEach (images, function (index, value) {
		images[index].classList.remove('current');
		images[index].classList.remove('focus');
		images[index].classList.remove('caption'); 
	})
 
	if (!sign) { angle = angle + degInt; 
           current = (current+1);
            if (current > numpics) { current = 1; }
				} else { 
            angle = angle - degInt; 
            current = current - 1;
            	if (current == 0) { current = numpics; } 
           }
  
           
           
   
            spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -webkit-transform: rotateY("+ angle +"deg);");
         

  setCurrent(current);



}

var slideButs = document.querySelectorAll('.ss-icon')







setCurrent(1);


style()

