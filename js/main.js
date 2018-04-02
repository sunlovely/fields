//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"top" : "top",
		"ajax" : "ajax",
		"banner" : "banner",
		"delicious" : "delicious",
		"register" : "register",
		"login" : "login",
		"list" : "list",
		"shop" : "shop"
	}
})
//执行代码
require(["jquery","cookie","public","top","ajax","banner","delicious","register","login","list","shop"],function($,cookie,public,top,ajax,banner,delicious,register,login,list,shop){
	//代码
	$(function(){
//		index
		top.menu("top_con");
		top.second("li1","nlist");
		top.second("li2","downapp");
		top.second("li3","concat");
		top.second("li4","language");
		top.menu("key");
		top.menu("fruit_left");
		top.nav("kind");
		top.list("second");
		banner.banner();
		top.recom("recommend_con");
		top.btn("banner_btn");
		top.kindsecond("kind_second");
		top.fruit("fruit_num");
		delicious.delicious();
		
//		register
		top.register("lis3","nlist");
		top.register("lis4","downapp");
		top.register("lis5","concat");
		top.jump("jump_right");
		top.jump("check");
		top.jump("lo_check");
		top.jump("fruit_top");
		register.register();
//		login
		login.login();
		
//		list
		list.fruit();
		list.like();
//		shop
		shop.product();
	})
})
