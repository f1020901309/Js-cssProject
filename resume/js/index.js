 var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    loop: true,
		    pagination : '.swiper-pagination',
			paginationType : 'progress',
			effect : 'cube',
			cube: {
			  slideShadows: true,
			  shadow: true,
			  shadowOffset: 100,
			  shadowScale: 0.6
			},
			// effect : 'coverflow',
			// slidesPerView: 1,
			// centeredSlides: true,
			// coverflow: {
	  //           rotate:30,
	  //           stretch: 10,
	  //           depth: 80,
	  //           modifier: 2,
	  //           slideShadows : true
   //      	},
		    onSlideChangeEnd:function(swiper){
		    	var slidearr=swiper.slides;
		    	var oindex=swiper.activeIndex;
		    	var len=slidearr.length;
		    	switch(oindex){
		    		case 0:
		    			pageid='page'+ (len-2);
		    			break;
		    		case (len-1):
		    			pageid='page'+1;
		    			break;
		    		default:
		    			pageid='page'+ oindex;
		    	}
		    	for (var i = 0; i < len; i++) {
		    		if(i==oindex){
		    			slidearr[i].id=pageid;
		    			}
		    		else{
		    			slidearr[i].id="";
		    			}
		    		}
		    	} 	
 })  
 var s=0;      
 var music=document.getElementById("music");
 var play=document.getElementById("play");
 music.onclick=function(){
 	if(s%2==0){
 		play.pause();
 		music.className="";
 		s++;
 	}
 	else{
 		play.play();
 		music.className="music";
 		s++;
 	}
 }