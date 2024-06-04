var elemC = document.querySelector(".contra_text");

var fixed = document.querySelector(".fixed-img");

elemC.addEventListener("mouseenter",function(){
  fixed.style.display ="block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display ="none"
  })

  var elems = document.querySelectorAll(".contaa");

  elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-img")
        console.log(image)
        fixed.style.backgroungImage = `url(${image})`
        
        
    })
  })