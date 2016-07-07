window.onload=function(){
	var oDiv=document.getElementById('pic1');
	var heart=getByClass(oDiv,'heart')[0];
	var heartLi=heart.getElementsByTagName('li');
	var Photo=getByClass(oDiv,'bimg')[0];
	var PhotoLi=Photo.getElementsByTagName('li');
	var oNext = getByClass(oDiv, 'next')[0];
	var now=0;

	function tab(){
		// for(var i=0;i<3;i++){
		// 	heartLi[i].className='';
		// }
		// heartLi[now].getStyle('thistitle');
		startMove(Photo,'left',-(now*PhotoLi[0].offsetWidth));
	}
	for(var i=0;i<3;i++){
		heartLi[i].index=i;
		heartLi[i].onclick=function(){
			now=this.index;
			tab();
		}
	}

	oNext.onclick = function() {
		        now++
		        if (now == PhotoLi.length) {
		            now = 0;
		        }
		        tab();
		    }
	var timer=setInterval(oNext.onclick,3000);
			oDiv.onmouseover=function(){
				clearInterval(timer);
			}
			oDiv.onmouseout=function(){
				timer=setInterval(oNext.onclick,3000);
			}
}



function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}else{
				return getComputedStyle(obj, false)[name]
			}
		}
function getByClass(oParent,nclass){
			var ele=oParent.getElementsByTagName('*');
			var aRrent=[];
			for(var i=0;i<ele.length;i++){
				if(ele[i].className==nclass){
					aRrent.push(ele[i]);
				}
			}
			return aRrent;
		}
		function startMove(obj,att,add){
			clearInterval(obj.timer)
			obj.timer=setInterval(function(){
				var cutt=0;
				if (att=='opacity'){
					cutt=Math.round(parseFloat(getStyle(obj,att)));
				}else{
					cutt=Math.round(parseInt(getStyle(obj,att)));
				}
				var speed=(add-cutt)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cutt==add){
					clearInterval(obj.timer)
					}else{
					if(att=='opacity'){
						obj.style.opacity=(cutt+speed)/100;
						obj.style.filter='alpha(opacity:'+(cutt+speed)+')';
					}else{
						obj.style[att]=cutt+speed+'px';
					}
				}
			},30)
		}
