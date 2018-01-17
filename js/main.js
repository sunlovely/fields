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
		"login" : "login"
	}
})
//执行代码
require(["jquery","cookie","public","top","ajax","banner","delicious","register","login"],function($,cookie,public,top,ajax,banner,delicious,register,login){
	//代码
	$(function(){
//		index
		top.menu("top_con");
		top.second("li1","nlist");
		top.second("li2","downapp");
		top.second("li3","concat");
		top.second("li4","language");
		top.menu("key");
		top.nav("kind");
		top.list("second");
		banner.banner();
		top.recom("recommend_con");
		top.btn("banner_btn");
		top.kindsecond("kind_second");
		delicious.delicious();
		
//		register
		top.register("lis3","nlist");
		top.register("lis4","downapp");
		top.register("lis5","concat");
		top.jump("jump_right");
		top.jump("check");
		top.jump("lo_check");
		register.register();
//		login
		login.login();
	})
})
