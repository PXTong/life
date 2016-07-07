$(function(){
	$('.content .news .morenew ul li:eq(0)').click(function(){
		$('.content .news .morenew ul li:eq(0)').css({'color':'#fff','background':'#FFBA01'});
		$('.content .news .morenew ul li:eq(1)').css({'color':'#FFBA01','background':'transparent'});
		$('.content .news .pictext2').hide();
		$('.content .news .pictext').show();
	});
	$('.content .news .morenew ul li:eq(1)').click(function(){
		$('.content .news .morenew ul li:eq(1)').css({'color':'#fff','background':'#FFBA01'});
		$('.content .news .morenew ul li:eq(0)').css({'color':'#FFBA01','background':'transparent'});
		$('.content .news .pictext').hide();
		$('.content .news .pictext2').show();
	});

});
