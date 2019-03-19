//-------------------------
// form
//-------------------------
$(function(){
	$('.button').click(function(){
		alert("Thanks for your feeback!");
	});
});
$(function(){
	$('nav a').click(function(){
		navTrigger.className = "nav-trigger open";
    	nav.className = "out";
	});
});

//-------------------------
// loader
//-------------------------
$(function() {
	$(".load_white").delay(3000).fadeOut(100);
	$(".loader").delay(3000).fadeOut(100);
});
