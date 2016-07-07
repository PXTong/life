$(function(){
	var _speed = 30;
				var _hdlunb = $('.ad');//div
				var _hdli1 =  $('.adli1');//
				var _hdli2 = $('.adli2');//li
				_hdli2.html(_hdli1.html());
				function Marquee(){
					if (_hdlunb.scrollLeft()>=_hdli1.width())
						 _hdlunb.scrollLeft(0);
						else{
							_hdlunb.scrollLeft(_hdlunb.scrollLeft()+1);
						}
				}
				$(function(){
					// 两秒后调用
					var sliding = setInterval(Marquee,_speed)
					_hdlunb.hover(function(){
						//鼠标移动到div上停止
						clearInterval(sliding);
					},function(){
						//离开继续调用
						sliding=setInterval(Marquee,_speed);
					});
				});

});