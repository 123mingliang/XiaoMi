$(function(){
	var $uname = $('#uname');
	var $upwd = $('#upwd');
	var $btn = $('#btn');
	
	var num = 0;
	//用户名框
	$uname.blur(function(){
		var str = $uname.val();
		var re = /^[0-9A-Za-z]{3,6}$/;		
		if(re.test(str)){
			num ++;
		}
	});
	
	//密码框
	$upwd.blur(function(){
		var str = $upwd.val();
		var re = /^[0-9A-Za-z]{6,12}$/;
		if(re.test(str)){
			num ++;
		}
	});
	
	//提交按钮
	$btn.click(function(){
		//alert(num)
		if(num ===2){
			
			var uname = $uname.val();
			var upwd = $upwd.val();
			//获取cookie
			let cookieStr = $.cookie('user') ? $.cookie('user') : '';
			let cookieObj = cookieStrToCookieObj(cookieStr);
			if(uname in cookieObj){
				alert("用户名已存在！");
			}else{
				// $uname.val() : $upwd.val()
				cookieObj[uname] = upwd;
				//加入cookie
				$.cookie('user',JSON.stringify(cookieObj),{expires : 7,path : '/'});
				console.log(num);
				alert('注册成功！');
				location.href = 'logo.html';
			}
		}else{
			alert('请将注册信息填写完整！');
			// console.log(num);
		}
	});
	
	
	
	function cookieStrToCookieObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
})