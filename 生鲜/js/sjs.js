Zepto(function(){
	$(".gwc").click(function(){
		$(this).hide();
		$(this).siblings().show();
		$(".dibu>ul>li>span").show();
		$(".dibu>ul>li").eq(2).html("去结算");
		$(".dibu>ul>li").eq(2).css("background","#2DD7A8");
		fun1();
		fun2();
	});
	$(".dian>li").eq(0).click(function(){
		var $num=$(".dian>li").eq(1).html();
		$num=Number($num)-1
		$(".dian>li").eq(1).html($num);
		fun1();
		fun2();
	})
	$(".dian>li").eq(2).click(function(){
		var $num=$(".dian>li").eq(1).html();
		$num=Number($num)+1
		$(".dian>li").eq(1).html($num);
		fun1();
		fun2();
	})
	$(".dian1>li").eq(0).click(function(){
		var $num=$(".dian1>li").eq(1).html();
		$num=Number($num)-1
		$(".dian1>li").eq(1).html($num);
		fun1();
		fun2();
	})
	$(".dian1>li").eq(2).click(function(){
		var $num=$(".dian1>li").eq(1).html();
		$num=Number($num)+1
		$(".dian1>li").eq(1).html($num);
		fun1();
		fun2();
	})
	function fun1(){
		var $s1=$(".dian>li").eq(1).html();
		var $s2=$(".dian1>li").eq(1).html();
		$(".dibu>ul>li>span").html(Number($s1)+Number($s2));
	}
	function fun2(){
		var $a1=$(".dian>li").eq(1).html();
		var $a2=$(".dian1>li").eq(1).html();
		var $zongjia=Number($a1)*39+Number($a2)*29;
		$(".zj").html("￥"+$zongjia+".00");
	}
	$(".t").click(function(){
		if($(".y").hasClass("c")){
			$(".y").removeClass("c")
		}else{
			$(".y").addClass("c")
		}
		var $m=$(".dian>li").eq(1).html()
		// alert($m)
		$(".d3>li").eq(1).html($m);
		$(".d4>li").eq(1).html($(".dian1>li").eq(1).html());
	});
	$(".d3>li").eq(0).click(function(){
		// alert("1")
		var $s=$(".d3>li").eq(1).html();
		var $ss=Number($s)-1;
		$s=$(".d3>li").eq(1).html($ss);
		fun6();
		fun7();
	})
	$(".d3>li").eq(2).click(function(){
		// alert("1")
		var $s=$(".d3>li").eq(1).html();
		var $ss=Number($s)+1;
		$s=$(".d3>li").eq(1).html($ss);
		fun6();
		fun7();
	})
	$(".d4>li").eq(0).click(function(){
		// alert("1")
		var $s=$(".d4>li").eq(1).html();
		var $ss=Number($s)-1;
		$s=$(".d4>li").eq(1).html($ss);
		fun6();
		fun7();
	})
	$(".d4>li").eq(2).click(function(){
		// alert("1")
		var $s=$(".d4>li").eq(1).html();
		var $ss=Number($s)+1;
		$s=$(".d4>li").eq(1).html($ss);
		fun6();
		fun7();
	})
	$(".one").click(function(){
		$(".y>div").eq(0).css("display","block")
	})
	$(".two").click(function(){
		$(".y>div").eq(1).css("display","block")
	})
	function fun6(){
		var $a1=$(".d4>li").eq(1).html();
		var $a2=$(".d3>li").eq(1).html();
		var $a3=Number($a1)*29+Number($a2)*39;
		$(".zj").html("￥"+$a3+".00")
	}
	function fun7(){
		var $a1=$(".d4>li").eq(1).html();
		var $a2=$(".d3>li").eq(1).html();
		var $a3=Number($a1)+Number($a2);
		$(".zs").html($a3)
	}
})