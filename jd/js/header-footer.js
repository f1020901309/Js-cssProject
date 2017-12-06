	function gbi(id){
		return document.getElementById(id);
	}
	function gbc(classname){
		return document.getElementsByClassName(classname);
	}
	function gbt(item,tagname){
		return item.getElementsByTagName(tagname);
	}

	/*定位*/
	var dingwei=gbi("dingwei-con");
	var dingwei_city=gbi("ding-city")
	var dingwei_a=gbt(dingwei,"a");
	var dingwei_li=gbt(dingwei,"li");
	for (var i = 0; i < dingwei_a.length; i++) {
		dingwei_li[i].index=i;
		dingwei_li[i].onclick=function(){
			for (var j = 0; j < dingwei_li.length; j++) {
				dingwei_li[j].className="";
			}
			this.className="dingwei-checked";
			dingwei_city.innerHTML=dingwei_a[this.index].innerHTML;
		}
	}

	/*右侧导航*/
	var zuji_btn=gbi("zuji-btn");
	var zuji_close=gbi("rightnav-close");
	var zuji_main=gbi("zuji-main");
	zuji_btn.onclick=function(){
		zuji_main.style.right="265px";
	}
	zuji_close.onclick=function(){
		zuji_main.style.right="0px";
	}