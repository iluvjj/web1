$(document).ready(function(){
	

	$(".add_delivery").click(function(){
		var hideDiv = document.getElementsByClassName('delivert_info_form');

		$(hideDiv).css({
		"overflow":"visible"
		});
		$(hideDiv).animate({
		"height":"100%",
		"width":"100%",
		});
		
		
	});


	$(".add_cencle").click(function(){
		var hideDiv = document.getElementsByClassName('delivert_info_form');

		$(hideDiv).css({
		"overflow":"hidden"
		});
		$(hideDiv).animate({
		"height":"0",
		"width":"0",
		});
		
	});
	





		var count = 2;
	$(".saveDelivery").on("click", function(){
		var addedFormLi = document.getElementById("addedFormLi");
	
		
		var str = "";
		
		var dellivery_name = document.getElementById("dellivery_name").value;
		var recipient = document.getElementById("recipient").value;
		var phonenum = document.getElementById("phonenum").value;
		var phonenum01 = document.getElementById("phonenum01").value;
		var phonenum02 = document.getElementById("phonenum02").value;
		var addr01 = document.getElementById("addr01").value;
		var addr02 = document.getElementById("addr02").value;


			 str += "<span class='choice float_left deli_"+count+"'>";
			 str += "<input type='radio' name='choice' value='선택' id='choice'"+count+">";
			 str += "</span>";
			 str += "<p class='dellivery_name deli_"+count+"'>"+dellivery_name+"</p>";
			 str += "<p class='ditail_addr deli_"+count+"'>"+addr01+addr02+"</p>";
			 str += "<p class='recipient deli_"+count+"'>"+recipient+"</p>";
			 str += "<p class='call_num deli_"+count+"'>"+phonenum+phonenum01+phonenum02+"</p>";
			 str += "<span class='modi float_left deli_"+count+"'>";
			 str += "<input type='button' name='modi' value='x'>";
			 str += "</span>";


		var addedLi = document.createElement("li");

                     addedLi.id = "added_"+count;
					addedLi.addClass="th";
					
                     addedLi.innerHTML  = str; 

                     addedFormLi.appendChild(addedLi);
		
		 
		 count++;

		
		
	});

	
	
});