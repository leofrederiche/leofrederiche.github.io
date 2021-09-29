$('document').ready(function(){

	const confetti 	= "<div class='confetti'></div>";

	function RandomStyle(){
		return Math.floor((Math.random() * 6))
	}

	function RandomLeft(){
		var screenWidth	= $(window).width() - 20;
		return Math.floor((Math.random() * screenWidth));
	}

	function RandomAnimation(){
		return Math.floor((Math.random() * 3)) + 1
	}

	function GenerateConfetti(){
		$(confetti).appendTo('body').css({
			'left': RandomLeft(),
			'animation-name': 'ConfettiAnimation' + RandomAnimation()
		}).addClass(
			'style' + RandomStyle()
		);
	};

	$('.btnSuccess').click(function(){
		var count = 0;
		var limite = 100
		var interval = 25

		setInterval(function(){
			if (count < limite){
				GenerateConfetti();	
				count++;
			}

			console.log(count);
		}, interval);
	});

});