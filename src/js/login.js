$(function(){
	
	//登录验证
	var $uname = $('#uname');
	var $upwd = $('#upwd');
	var $btn = $('#btn');
	
	var num = 0;
	//用户名
	$uname.blur(function(){
		var str = $uname.val();
		if(str){
			$(this).parent().next().html('');
			num ++;
		}else{
			$(this).parent().next().html('请输入用户名！');
		}
	});
	
	//密码
	$upwd.blur(function(){
		var str = $upwd.val();
		if(str){
			$(this).parent().next().html('');
			num ++;
		}else{
			$(this).parent().next().html('请输入密码!');
		}
	});
		
	$btn.click(function(){
		if(num == 2){
			//获取cookie
			let cookieStr = $.cookie('user');
			let cookieObj = cookieStrToCookieObj(cookieStr);
			var uname = $uname.val();
			var upwd = $upwd.val();
			if(uname in cookieObj){
				if(cookieObj[uname] == upwd){
					alert('登录成功！');
					location.href = 'index.html';
				}else{
					alert('密码错误！');
				}
			}else{
				alert('用户名不存在！');
			}
		}else{
			alert('请输入完整的信息！');
		}
		// console.log(num);
	});
		
	function cookieStrToCookieObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
})