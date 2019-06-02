
	function countNum(e){
		var value=$(e).val();
		var cArr = value.match(/([\u0391-\uffe5])/ig); // 返回中文的字符
		var num=Math.floor((600-value.length-2*(cArr == null ? 0 : cArr.length))/3);
		$("#num").text(num);
		if(num>=0){
			$("#countNum").css({"color": "#cccccc"});
		}else{
			$("#countNum").css({"color": "red"});               
		}
	}
$('#file-btn').change(function(){
		$('#file-btn').text();
		alert('改变域啦')
		// $(this).css("background-color","#FFFFCC");
	  });
function postOpinion(){
	var opinionType;
	var opinionContent;
	var userName;
	var userTelOrEmail;
	
	
//	获取到反馈类型
	for(var i =0;i<3;i++){
		if(document.getElementsByName("lang")[i].checked==true){
			opinionType = document.getElementsByName("lang")[i].value
			break;
		}
	}
//	获取到意见内容
	opinionContent = $("#textarea-text").val();
	// 判断必填项是否填入
	if (opinionType == undefined && opinionContent == ""){
		alert('请填写反馈类型和内容！');
		return false;
	}
	else if(opinionType == undefined){
		alert('请填写反馈类型！');
		return false;
	}
	else if(opinionContent == ""){
		alert('请填写内容！');
		return false;
	}
	else if ($("#num").text() < 0){
		alert('内容超出200字！');
		return false;
	}
//	获取姓名
	userName = $("#userName").val()
//	获取联系方式
	userTelOrEmail = $("#userTelOrEmail").val()
	alert($('#filebox_file_id_1'));
//	上传意见到后台
	$.ajaxFileUpload({
		url:"addAdvice.action",
		secureuri: false,
		fileElementId: 'filebox_file_id_1',
		data:{
			label:opinionType,
			content:opinionContent,
			phone:userTelOrEmail,
		},
		dataType:'text/html',
		success: function (data) {
            if(data=="添加意见成功"){
            	alter("提交成功");
            }
        },
        error:function(data){
        	alter("提交失败");
        }
	});
}
