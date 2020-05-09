$(document).ready(function(){
	$(".m_menu").hover(
		function(){
			$(this).find(".sub_menu").stop().slideDown(300);
			
		},
		function(){
			$(this).find('.sub_menu').stop().slideUp(300); 
		});

});