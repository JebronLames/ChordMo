var globals = (function(){
   var pm = {};
   pm.colSelected = 0;
   pm.clockTimer = null;
   pm.interval = 250;
   pm.numColumns = 16;
   pm.volume = 60;
   return pm;
})();


$(document).ready(function(){

	var array = [0,1,2,3];
	var date = new Date().getTime();
	var flag = true;
	var a = 0;
	var b = 1;

	function run() {
		$("#box" + 0).css({
			"background-color": "#9BD7D5"
		});
		var time = setInterval(function(){ step() },800);

		/*
		var a = 0;
		$("#box" + a).css({
			"background-color": "red"
		});
		*/

		// Stop step machine
		$("#play").click(function(){
   	clearInterval(time);
   	flag = false;
   	
  });
		return 0;
		
	};

	function step(){
		$("#box" + a).css({
			"background-color": "#129793"
		});

		$("#box" + b).css({
			"background-color": "#9BD7D5"
		});


		a++;
		b++;
		if (b == 4) {b = 0};
		if (a == 4) {a = 0};
	};




	$("#play").click(function(){
		a = 0;
		b = 1;
   	run();
  });

  $(".square").click(function(){
   	alert("Click")
  });

  $(".square")
  	.on("mouseenter", function(){
  		$(this).css({
  			"background-color": "#9BD7D5"
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": "#129793"
  		});
  	});

   $(".square1")
  	.on("mouseenter", function(){
  		$(this).css({
  			"background-color": "#9BD7D5"
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": "#129793"
  		});
  	});




});