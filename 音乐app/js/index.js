$(function(){
    $.ajax({
      url:"music.json",
      dataType:"json",
      success:function(date){
        console.log(date);
        console.log(date.length);
		$("#ss").click(function(){
			var $inp=$("#inp").val();
			$(".nei>p").remove()
			for (let i=0;i<date.length;i++) {
				if($inp==""){
					break;
				}else{
					if(date[i].name.indexOf($inp)!=-1){
						$("<p>"+date[i].name+date[i].sing+"</p>").appendTo($(".nei"));
					}else if(date[i].sing.indexOf($inp)!=-1){
						$("<p>"+date[i].name+date[i].sing+"</p>").appendTo($(".nei"));
					}
				}
			}
			$(".nei>p").click(function(){
				$("audio").remove();
				for (let a=0;a<date.length;a++) {
					if($(this).html().indexOf(date[a].sing)!=-1){
						$("<audio controls></audio>").appendTo($(".msu"));
						$("audio").attr("type","audio/mpeg")
						$("audio").attr("src",date[a].src)
						$("<p>"+date[a].sing+date[a].name+"</p>").appendTo(".msu")
					}
				}
			})
		})
      },
      error:function(err){
		console.log(err)
      }
    });
})