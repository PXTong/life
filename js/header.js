$(function(){
	$('.nav li:last a').css({'background-color':'#FFBA01','color':'#fff','border-radius': '10px'});
	$('.nav li a').mouseover(function(){
		$('.nav li a').css({'background-color':'#FFBA01','color':'#fff','border-radius': '10px'});

	});
	$('.nav li a').mouseout(function(){
		$('.nav li:last').css({'background-color':'#fff','color':'#FFBA01','border-radius': '10px'});
	});

});