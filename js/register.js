define(function(){
	function register(){
		//刷新图形验证码
//		function myReload(){
//     		var str = $("picimg").attr("src");
//     		$("picimg").attr("src",str+"&"+new Date().getTime());
// 		};
   		function myReload(){
   			var arr = [];
   			for(var i=0; i<5; i++){
   				var code = getRand(0,9);
   				arr.push(code);
   			}
   			return arr.join("");
   		}
// 		正确为true，错误为false
		var isTrue = [false,false,false,false,false];
		/*判断用户名*/
   		$(".re_phone").blur(function(){
   			var res = /^1[3|5|7|8]\d{9}$/;
   			if($(this).val() == ""){
   				$(".error").css({"display":"block"}).html("手机号必填");
   				$(this).css({"border" : "1px solid #dd3c3c"});
   				isTrue[0] = false;
   			}else{
   				if(res.test($(this).val())){
   					$(this).css({"border" : "1px solid green"});
   					$(".error").css({"display":"none"});
   					isTrue[0] = true;
   				}else{
   					$(".error").css({"display":"block"}).html("手机号格式错误!");
   					$(this).css({"border" : "1px solid #dd3c3c"});
   					isTrue[0]=false;
   				}
   			}
   			cookie($(".re_phone"));
   		})
// 		图形验证码
		$(".pcode").html(myReload());
//		点击改变验证码
		$(".pcode").click(function(){
			$(".pcode").html(myReload());
		})
   		$(".pic_code").blur(function(){
   			if($(this).val() == ""){
   				$(".error").css({"display":"block"}).html("图形验证码必填!");
   				$(this).css({"border" : "1px solid #dd3c3c"});
   				isTrue[1] = false;
   			}else{
   				if($(this).val() == $(".pcode").html()){
   					$(this).css({"border" : "1px solid green"});
   					$(".error").css({"display":"none"});
   					isTrue[1] = true;
   				}else{
   					$(".error").css({"display":"block"}).html("与图形验证码不一致!");
   					$(this).css({"border" : "1px solid #dd3c3c"});
   					isTrue[1]=false;
   				}
   			}
   		})
// 		短信验证码
   		$(".meg_code").blur(function(){
   			
   			if($(this).val() == ""){
   				$(".error").css({"display":"block"}).html("短信验证码必填!");
   				$(this).css({"border" : "1px solid #dd3c3c"});
   				isTrue[2] = false;
   			}else{
   				if($(this).val().length == 5){
   					$(this).css({"border" : "1px solid green"});
   					$(".error").css({"display":"none"});
   					isTrue[2] = true;
   				}else{
					$(".error").css({"display":"block"}).html("短信验证码不正确！");
   					$(this).css({"border" : "1px solid #dd3c3c"});
   					isTrue[2]=false;
   				}
   			}
   		})
// 		密码是否符合正则
   		$(".re_key").blur(function(){
   			var res = /^\w{6,20}$/;
   			if($(this).val() == ""){
   				$(".error").css({"display":"block"}).html("新密码必填!");
   				$(this).css({"border" : "1px solid #dd3c3c"});
   				isTrue[3] = false;
   			}else{
   				if(res.test($(this).val())){
   					$(this).css({"border" : "1px solid green"});
   					$(".error").css({"display":"none"});
   					isTrue[3] = true;
   				}else{
					$(".error").css({"display":"block"}).html("密码格式不正确！");
   					$(this).css({"border" : "1px solid #dd3c3c"});
   					isTrue[3]=false;
   				}
   			}
   		})
// 		判断两次密码输入是否一致
		$(".te_key").blur(function(){
   			if($(this).val() == ""){
   				$(".error").css({"display":"block"}).html("确认密码必填!");
   				$(this).css({"border" : "1px solid #dd3c3c"});
   				isTrue[4] = false;
   			}else{
   				if($(this).val() == $(".re_key").val()){
   					$(this).css({"border" : "1px solid green"});
   					$(".error").css({"display":"none"});
   					isTrue[4] = true;
   				}else{
					$(".error").css({"display":"block"}).html("两次输入密码不一致！");
   					$(this).css({"border" : "1px solid #dd3c3c"});
   					isTrue[4]=false;
   				}
   			}
   		})
		
//		cookie id
		let id = new Date().getTime();
//		cookie保存时间
		var date = new Date();
		date.setDate(date.getDate() + 7);
//		注册
		$(".regi").click(function(){
			if($(".check_box").is(':checked') == true){
				if(isTrue.indexOf(false) != -1){
					$(".error").css({"display":"block"}).html("输入的信息有误!");
				}else{
					location.href = "index.html";
	//				创建cookie
					var userName = $(".re_phone").val();
					var userPassword = $(".re_key").val();
					var cookieValue = "{id:" + id +',name:"' + userName + '",password:"' + userPassword + '"}';
					var cookieKey = "user_" + id;
					document.cookie = cookieKey + "=" + cookieValue + ";expires=" + date + ";path=/";
				}
			}else{
				$(".error").css({"display":"block"}).html("请同意我们的条款!");
			}
			
		})
		function cookie(obj){
			var arr = document.cookie.split("; ");
			for(var i=0; i<arr.length; i++){
				var val = arr[i].split("=");
				if(val[0].indexOf('user_') == 0){
					var user = eval('(' + val[1] + ')');
					var $userId = user.name;
					var $userPass = user.password;
				}
				if($userId == obj.val()){
					$(".error").css({"display":"block"}).html("用户名已存在!");
					$(this).css({"border" : "1px solid #dd3c3c"});
					isTrue[0] = false;
				}
			}
		}
	}
	return {
		register : register
	}
})
