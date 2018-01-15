define(function(){
	function delicious(){
		$.getJSON("json/index/kind.json",function(data){
			$.each(data,function(index,value){
				$.each(value.delicious,function(index,value){
					$(".delicious_deli").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.xianshicuxiao,function(index,value){
					$(".delicious_xianshi").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.remaixinpin,function(index,value){
					$(".delicious_remai").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.shuiguo,function(index,value){
					$(".delicious_shuiguo").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.nianhuojie,function(index,value){
					$(".delicious_nianhuo").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.suxiang,function(index,value){
					$(".delicious_suxiang").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.nuk,function(index,value){
					$(".delicious_nuk").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
				$.each(value.yankejiu,function(index,value){
					$(".delicious_yankejiu").append(`
						<li class="deli">
							<p>
								<a class="deleft" href="">
									<img src=${value.img} alt="" />
								</a>
							</p>
							<h3>
								<a class="name" href=""><span>${value.name}</span></a>
							</h3>
							<p class="mesega">
								<span class="weight">${value.weight}</span>
								<span class="price">${value.price}</span>
								<a href=""><i class="iconbuy"></i></a>
							</p>
						</li>`);
				})
			})	
		})

//		$.getJSON("json/index/delicious.json",function(data){
//			$.each(data,function(index,value){
//				$(".delicious_deli").append(`
//					<li class="deli">
//						<p>
//							<a class="deleft" href="">
//								<img src=${value.img} alt="" />
//							</a>
//						</p>
//						<h3>
//							<a class="name" href=""><span>${value.name}</span></a>
//						</h3>
//						<p class="mesega">
//							<span class="weight">${value.weight}</span>
//							<span class="price">${value.price}</span>
//							<a href=""><i class="iconbuy"></i></a>
//						</p>
//					</li>`);
//			})	
//		})
//		
//	
		
		$(".delicious_right").on("mouseover",".name span",function(){
			$(this).css({
				"border-bottom" : "1px solid #353535"
			})
		}).on("mouseout",".name span",function(){
			$(this).css({
				"border-bottom" : 0
			})
		})
	}
	return{
		delicious : delicious
	}	
})
