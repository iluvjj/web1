
    $(document).on('ready', function() {
	$('.pofol_img').hover(function(){
		$(this).find('.magnifier').css({
	"transition":"0.5s",
	"opacity":"1",
	});
		$(this).find('.view').css({
			"transition":"0.5s",
	"opacity":"0",
		});
	},function(){
		$(this).find('.magnifier').css({
	"transition":"0.5s",
	"opacity":"0",
	});
	
		$(this).find('.view').css({
			"transition":"0.5s",
	"opacity":"1",
		});
	});
	
	$(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

	});

	/*상단 퍼센트와 스크롤값에따른 ainimate*/
	var pageProgress = function() {
		$(window).scroll(function() {
	    var wintop = $(window).scrollTop();
		var docheight = $('body').height();
		var winheight = $(window).height();
		var mainheight = $('#main').height();	
		var abutheight = 800;
		var serheight = 1645;
		var pofoltheight = 3050;
		var actionScroll = "";
	    console.log('wintop 스크롤 탑값'+wintop);	
	    console.log('docheight 스크롤값'+docheight);	
	    console.log('winheight 스크롤값'+winheight);	
	    console.log('serheight 스크롤값'+serheight);	
	    console.log('abutheight 스크롤값'+abutheight);	
	    console.log('pofoltheight 스크롤값'+pofoltheight);	
	

   if(   pofoltheight-500 <=  wintop&& wintop <pofoltheight+800  ){
      $('#Portfolio .wrap div .Publishing_img').css({
      "transform":"translateX(0)",
      "transition":"3.5s"
      });
   }else {
      $('#Portfolio .wrap div .Publishing_img').css({
      "transform":"translateX(45px)",
	   "transition":"3.5s"
      });
   }

   if(   pofoltheight-500 <=  wintop&& wintop <pofoltheight+800  ){
      $('#Portfolio .wrap div .design_img ').css({
      "transform":"translateX(0)",
       "transition":"3.5s"
      });
   }else {
      $('#Portfolio .wrap div .design_img ').css({
      "transform":"translateX(-45px)",
	   "transition":"3.5s"
      });
   
   }


   if(   abutheight <=  wintop&& wintop <abutheight+800  ){
      $('#About .wrap>p').css({
      "transform":"translateX(0)",
      "transition":"1.5s"
      });
	  $('#About .about_img > img ').css({
      "transform":"translateY(0)",
      "transition":"1s"
      });
   }else {
      $('#About .wrap>p').css({
      "transform":"translateX(45px)"
      });    
	   $('#About .about_img > img ').css({
        "transform":"translateY(80px)"
      });
   
   }

   if(  serheight < wintop  && wintop <serheight+800 ){
      $('.poto >div').stop().animate({
      width:"70%"
      },3000);
   }else {
      $('.poto >div').stop().animate({
      width:"0%"
      },20);
   
   }
   
   if(  serheight < wintop  && wintop <serheight+800 ){
       console.log('집입성공');
      $('.illr >div').stop().animate({
      width:"75%"
      },3000); 
   }else {
     console.log('진입망함');
      $('.illr >div').stop().animate({
      width:"0%"
      },20);
   }
   
   if(  serheight < wintop  && wintop <serheight+800 ){
      $('.css >div').stop().animate({
      width:"80%"
      },3000);
   }else {
      $('.css >div').stop().animate({
      width:"0%"
      },20);
   
   }
   
   if(  serheight < wintop  && wintop <serheight+800 ){
      $('.html >div').stop().animate({
      width:"80%"
      },3000);
   }else {
      $('.html >div').stop().animate({
      width:"0%"
      },20);
   
   }
   
   if(  serheight < wintop  && wintop <serheight+800 ){
      $('.js >div').stop().animate({
      width:"75%"
      },3000);
   }else {
      $('.js >div').stop().animate({
      width:"0%"
      },20);
   
   }
   
   if(  serheight < wintop  && wintop <serheight+800 ){
      $('.jq >div').stop().animate({
      width:"70%"
      },3000);
   }else {
      $('.jq >div').stop().animate({
      width:"0%"
      },20);
   
   }
   
   

	
	
		var upText = $('.main_text > dl')
	if(wintop){
		upText.css({
		"transform":"translateY(-80px)",
		"transition":"1.5s",
		"opacity":"0"
	});
	$('.block').css({
		"position":"fixed",
		"opacity":"1",
		"transition":"1.5s"});
	}else{
		upText.css({
		"transform":"translateY(0px)",
		"transition":"1.5s",
		"opacity":"1"
		});
		
	$('.block').css({
		"position":"static",
		"opacity":"0",
		"transition":"1.5s"});
	}
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    console.log('토탈스크롤'+totalScroll);
	    $(".progressBar").css("width",totalScroll+"%");
	  });

	};
	pageProgress();
