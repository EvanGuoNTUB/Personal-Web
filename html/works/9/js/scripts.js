// JavaScript Document
$(function(){
	
	var isOpen=false;
	
	$('.adver').mouseenter(function(){
		$(this).stop().animate({height:150},{duration:1000,easing:'easeInOutBack'});
	});
		
	$('.adver').mouseleave(function(){
		$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
		
	});
	
	/*-----------------------------------------------------*/
	
	$('.navbar li').mouseenter(function(){
		$(this).stop().animate({marginTop:-5,fontSize:20},{duration:300,easing:'easeInOutBack'});
	});
	$('.navbar li').mouseleave(function(){
		$(this).stop().animate({marginTop:0,fontSize:17},{duration:300,easing:'easeInOutBack'});
	});
	
	$('.header .logo').mousedown(function(){
		if(isOpen){
			
			$(this).parent().stop().animate({marginTop:-80},{duration:600,easing:'easeInOutBack'});
	 $(this).stop().rotate({ angle: 0,animateTo:180,duration:600 })
	
			isOpen=false
			
		}else{
			
			
			$(this).parent().stop().animate({marginTop:0},{duration:600,easing:'easeInOutBack'});
	$(this).stop().rotate({ angle: -180,animateTo:0,duration:600 })
			isOpen=true
		}
		
		
	});
	
});