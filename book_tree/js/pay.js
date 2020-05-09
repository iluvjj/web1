$(document).ready(function(){




	var num = $('#numbersell').val();

	
	var price = $(".price").text();
	var sell = $('.seller').text();
	var sellAfter = $('.sellAfter').text();
	
	var res = price / sell 
	
	sellAfter=price - res;
	$('.sellAfter').text(sellAfter);
	
	var all_pay = num * sellAfter ;
	
	
	$('.all_pay').text(all_pay);
	
	
	$('.number_min').click(function(){
		if (num > 1){
			--num;
		}else{
			alert('최소 수량입니다');
		}
		$('#numbersell').attr('value',num);
		all_pay = num * sellAfter ;
		$('.all_pay').text(all_pay);
	});
		$('.number_max').click(function(){
			if (num >= 30){
				alert('최대 수량입니다');
			}else{	
				++num;
			}
		$('#numbersell').attr('value',num);
		all_pay = num * sellAfter ;
		$('.all_pay').text(all_pay);
	});
	
	
});


















