$("a.page-scrolling").click(function(){
	$("html, body").animate({scrollTop:$(this.hash).offset().top}, 1000);

});