Zepto(function(){
	$(".all").click(function(){
		if($(this).hasClass("a")){
			$(this).removeClass("a");
			$(".n").removeClass("a");
		}else{
			$(this).addClass("a");
			$(".n").addClass("a");
		}
	})
	$(".n").eq(3).click(function(){
		if ($(this).hasClass("a")) {
			$(this).removeClass("a");
		} else{
			$(this).addClass("a");
		}
	});
	$(".n").eq(2).click(function(){
		if ($(this).hasClass("a")) {
			$(this).removeClass("a");
		} else{
			$(this).addClass("a");
		}
	});
	$(".n").eq(1).click(function(){
		if ($(this).hasClass("a")) {
			$(this).removeClass("a");
		} else{
			$(this).addClass("a");
		}
	});
	$(".n").eq(0).click(function(){
		if ($(this).hasClass("a")) {
			$(this).removeClass("a");
			$(".n").eq(1).removeClass("a");
			$(".n").eq(2).removeClass("a");
		} else{
			$(this).addClass("a");
			$(".n").eq(1).addClass("a");
			$(".n").eq(2).addClass("a");
		}
	});
	// 数量加减
	$(".dian2>li").eq(0).click(function(){
		var $num=$(".dian2>li").eq(1).html();
		if ($num<1) {
			$num=1;
			$(".dian2>li").eq(1).html($num-1);
		jies();
		}else{
			$(".dian2>li").eq(1).html($num-1);
		jies();
		}
	})
	$(".dian2>li").eq(2).click(function(){
		var $num=$(".dian2>li").eq(1).html();
		var $s=Number($num)
		$(".dian2>li").eq(1).html($s+1);
		jies();
	})
	$(".dian1>li").eq(0).click(function(){
		var $num=$(".dian1>li").eq(1).html();
		if ($num<1) {
			$num=1;
			$(".dian1>li").eq(1).html($num-1);
		jies();
		}else{
			$(".dian1>li").eq(1).html($num-1);
		jies();
		}
	})
	$(".dian1>li").eq(2).click(function(){
		var $num=$(".dian1>li").eq(1).html();
		var $s=Number($num)
		$(".dian1>li").eq(1).html($s+1);
		jies();
	})
	$(".dian3>li").eq(0).click(function(){
		var $num=$(".dian3>li").eq(1).html();
		if($num<1){
			$num=1;
			$(".dian3>li").eq(1).html($num-1);
		jies();
		}else{
			$(".dian3>li").eq(1).html($num-1);
		jies();
		}
		
	})
	$(".dian3>li").eq(2).click(function(){
		var $num=$(".dian3>li").eq(1).html();
		var $s=Number($num)
		$(".dian3>li").eq(1).html($s+1);
		jies();
	})
function jies(){
	var $one=Number($(".dian1>li").eq(1).html());
	var $two=Number($(".dian2>li").eq(1).html());
	var $three=Number($(".dian3>li").eq(1).html());
	var zongjia=$one*15.9+$two*8.9+$three*13.9;
	$("#mon").html(zongjia.toFixed(1));
	var zs=$one+$two+$three
	$("#zs").html(zs);
}
//编辑
$("#bj").click(function(){
	$("<p>删除</p>").appendTo($(".shang "));
	$(".shang>p").click(function(){
		$(this).parent().remove();
		$(".er").hide();
		$(".y").hide();
	})
})
})