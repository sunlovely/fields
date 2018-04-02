define(function(){
	function product(){
		var str = ""
		$.ajax("json/shop/product.json")
		.then(function(res){
			for(var i = 0;i<4;i++){
				str += `<div class="my_product">
						<a class="pro_img" href="">
							<img src=${res[i].img} />
						</a>
						<h3><a href="">${res[i].title}</a></h3>
						<div class="pro_des">
							<p class="pro_weight">${res[i].weight}</p>
							<p class="pro_price">${res[i].price}<del>${res[i].del}<del></p>
							<i class="pro_car"></i>
						</div>
					</div>`
			}
			$(".add_price .change_buy").html(str)
		})
		
		var str1 = ""
		$.ajax("json/shop/product.json")
		.then(function(res){
			for(var i = 4;i<8;i++){
				str1 += `<div class="my_product">
						<a class="pro_img" href="">
							<img src=${res[i].img} />
						</a>
						<h3><a href="">${res[i].title}</a></h3>
						<div class="pro_des">
							<p class="pro_weight">${res[i].weight}</p>
							<p class="pro_price">${res[i].price}</p>
							<i class="pro_car"></i>
						</div>
					</div>`
			}
			$(".add_price .free_buy").html(str1)
		})
		var str2 = ""
		$.ajax("json/shop/product.json")
		.then(function(res){
			for(var i = 8;i<12;i++){
				str2 += `<div class="my_product">
						<a class="pro_img" href="">
							<img src=${res[i].img} />
						</a>
						<h3><a href="">${res[i].title}</a></h3>
						<div class="pro_des">
							<p class="pro_weight">${res[i].weight}</p>
							<p class="pro_price">${res[i].price}</p>
							<i class="pro_car"></i>
						</div>
					</div>`
			}
			$(".add_price .free_song").html(str2)
		})
		var str3 = ""
		$.ajax("json/shop/product.json")
		.then(function(res){
			for(var i = 12;i<16;i++){
				str3 += `<div class="my_product">
						<p class="item_icon">
							<img src=${res[i].icon} />
						</p>
						<a class="pro_img" href="">
							<img src=${res[i].img} />
						</a>
						<h3><a href="">${res[i].title}</a></h3>
						<div class="pro_des">
							<p class="pro_weight">${res[i].weight}</p>
							<p class="pro_price">${res[i].price}</p>
							<i class="pro_car"></i>
						</div>
					</div>`
			}
			$(".shop_like .pro_like").html(str3)
		})
	}
	return {
		product : product
	}
})
