define(function(){
	function fruit(){
		var str = "";
		$.ajax("json/list/fruit.json")
		.then(function(res){
			for(var i = 0;i<20;i++){
				str += `<div class="fruit_item">
							<p class="item_icon">
								<img src=${res[i].icon} />
							</p>
							<a class="item_img" href="">
								<img src=${res[i].img}/>
							</a>
							<h3>
								<a href="">${res[i].name}</a>
							</h3>
							<p class="item_tit">${res[i].title}</p>
							<div class="item_des">
								<p class="i_weight">${res[i].weight}</p>
								<span class="i_cuntry">${res[i].cuntry}</span>
								<p class="i_price">${res[i].price}</p>
							</div>
							<div class="fruit_big fruit_item">
								<p class="item_icon">
									<img src=${res[i].icon} />
								</p>
								<a class="item_img" href="">
									<img src=${res[i].img}/>
								</a>
								<h3>
									<a href="">${res[i].name}</a>
								</h3>
								<p class="item_tit">${res[i].title}</p>
								<div class="item_des">
									<p class="i_weight">${res[i].weight}</p>
									<span class="i_cuntry">${res[i].cuntry}</span>
									<p class="i_price">${res[i].price}</p>
									<i class="pro_car"></i>
								</div>
							</div>
						</div>` 
			}
			$(".fruit_right .list_con1").html(str)
		})
		$(".fruit_right .list_con1").on("hover",".fruit_big",function(){
			$(this).find(".fruit_big").css({"display":"block"})
		},function(){
			$(this).find(".fruit_big").css({"display":"none"})
		})
		/*第一页*/
//		var str = ""
//		$.ajax("json/list/fruit.json")
//		.then(function(res){
//			for(var i = 0;i<20;i++){
//				str += `<div class="fruit_item">
//							<p class="item_icon">
//								<img src=${res[i].icon} />
//							</p>
//							<a class="item_img" href="">
//								<img src=${res[i].img}/>
//							</a>
//							<h3>
//								<a href="">${res[i].name}</a>
//							</h3>
//							<p class="item_tit">${res[i].title}</p>
//							<div class="item_des">
//								<p class="i_weight">${res[i].weight}</p>
//								<span class="i_cuntry">${res[i].cuntry}</span>
//								<p class="i_price">${res[i].price}</p>
//							</div>
//						</div>`
//			}
//			$(".fruit_right .list_con1").html(str)
//		})
		
////		第二页
//		var str1 = ""
//		$.ajax("json/list/fruit.json")
//		.then(function(res){
//			for(var i = 20;i<40;i++){
//				str1 += `<div class="fruit_item">
//							<p class="item_icon">
//								<img src=${res[i].icon} />
//							</p>
//							<a class="item_img" href="">
//								<img src=${res[i].img}/>
//							</a>
//							<h3>
//								<a href="">${res[i].name}</a>
//							</h3>
//							<p class="item_tit">${res[i].title}</p>
//							<div class="item_des">
//								<p class="i_weight">${res[i].weight}</p>
//								<span class="i_cuntry">${res[i].cuntry}</span>
//								<p class="i_price">${res[i].price}</p>
//							</div>
//						</div>`
//			}
//			$(".fruit_right .list_con2").html(str1)
//		})
		$(".pages a").hover(function(){
			$(this).css({
				"background" : "#e2e6e4",
				"color" : "#fff"
			})
		},function(){
			$(this).css({
				"background" : "#fff",
				"color" : "#737373"
			})
		})
	}
	function like(){
		var str="";
		$.ajax("json/list/like.json")
		.then(function(res){
			for(var i = 0;i<2;i++){
				str += `<div class="like_food">
							<p class="food_icon">
								<img src=${res[i].icon}/>
							</p>
							<a class="food_img" href="">
								<img src=${res[i].img}/>
							</a>
							<h3>
								<a href="">${res[i].name}</a>
							</h3>
							<p class="food_tit">${res[i].title}</p>
							<div class="food_des">
								<p class="f_weight">${res[i].weight}</p>
								<span class="f_cuntry">${res[i].cuntry}</span>
								<p class="f_price">${res[i].price}</p>
							</div>
					</div>`
				
			}
//			$(".fruit_left .fruit_like").html(str)
		})
	}
	
	return {
		fruit : fruit,
		like : like,
	}
})
