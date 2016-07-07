// $(function(){
// 	$(".nav ul li a").mouseover(function(){
// 		var i=$(".nav ul li a").index($(this));
// 		$(".nav ul li a:eq(6)").css('color','#FFA809');
// 		$(this).css('color','#fff');
// 		var distance=105*(6-i)+370;
//   		$(".background").animate({
//   			left: distance+'px'
//   		},'fast');
// 	});
// 	$(".nav ul li a").mouseout(function(){
// 		$(this).css('color','#FFA809');
// 		$(".nav ul li a:eq(6)").css('color','#fff');
//   		$(".background").animate({
//   			left: '370px'
//   		},'fast');
// 	});
// });


$(function(){
	$(".nav ul li a").mouseover(function(){
		var i=$(".nav ul li a").index($(this));
		$(".nav ul li a:eq(6)").css('color','#FFA809');
		$(this).css('color','#fff');
		var distance=105*(6-i)+370;
  		$(".background").animate({
  			left: distance+'px'
  		},'fast');
  		
	});
	$(".nav ul").mouseout(function(){
		$(".nav ul li a").css('color','#FFA809');
		$(".nav ul li a:eq(6)").css('color','#fff');
  		$(".background").animate({
  			left: '370px'
  		},'fast');
	});
});