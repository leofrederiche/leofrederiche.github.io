$(document).ready(function(){

	var visible = true;
	$("button").click(function(){
		if(visible == true){
			$(".clock").css("display", "none");
			visible = false;
		}
		else{
			$(".clock").css("display", "block");
			visible = true;
		}
	})

	setInterval(function(){
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		var degH = 90 + (hours * 15);
		$(".hours").css("transform", "rotate(" + degH + "deg)" );

		var degM = 270 + (minutes * 6);
		$(".minutes").css("transform", "rotate(" + degM + "deg)");

		var degS = 270 + (seconds * 6);
		$(".seconds").css("transform", "rotate(" + degS + "deg)");

	}, 1000);
});