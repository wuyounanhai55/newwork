(function(){
			function changeRem(){
				var scale = 1 / devicePixelRatio;
				document.querySelector('meta[name="viewport"]').setAttribute('content',
				'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//				document.documentElement.style.fontSize 
				var width = document.documentElement.getBoundingClientRect().width;  
					if (width / devicePixelRatio > 540) {  
					    width = 540 * devicePixelRatio;
					}
					var rem = width / 10;
					document.documentElement.style.fontSize = rem + 'px';
				}
				changeRem()
				var timer;
				window.addEventListener("resize",function(){
					clearInterval(timer);
					timer = setInterval(changeRem,10);
				})
			})()
	var $ = require('com/jquery-2.2.0');
	var swiperAnimateCache = require('com/swiper.animate1.0.2.min').swiperAnimateCache;
	var swiperAnimate = require('com/swiper.animate1.0.2.min').swiperAnimate;
	require('com/swiper-3.3.1.jquery.min');
	require('com/swiper-3.3.1.min');
	var oContent = require('tpl/tpl');
	$("body").before(oContent)
	var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true,
	    		// 如果需要分页器
			    pagination: '.swiper-pagination',
			     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			 	 }, 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } 
			  })  
 $(".audio").click(function(){
	        //animationPlayState   
	        if($(".audio").css("animationPlayState") == "running"){
	            $(this).css('animationPlayState', 'paused');
	            $("#img").attr("src","img/audio2.png")
	            $("audio")[0].pause();
	        }else{
	            $(this).css('animationPlayState', 'running');
	            $("#img").attr("src","img/audio1.png")
	            $("audio")[0].play();
	        }
	    }) 
	    	$(".one_img8").hover(function(){
	    		$(this).css("opacity","0")
	    	},function(){
	    		$(this).css("opacity","1")
	    	})