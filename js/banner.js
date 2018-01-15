define(function(){
	function banner(){
		/*页面轮播图*/
		$.getJSON("json/index/banner.json",function(data){
			$.each(data, function(index,value) {
				$(".banner_img").append(`<li style="z-index:${value.index}"><a href='#'><img src=${value.img}/></a></li>`)
			}); 
			var nowIndex = 0;
			var timer = null;
			var btntimer = null;
			var $imgli =  $(".banner_img").find("li");
			var $bottomli = $(".banner_bottom").find("li");
			init();
			autoPlay();
			$(".btn_left").mouseover(function(){
				nowIndex --;
				if(nowIndex < 0){
					nowIndex = $imgli.length - 1;
				}
				init();
			});
			$(".btn_right").click(function(){
				nowIndex ++;
				if(nowIndex > $imgli.length - 1){
					nowIndex = 0;
				}
				init();
			});
			//小圆点移入移出事件
			$bottomli.find("a").mouseover(function(){
				nowIndex = $(this).parent().index();
				init();
			});
			//图片轮播
			function init(){
				$imgli.eq(nowIndex).fadeIn(500).siblings().fadeOut(500);
				$bottomli.eq(nowIndex).find("a").css({
					"background" : "green"
				});
				$bottomli.eq(nowIndex).siblings().find("a").css({
					"background" : "#ccc"
				});
			}
			function autoPlay(){
				clearInterval(timer);
				timer = setInterval(function(){
					nowIndex ++;
					if(nowIndex > $imgli.length - 1){
						nowIndex = 0;
					}
					init();
				},3000)
			}
			$(".banner_con").mouseover(function(){
				clearInterval(timer);
			})
			$(".banner_con").mouseout(function(){
				autoPlay();
			})
		})
	}
	return {
		banner : banner
	}
})
