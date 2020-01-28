

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
    const scroll = $(window).scrollTop();
      $(".nope").css({
      transform: 'translate3d(0%, '+(scroll/10)+'%, 0) scale('+(100 + scroll/5)/100+')',
      "-moz-transform": 'translate3d(0%, '+(scroll/10)+'%, 0) scale('+(100 + scroll/5)/100+')',

          //"-webkit-filter": "blur(" + (scroll/200) + "px)",
          //filter: "blur(" + (scroll/200) + "px)"
    });
});

$(window).on('scroll', function() { 
    var scroll = $(window).scrollTop();
    if ($(window).scrollTop() >= $( 
      '.port').offset().top + $('.port'). 
        outerHeight() - window.innerHeight + -400) { 
          $(".port").css({
            transform: 'translate3d(0%, '+(1)+'%, 0) scale('+(1)+')',

        
          })
          $(".nav a").css({
            padding: '10px 0px',
            //backgroundColor: '#342b4491',
        });
        $(".container").css({
            opacity: 1
        }) ;
        
    } else if  ($(window).scrollTop() <= $( 
      '.port').offset().top + $('.port'). 
        outerHeight() - window.innerHeight + -400) {
      $(".port").css({
        transform: 'translate3d(0%, '+(.927)+'%, 0) scale('+(.918)+')',

    
      })
      $(".container").css({
          opacity: 0
      }) ;
      $(".nav a").css({
        padding: '45px 0px',
        //backgroundColor: '##342b4491'
    });
    } })

    $(window).on('scroll', function() { 
        var scroll = $(window).scrollTop();
        if ($(window).scrollTop() >= $( 
          '.aboutMeContents').offset().top + $('.aboutMeContents'). 
            outerHeight() - window.innerHeight + -400) { 
              $(".aboutMeContents").css({
                transform: 'translate3d(0%, '+(1)+'%, 0) scale('+(1)+')',
      
                
              });
              $(".aboutMeDiv").css({
                  opacity: 1
              })
              $(".slideRes").css({
                opacity: 1
              })
            
        }else if  ($(window).scrollTop() <= $( 
          '.aboutMeContents').offset().top + $('.aboutMeContents'). 
            outerHeight() - window.innerHeight + -400) {
          $(".aboutMeContents").css({
            transform: 'translate3d(0%, '+(.927)+'%, 0) scale('+(.918)+')',
      
        
          }) ;
          $(".aboutMeDiv").css({
            opacity: 0
        })
      
        $(".slideRes").css({
          opacity: 0
        })
        } })

        $(window).on('scroll', function() { 
            var scroll = $(window).scrollTop();
            if ($(window).scrollTop() >= $( 
              '.contactMe').offset().top + $('.contactMe'). 
                outerHeight() - window.innerHeight + -400) { 
                  $(".contactMe").css({
                    transform: 'translate3d(0%, '+(1)+'%, 0) scale('+(1)+')',
      
                
                  });
                  $(".about").css({
                    opacity: 1
                }) ;
            
                
            }else if  ($(window).scrollTop() <= $( 
              '.contactMe').offset().top + $('.contactMe'). 
                outerHeight() - window.innerHeight + -400) {
              $(".contactMe").css({
                transform: 'translate3d(0%, '+(.927)+'%, 0) scale('+(.918)+')',
            }) ;
              $(".about").css({
                opacity: 0
            }) ;
          
            } })