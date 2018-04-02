define(function(){
//	鼠标划过效果
	function menu(classname){
		var $mObj = $("." + classname).find("a");
		$mObj.hover(function(){
			$(this).css({"color" : "#08994e"});
			$(this).find("span").css({"border-bottom" : "1px solid #08994e"});
		},function(){
			$(this).css({"color" : "#737373"});
			$(this).find("span").css({"border-bottom" : 0});
		});
	}
	function jump(classname){
		var $mObj = $("." + classname).find("a");
		$mObj.hover(function(){
			$(this).find("span").css({"border-bottom" : "1px solid #08994e"});
		},function(){
			$(this).find("span").css({"border-bottom" : 0});
		});
	}
	function kindsecond(classname){
		var $kObj = $("." + classname);
		$kObj.find(".first").mouseover(function(){
			$(".de_second").css({"display" : "block"});
		});
		$(".de_second").mouseleave(function(){
			$(".second").css({"display" : "none"});
		});
	}
//	二级菜单显示效果
	function second(classname,childname){
		var $sObj = $("." + classname);
		$sObj.mouseenter(function(){
			$(this).find("a").first().css({
				"background" : "white",
				"border" : "1px solid #ccc",
				"border-bottom" : "0"
			});
			$(this).find("." + childname).show();
		});
		$sObj.mouseleave(function(){
			$(this).find("a").first().css({
				"background" : "url(img/index/New_background20170221.jpg)",
    			"background-size" : "100% 100%",
    			"border" : "0"
			});
			$(this).find("." + childname).hide();
		});
	}
	
	function register(classname,childname){
		var $sObj = $("." + classname);
		$sObj.mouseenter(function(){
			$(this).find("a").first().css({
				"border" : "1px solid #ccc",
				"border-bottom" : "0"
			});
			$(this).find("." + childname).show();
		});
		$sObj.mouseleave(function(){
			$(this).find("a").first().css({
				"background" : "white",
    			"border" : "0"
			});
			$(this).find("." + childname).hide();
		});
	}
//	导航鼠标划过效果
	function nav(classname){
		var $mObj = $("." + classname).find("a");
		$mObj.hover(function(){
			$(this).css({
				"color" : "#08994e",
				"background" : "#bdbdbd"
			});
		},function(){
			$(this).css({
				"color" : "#464646",
				"background" : "white"
			});
		});
	}
//	类别鼠标划过效果
	function list(classname){
		var $mObj = $("." + classname).find(".astyle");
		$mObj.hover(function(){
			$(this).css({
				"color" : "#08994e",
				"padding-left" : "65px"
			});
			$(this).find("i").css({"right" : "23px"});
		},function(){
			$(this).css({
				"color" : "#312c29",
				"padding-left" : "70px"
			});
			$(this).find("i").css({"right" : "18px"});
		});
		$mObj.parent().mouseover(function(){
			$(this).find(".menu_con").css({
				"display" : "block"
			});
		}).mouseout(function(){
			$(this).find(".menu_con").css({
				"display" : "none"
			});
		});
		$mObj.parent().find(".menu_con").find("span").hover(function(){
			$(this).css({"color" : "#08994e"});
		},function(){
			$(this).css({"color" : "#312c29"});
		});
	}
	function recom(classname){
		var $obj = $("." + classname).find("a");
		$obj.eq(0).mouseenter(function(){
			$(this).find("img").attr("src","img/index/recomba1.jpg");
		}).mouseleave(function(){
			$(this).find("img").attr("src","img/index/recom1.jpg");
		})
		$obj.eq(1).mouseenter(function(){
			$(this).find("img").attr("src","img/index/recomba2.jpg");
		}).mouseleave(function(){
			$(this).find("img").attr("src","img/index/recom2.jpg");
		})
		$obj.last().mouseenter(function(){
			$(this).find("img").attr("src","img/index/recomba3.jpg");
		}).mouseleave(function(){
			$(this).find("img").attr("src","img/index/recom3.jpg");
		})
	}
	function btn(classname){
		var $bObj = $("." + classname).find("a");
		$bObj.hover(function(){
			$(this).css({"background" : "#a3a3a3"});
		},function(){
			$(this).css({"background" : "#ccc"});
		});
	}
	function fruit(classname){
		var $fObj = $("." + classname);
		$fObj.hover(function(){
			$(this).find(".f_page").css({"display" : "block"});
		},function(){
			$(this).find(".f_page").css({"display" : "none"});
		});
		$fObj.find(".f_page").find("li").hover(function(){
			$(this).css({"background" : "#fff"});
		},function(){
			$(this).css({"background" : "#e2e6e4"});
		});
	}
	return {
		menu : menu,
		second : second,
		nav : nav,
		list : list,
		recom : recom,
		btn : btn,
		register : register,
		jump : jump,
		kindsecond : kindsecond,
		fruit : fruit
	}
})
