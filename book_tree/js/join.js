$(document).ready(function(){



	$(".add_from").click(function(){
		$(this).siblings('#child_info').css({
		"overflow":"visible"
		});
		$(this).siblings('#child_info').animate({
		"height":"100%",
		"width":"100%",
		});
		
		
	});


	$(".min_from").click(function(){
		$(this).siblings('#child_info').css({
		"overflow":"hidden"
		});
		$(this).siblings('#child_info').animate({
		"height":"0",
		"width":"0"
		});
	});
	});

$(document).ready(function(){

	var count = 2;
	$(".add_add_child").on("click", function(){
		var addedFormDiv = document.getElementById("addedFormDiv");
		
		var str = "";
		

		str="<h3>자녀정보 입력" + count +"</h3>";
		str += "<ul class='user_info'>";
		str += "<li class='c_after first_line'>";
		str += "<label for='cname"+count+"' class='th float_left'>자녀이름</label>";
		str +="<span class='td float_left'>";
		str +="<input type='text' id='cname" + count +"' name='cname" + count +"' />";
		str +="<p class='danger'></p>";
		str +="</span>";
		str +="</li>";
		str +="<li class='c_after'>";
		str +="<label for='cid" + count +"' class='th float_left'>자녀 아이디</label>";
		str +="<span class='td float_left'>";
		str +="<input type='text' id='cid" + count +"' name='cid" + count +"'/>";
		str +="<p class='danger'>영문 대문자 또는 소문자 길이는 5~15자 숫자 포함가능</p>";
		str +="</span>";
		str +="</li>";
		str +="<li class='c_after'>";
		str +="<label for='cpwd" + count +"' class='th float_left'>비밀번호</label>";
		str +="<span class='td float_left'>";
		str +="<input type='password' id='cpwd" + count +"' name='cpwd" + count +"'/>		";
		str +="<p class='danger'>숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 </p>";
		str +="</span>";
		str +="</li>";
		str +="<li class='c_after'>";
		str +="<label for='recpwd" + count +"' class='th float_left'>비밀번호 확인</label>";
		str +="<span class='td float_left'>";
		str +="<input type='repassword' id='recpwd" + count +"' name='recpwd" + count +"'/>";
		str +="<p class='danger'>입력하신 비밀번호와 일치하게 입력</p>	";
		str +="</span>";
		str +="</li>";
		str +="<li class='c_after'>";
		str +="<label for='cbirthday" + count +"' class='th float_left'>생년월일</label>		";
		str +="<span class='td float_left'>";
		str +="<input type='date' name='cbirthday" + count +"' value='1999-03-30'/>";
		str +="</span>";
		str +="</li>";
		str +="<li class='c_after last_line'>";
		str +="<label for='cgender" + count +"' class='th float_left'>성별</label>";
		str +="<span class='ent td float_left'>";
		str +="<input type='radio' name='cgender" + count +"' value='f' checked='checked'/>여";
		str +="<input type='radio' name='cgender" + count +"' value='m' />남";
		str +="</span>";
		str +="</li>";
		str +="</ul>";
		var addedDiv = document.createElement("div"); // 폼 생성

                     addedDiv.id = "added_"+count; // 폼 Div에 ID 부여 (삭제를 위해)

                     addedDiv.innerHTML  = str; // 폼 Div안에 HTML삽입

                     addedFormDiv.appendChild(addedDiv); // 삽입할 DIV에 생성한 폼 삽입
		
		 count++;

		
		
	});
		$(".del_child").on("click", function(){

                     var addedFormDiv = document.getElementById("addedFormDiv");

          

                     if(count >1){ // 현재 폼이 두개 이상이면

                                var addedDiv = document.getElementById("added_"+(--count));

                                // 마지막으로 생성된 폼의 ID를 통해 Div객체를 가져옴

                                addedFormDiv.removeChild(addedDiv); // 폼 삭제 

                     }else{ // 마지막 폼만 남아있다면

                                document.baseForm.reset(); // 폼 내용 삭제

                     }

           });
	});





