        var ul=document.getElementById("ul");
        var shadow=ul.getElementsByTagName("div");
	    var li=document.getElementsByClassName("j1");
        var big=document.getElementById("big");
        var big_box=document.getElementById("big-box");
	    var odiv=document.getElementById("odiv");
	    var onew=odiv.getElementsByTagName("div");
        var left=document.getElementById("left");
        var right=document.getElementById("right");
        var able=document.getElementById("able");
        var cancer=document.getElementById("cancer");
        
        /*加阴影*/
        for (var i = 0; i < shadow.length; i++) {
         	shadow[i].style.background="url(images/quan/role_bg_0"+(i+1)+".png) no-repeat center center";
         	shadow[i].style.backgroundSize="cover";
        }
        cancer.onclick=function(){
            big.style.display="none";
            for (var i = 0; i < onew.length; i++) {
            	onew[i].id="";
            }
        }
        left.onclick=function(){
        	toleft()
        }
        right.onclick=function(){
        	toright();
        }
        for (var i = 0; i < li.length; i++) {
        	li[i].index=i;
        	li[i].onclick=function(){
        		for (var i = 0; i < onew.length; i++) {
        			onew[i].className="";
        		}
        		big.style.display="block";
        		if(this.index==0){
        		onew[5].className="zuo";
        		onew[this.index].className="show";
        		onew[this.index+1].className="you";
        		}
        		else if(this.index==5){
        		onew[this.index-1].className="zuo";
        		onew[this.index].className="show";
        		onew[0].className="you";
        		}
        		else{
        		onew[this.index-1].className="zuo";
        		onew[this.index].className="show";
        		onew[this.index+1].className="you";	
        		}
        		onew[this.index].id="act2";
            	big_box.className="bg";
            	setTimeout(qing, 10);
        	} 
        }
        function qing(){
        	for (var s = 0; s < onew.length; s++) {
	        		if(onew[s].className=="show"){
		        		onew[s].id="act";
	            		break;
	        		}
        		}
            big_box.className="bg2";
        }
        function toleft(){
        for (var i = 0; i < onew.length; i++) {
        	if(onew[i].className=="show"){
	        		for (var j = 0; j < onew.length; j++) {
	        			onew[j].className="";
	        		}
        		if(i==1){
        			onew[i].className="you";
        			onew[i-1].className="show";
        			onew[5].className="zuo";
        		}
        		else if(i==0){
        			onew[i].className="you";
        			onew[5].className="show";
        			onew[4].className="zuo";
        			break;
        		}
        		else{
        			onew[i].className="you";
        			onew[i-1].className="show";
        			onew[i-2].className="zuo";
        			}
       			}
        	}
		}
		function toright(){
        for (var i = 0; i < onew.length; i++) {
        	if(onew[i].className=="show"){
        		for (var j = 0; j < onew.length; j++) {
        			onew[j].className="";
        		}
        		if(i==5){
        			onew[i].className="zuo";
        			onew[0].className="show";
        			onew[1].className="you";
        			break;
        		}
        		else if(i==4){
        			onew[i].className="zuo";
        			onew[5].className="show";
        			onew[0].className="you";
        			break;

        		}
        		else{
        			onew[i].className="zuo";
        			onew[i+1].className="show";
        			onew[i+2].className="you";
        			break;
        			}
       			}
        	}
		}
 