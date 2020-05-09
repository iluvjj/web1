/*네비게이션 고정*/
$(window).on('scroll', function(){
    var y = $(this).scrollTop();
	
	
$("#aside a").click(function(event){      
	
      event.preventDefault(); 
      $('html,body').stop().animate({scrollTop:$('body').offset().top}, 500); 
	 return true;
 }); 

    if (y == 0){
      $("#header").stop().animate({
      "display" : "fixed",
      "top" :0
      },0);
      $("#aside").stop().animate({
      "top" : "1000px"
      },0);

   }else{
      $("#header").stop().animate({
      "display" : "fixed",
      "top" : "-110px",	
	  "background":"#f9f9f9"
   },300);
      $("#aside").stop().animate({
      "top" : "700px"
      },300); 

   }











});
