$(document).ready(function(){
	
	$(function() {
			$('ul.tab li').click(function() {
				var activeTab = $(this).attr('data-tab');
				$('ul.tab li').removeClass('current');
				$('.tabcontent').removeClass('current');
				$(this).addClass('current');
				$('#' + activeTab).addClass('current');
			})
		});
	
	$(function() {
			$('ul.col_tab li').click(function() {
				var activeTab = $(this).attr('data-tab');
				$('ul.col_tab li').removeClass('current');
				$('.tabcontent').removeClass('current');
				$(this).addClass('current');
				$('#' + activeTab).addClass('current');
			})
		});
	
	$(function() {
			$('.pagination a').click(function() {
				var activeTab = $(this).attr('href');
				$('.pagination a').removeClass('numsel');
				$(this).addClass('numsel');
			})
		});
	
	$(function() {
			$('.down_btn').click(function(){
				$('.down_btn').removeClass('activeDBtn');
				
				$(this).siblings('.hidden_box').toggle(500);	
				
				$(this).addClass('activeDBtn');
				
				$(function() {
					
					var prevBtn = $('.activeDBtn').siblings('.hidden_box').find('.slide_btn_prev');
					var nextBtn = $('.activeDBtn').siblings('.hidden_box').find('.slide_btn_next');
					var slideList = $('.activeDBtn').siblings('.hidden_box').find('.slide_list');
					

						$(nextBtn).click(function(){
							slideList.animate({"left":0+"px"},700);
						});
						$(prevBtn).click(function(){
											
							slideList.animate({"left":-1400+"px"},700);
							
							
						});						
				});
				});
			});
				
	























});

		
				
				



