// Easing函數使用: easings.net/zh-tw

$(function(){
    // 滑鼠移入	
    $('.item').mouseenter(function(){
        $(this).find('p','img').stop().animate(
            {
                top:-150
            }, 
            {
                duration:500,
            });
        
        $(this).find('img').stop().animate(
            {
                width:260
            }, 
            {
                duration:50
            });
        }
    );	

    // 滑鼠移出	
    $('.item').mouseleave(function(){			
        $(this).find('p').stop().animate(
            {
                top:0
            }, 
            {
                duration:50
            });
        $(this).find('img').stop().animate(
            {
                width:220
            }, 
            {
                duration:50
            });
        }
    );		
});