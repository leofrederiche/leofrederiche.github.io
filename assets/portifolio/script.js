$(document).ready(function(){

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;

	    $('html, body').stop().animate({
	    	'scrollTop': $(target).offset().top
	    }, 1000, 'swing', function () {
	    	window.location.hash = target;
	    });
	});

	var menu = true;
	$(".menu").click(function(){
		if(menu){
			menu = false;
			$("nav").removeClass("closed");
		}else{
			menu = true;
			$("nav").addClass("closed");
		}
	});

	$(".link-menu").click(function(){
		if(menu){
			menu = false;
			$("nav").removeClass("closed");
		}else{
			menu = true;
			$("nav").addClass("closed");
		}
	});

	var carousel = 1;
	$(".carousel-back").click(function(){
		if(carousel == 1){
			carousel = 3;
			$(".carousel-panel-1").removeClass("carousel-enabled");
			$(".carousel-panel-3").addClass("carousel-enabled");
		}
		else if(carousel == 2){
			carousel = 1;
			$(".carousel-panel-2").removeClass("carousel-enabled");
			$(".carousel-panel-1").addClass("carousel-enabled");	
		}
		else{
			carousel = 2;
			$(".carousel-panel-3").removeClass("carousel-enabled");
			$(".carousel-panel-2").addClass("carousel-enabled");	
		}
	})
	$(".carousel-next").click(function(){
		if(carousel == 1){
			carousel = 2;
			$(".carousel-panel-1").removeClass("carousel-enabled");
			$(".carousel-panel-2").addClass("carousel-enabled");
		}
		else if(carousel == 2){
			carousel = 3;
			$(".carousel-panel-2").removeClass("carousel-enabled");
			$(".carousel-panel-3").addClass("carousel-enabled");	
		}
		else{
			carousel = 1;
			$(".carousel-panel-3").removeClass("carousel-enabled");
			$(".carousel-panel-1").addClass("carousel-enabled");	
		}
	})

});