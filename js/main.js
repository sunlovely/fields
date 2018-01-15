//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"public" : "public",
		"top" : "top",
		"ajax" : "ajax",
		"banner" : "banner",
		"delicious" : "delicious"
	}
})
//执行代码
require(["jquery","cookie","public","top","ajax","banner","delicious"],function($,cookie,public,top,ajax,banner,delicious){
	//代码
	$(function(){
		top.menu("top_con");
		top.second("li1","nlist");
		top.second("li2","downapp");
		top.second("li3","concat");
//		top.second("li4","language");
		top.menu("key");
		top.nav("kind");
		top.list("second");
		banner.banner();
		top.recom("recommend_con");
		top.btn("banner_btn");
		delicious.delicious();
	})
})
