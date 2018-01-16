define(function(){
	function login(){
		var isTrue = [false,false];
		$(".logi").click(function(){
			if($(".lo_phone").val() == "" || $(".lo_key").val() == "" ){
				$(".lo_error").css({"display":"block"}).html("警告: 用户名或密码不可为空");
			}else{
				$(".lo_error").css({"display":"none"});
				cookie();
			}
			if(isTrue.indexOf(false) != -1){
				$(".lo_error").css({"display":"block"}).html("密码必须在6到20字符之间！");
			}else{
				$(".lo_error").css({"display":"none"});
				location.href = "index.html";
			}
		})

		function cookie(){
		var arr = document.cookie.split('; ');
		for(var i = 0;i<arr.length;i++){
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0){
				var user = eval('('+val[1]+')');
				var $userId = user.name;
				var $userPass = user.password;
			}
			if($userId == $(".lo_phone").val()){
				isTrue[0] = true
				if($userPass ==$(".lo_key").val()){
					isTrue[1] = true
					
				}else{
					isTrue[1] = false
				}
			}else{
				isTrue[0] = false
			}
		}
	}
	}
	return {
		login : login
	}
})
