
		var aa=document.getElementsByClassName("aa");
		for(i=0;i<aa.length;i++){
			aa[i].onmouseover=function(){

				this.className="active aa";
			}
			aa[i].onmouseout=function(){
				this.className="aa";
			}
		}
		/*捐献框*/
		var jzx=document.getElementById("jzbox");
		var jzk=document.getElementById("jzkuang");
		var jza=document.getElementById("jz");
		jza.onmouseover=function(){
			jzx.className="jzbact";
			jzk.className="jzkact";
		}
		jza.onmouseout=function(){
			jzx.className="";
			jzk.className="";
		}

		/* 头像旋转*/
		var comment=document.getElementsByClassName("comment")[0];
		var comli=comment.getElementsByTagName("li");
		for(i=0;i<comli.length;i++){
			comli[i].onmouseover=function(){
				this.className="comact talk";
			}
			comli[i].onmouseout=function(){
				this.className="talk";
			}
		}

		/*导航栏*/
		var nav=document.getElementsByClassName("nav-item");
		for (var i = 0; i < nav.length; i++) {
			nav[i].onmouseover=function(){
				this.className="nav-item active";
			}
			nav[i].onmouseout=function(){
				this.className="nav-item";
			}
		}

		/*展示*/
		var showb=document.getElementsByClassName("show-xuan");
		var showImg=document.getElementById("show-img");
		var showl=document.getElementById("btnl");
		var showr=document.getElementById("btnr");
		var show=document.getElementsByClassName("show")[0];
		for (var i = 0; i < showb.length; i++) {
			showb[i].index=i+1;
			var n=i+1;
			showb[i].onclick=function(){
			for (var i = 0; i < showb.length; i++) {
				showb[i].id="";
			}
			this.id="show-dian";
			showImg.src="images/banner"+this.index+".png";
			}
			showb[i].onmouseover=function(){
			this.className="show-xuan show-hov";
			}
			showb[i].onmouseout=function(){
			this.className="show-xuan";
			}
		}
		var toplay=setInterval(toright, 2000);
		show.onmouseout=function(){
			toplay=setInterval(toright, 2000);
		}
		show.onmousemove=function(){
			clearInterval(toplay);
		}

		showl.onclick=function(){
			toleft()
			}
		showr.onclick=function(){
			toright()
			}
		function toleft(){
			for (var i = 0; i <showb.length; i++) {
				if(showb[i].id=="show-dian"){		
					if(i==0){
						showb[i].id="";
						showb[4].id="show-dian";
						showImg.src="images/banner5.png";
						break;
						// i=4;
						}
					else{
						showb[i].id="";
						showb[i-1].id="show-dian";
						showImg.src="images/banner"+i+".png";
						}
					}
				}
			}
		function toright(){
			for (var i = 0; i <showb.length; i++) {
				if(showb[i].id=="show-dian"){		
					if(i==4){
						showb[i].id="";
						showb[0].id="show-dian";
						showImg.src="images/banner1.png";
						// i=4;
						}
					else{
						showb[i].id="";
						showb[i+1].id="show-dian";
						var n=i+2;
						showImg.src="images/banner"+n+".png";
						break;
						}
					}
				}
			}
			/*工具-左边*/
			var ga=document.getElementsByClassName("gongjua");
			for (var i = 0; i < ga.length; i++) {
				ga[i].onmouseover=function(){
					this.className="gongjua ahov";
				}
				ga[i].onmouseout=function(){
					this.className="gongjua";
				}
			}

			/*工具-中间-上边*/
			var gjli=document.getElementsByClassName("gj-m-t-li");
			var bigli=document.getElementsByClassName("big");
			for (var i = 0; i < gjli.length; i++) {
				gjli[i].onmouseover=function(){
					this.id="rotateli";
				}
				gjli[i].onmouseout=function(){
					this.id="";
				}
			}
			for (var i = 0; i < bigli.length; i++) {
				bigli[i].onmouseover=function(){
					this.className="big bigact";
				}
				bigli[i].onmouseout=function(){
					this.className="big";
				}
			}

			/*工具-中间-下边*/
			var gjmb=document.getElementsByClassName("gj-m-b")[0];
			var gjmbimg=gjmb.getElementsByTagName("img");
			var gjmbli=gjmb.getElementsByTagName("li");
			for (var i = 0; i < gjmbimg.length; i++) {
				n=i+1;
				gjmbimg[i].src="images/gjy"+n+".png";
			}
			for (var i = 0; i < gjmbli.length; i++) {
				gjmbli[i].onmouseover=function(){
					this.className="lianyi";
				}
				gjmbli[i].onmouseout=function(){
					this.className="";
				}
			}

			/*工具-右边*/
			var gjrcon=document.getElementsByClassName("gongku-rcon")[0];
			var gjrp=gjrcon.getElementsByTagName("p");
			for (var i = 0; i < gjrp.length; i++) {
				gjrp[i].onmouseover=function(){
					this.className="gjr-act";
				}
				gjrp[i].onmouseout=function(){
					this.className="";
				}
			}
