var navTrigger = document.getElementById("nav-trigger");
var nav = document.getElementById("nav");
var labels = document.getElementsByClassName("nav-label");


// Event Listening
navTrigger.addEventListener("click", navToggle);

function navToggle(e) {
  var closed = navTrigger.className.indexOf("close") > 0;
  if (closed) {
    navTrigger.className = "nav-trigger open";
    nav.className = "out";
  } else {
    navTrigger.className = "nav-trigger close";
    nav.className = "in";
  }
}

window.onscroll = function() {myFunction()};
function myFunction() {
   var closed = navTrigger.className.indexOf("close") > 0;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       // navTrigger.addClass("active");
       if (closed) {
        navTrigger.className = "nav-trigger" + " close" ;
      }else{
         navTrigger.className = "nav-trigger" + " active";
      }
/*
       navTrigger.className = "nav-trigger" + " active";*/
    } else {
      if (closed) {
        navTrigger.className = "nav-trigger" + " close" ;
      }else{
         navTrigger.className = "nav-trigger" + " open";
      }
       
    }
}