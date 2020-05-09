$(document).ready(function(){


var ts, idx, src;
   $(".md_con a").mouseover(function(){
	 ts = $(this).children('img').attr('src');
     idx = ts.lastIndexOf(".");
     src= ts.substring(0,idx) + "_hover.png";
	 $(this).children('img').attr('src',src);
   });
   $(".md_con a").mouseout(function(){
      ts = $(this).children('img').attr('src');
      idx = ts.lastIndexOf("_");
      src= ts.substring(0,idx) + ".png";
      $(this).children('img').attr('src',src);
   });




   $(".exp > li").hover(function(){
	    $(this).find('a > img').css({
      "transform" : "scale(1.2)",
	  "transition" :" 0.5s"
      });
	},function(){
		$(this).find('a > img').css({
      "transform" : "scale(1.0)",
	  "transition" :" 0.5s"
      });

	});




















        });
