$(document).ready(function(){

 $('.picker01').click(function(){
  $(this).siblings('.bg_star').stop().animate({
	"width":"20%"

	});
});
 $('.picker02').click(function(){
  $(this).siblings('.bg_star').stop().animate({
	"width":"40%"

	});
});
 $('.picker03').click(function(){
  $(this).siblings('.bg_star').stop().animate({
	"width":"60%"

	});
});
 $('.picker04').click(function(){
  $(this).siblings('.bg_star').stop().animate({
	"width":"80%"

	});
});
 $('.picker05').click(function(){
  $(this).siblings('.bg_star').stop().animate({
	"width":"100%"

	});
});



	
 $('.review_write_btn').click(function(){
	$(this).parent('.review_write').siblings('.review_blind_text_box').toggle(500);	
});







});




















