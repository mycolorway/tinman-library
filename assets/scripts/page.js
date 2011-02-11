function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function removeClass(element,value){
	var arr = element.className.split(" "),
		newClassName = "";

	for(var i = 0; i < arr.length; i++){
		if( arr[i] !== value ) {
			newClassName += arr[i] + " ";
		}
	}
	element.className = newClassName;
}

function changeSrc(valueA,valueB){
	var oImg = document.getElementsByTagName("img");
	var hide = document.getElementsByClassName( valueA );
	var show = document.getElementsByClassName( valueB );
	for (var i=0; i<oImg.length; i++) {
		var src = oImg[i].getAttribute("src");
		src = src.replace(valueA,valueB);
		oImg[i].setAttribute("src", src);
	}

	for (var j=0; j < hide.length; j++ ) {
		removeClass(hide[j],"show");
		addClass(hide[j],"hide");
		removeClass(show[j],"hide");
		addClass(show[j],"show");
	}
}

function scrollTop ( el ) {
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') { 
		scrollPos = window.pageYOffset; 
	} 
	else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') { 
		scrollPos = document.documentElement.scrollTop; 
	} 
	else if (typeof document.body != 'undefined') { 
		scrollPos = document.body.scrollTop; 
	} 
	return scrollPos;
}

function changeLang(){
	var supportsTouch = ('createTouch' in document),
		link = document.getElementsByClassName("detail-show"),
		link1 = document.getElementsByClassName("detail-xiyou-show"),
		link2 = document.getElementsByClassName("detail-cns-show"),
		xiyou = document.getElementById("detail-xiyou-show"),
		cns = document.getElementById("detail-cns-show"),
		close = document.getElementsByClassName("close-btn"),
		el;

	for(var i = 0; i < link.length; i++){
		link[i].onmousedown = function(i){
			return function(e){
				el = link[i].parentNode.parentNode.lastChild;
				while( el.nodeType !== 1 ){
					el = el.previousSibling;
				}
				var scrollPos = scrollTop( e );
    			var y = scrollPos - 80;
				el.style.display = "block";
				el.style.top = y + "px";
			};
		}(i);
	}

	for(var i = 0; i < link1.length; i++){
		link1[i].onmousedown= function(i){
			return function(e){
				var scrollPos = scrollTop( e );
    			var y = scrollPos - 530;
				xiyou.style.display = "block";
				xiyou.style.top = y + "px";
			}
		}(i);
	}

	for(var i = 0; i < link2.length; i++){
		link2[i].onmousedown = function(i){
			return function(e){
				var scrollPos = scrollTop( e );
    			var y = scrollPos - 80;
				cns.style.display = "block";
				cns.style.top = y + "px";
			}
		}(i);
	}
	
	for(var j = 0; j < close.length; j++){
		close[j][supportsTouch ? 'ontouchstart' : 'onmousedown'] = function(j){
			return function(e){
				e.preventDefault();
				xiyou.style.display = "none";
				cns.style.display = "none";
				el.style.display = "none";		
			}
		}(j);
	}

	
	
}

window.onload = changeLang;

