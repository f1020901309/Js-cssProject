	function gbi(id){
		return document.getElementById(id);
	}
	function gbc(classname){
		return document.getElementsByClassName(classname);
	}
	function gbt(item,tagname){
		return item.getElementsByTagName(tagname);
	}
	/*广告*/
	var closegg=gbi("close-guanggao");
	var guanggao=gbc("guanggao");
	closegg.onclick=function(){
		guanggao[0].style.opacity="0";
		setTimeout(xs, 400);
	}
	function xs(){
		guanggao[0].style.display="none";
	}

	/*轮播图*/
	var btnbox=gbi("btnarr");
	var showimg=gbi("lunbo-img");
	var btnl=gbi("btnl");
	var btnr=gbi("btnr");
	var btnarr=gbt(btnbox,"div");
	var lunbo=gbc("lunbo")[0];
	btnr.onclick=function(){
		toright();
	}
	btnl.onclick=function(){
		toleft();
	}
	var bofang=setInterval(toright, 2000);
	lunbo.onmouseout=function(){
	bofang=setInterval(toright, 2000);
	}
	lunbo.onmouseover=function(){
		clearInterval(bofang);
	}
	for (var i = 0; i < btnarr.length; i++) {
			btnarr[i].index=i;
			var n=i+1;
			btnarr[i].onclick=function(){
			for (var i = 0; i < btnarr.length; i++) {
				btnarr[i].className="";
			}
			this.className="btn-dian";
			showimg.src="img/index/show"+this.index+".jpg";
			}
		}
	function toright(){
			showimg.style.opacity=".4";
			setTimeout(toright_con,200)
		}
	function toleft(){
			showimg.style.opacity=".4";
			setTimeout(toleft_con,200)
			}

	function toright_con(){
		showimg.style.opacity="1";
		for (var i = 0; i <btnarr.length; i++) {
				if(btnarr[i].className=="btn-dian"){		
					if(i==7){
						btnarr[i].className="";
						btnarr[0].className="btn-dian";
						showimg.src="img/index/show0.jpg";
						// i=4;
						}
					else{
						btnarr[i].className="";
						btnarr[i+1].className="btn-dian";
						var n=i+1;
						showimg.src="img/index/show"+n+".jpg";
						break;
						}
					}
				}
			}
	function toleft_con(){
		showimg.style.opacity="1";
		for (var i = 0; i <btnarr.length; i++) {
				if(btnarr[i].className=="btn-dian"){		
					if(i==0){
						btnarr[i].className="";
						btnarr[7].className="btn-dian";
						showimg.src="img/index/show7.jpg";
						break;
						}
					else{
						btnarr[i].className="";
						btnarr[i-1].className="btn-dian";
						var n=i-1;
						showimg.src="img/index/show"+n+".jpg";
						}
					}
				}
			}
	/*计时器*/
	var jishi=gbi("jishi");
	var shijian=gbt(jishi,"span");
	var h=11,m=59,s=59;
	outhour();
	outminute();
	outsecond();
	setInterval(outhour, 3600000);
	setInterval(outminute, 60000);
	setInterval(outsecond, 1000);
	function outhour(){
		if(m<0){
			shijian[0].innerHTML="已";
		}
		else{
			shijian[0].innerHTML=chuli(h);
			h--;
		}
	}
	function outminute(){
		if(m<0){
			shijian[1].innerHTML="结";
		}
		else{
			if(m<0){
			m=59;
			}
			shijian[1].innerHTML=chuli(m);
			m--;
		}	
	}
	function outsecond(){
		if(m<0){
			shijian[2].innerHTML="束";
		}
		else{
			if(s<0){
				s=59;
			}
			shijian[2].innerHTML=chuli(s);
			s--;
		}
	}
	function chuli(x){
				if(x<10){
					return "0"+x;
				}
				else{
					return x;
				}
			}
	/*吸顶条*/
	var search=gbi("search");
	
	window.onscroll=function (){
		var top=search.getBoundingClientRect().top;
		if(top<0){
			search.getBoundingClientRect().top=0;
		}
	}