		var omain=document.getElementById("main");
		(function (doc, win) {
	        var docEl = doc.documentElement,
	            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	            recalc = function () {
	                var clientWidth = docEl.clientWidth;
	                if (!clientWidth) return;
	                if(clientWidth>=640){
	                    docEl.style.fontSize = '100px';
	                    omain.style.width="6.4rem";
	                    omain.style.margin="0 auto";

	                }else{
	                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
	                }
	            };
	        if (!doc.addEventListener) return;
	        win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
	    })(document, window);