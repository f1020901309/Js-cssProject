var Imain=document.getElementById("main");
var Ili=Imain.getElementsByTagName("li");
for (var i = 0; i < Ili.length; i++) {
	Ili[i].style.width=i*80+400+"px";
}