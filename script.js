/* Sample use of globals */
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

  var lightgreen = "#9BD7D5";
  var green = "#129793";
  var boxColor = lightgreen;
  var activeColor = green;
	var array = [0,1,2,3];
	var date = new Date().getTime();
	var flag = true;
	var a = 0;
	var b = 1;
  var timing = 1000;
  var intervalVar;

	function run() {
		$("#box" + 0).css({
			"background-color": "#9BD7D5"
		});
    flag = false;
		intervalVar = setInterval(function(){ step() },timing);

		/*
		var a = 0;
		$("#box" + a).css({
			"background-color": "red"
		});
		*/
		return 0;
	};

  /* Helper function for run().  Steps through boxes */
	function step(){
		$("#box" + a).css({
			"background-color": green
		});

		$("#box" + b).css({
			"background-color": lightgreen
		});


		a++;
		b++;
		if (b == 4) {b = 0};
		if (a == 4) {a = 0};
	};

  function clearAll(){
    for (var i = 0; i < 4; i++) {
      $("#box" + i).css({
        "background-color": green
      });
    };
  }

  /* On play button */
	$("#play").click(function(){
    if (flag == true) { 
		  a = 0;
		  b = 1;
   	  run();
    } else {
      clearInterval(intervalVar);
      flag = true;
      clearAll();
    }
  });

  $(".square").click(function(){
   	alert("Click")
  });

  /* first row functions */
  $(".square")
  	.on("mouseenter", function(){
  		$(this).css({
  			"background-color": lightgreen
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": green
  		});
  	});

    /* Second row functions */
   $(".square1")
  	.on("mouseenter", function(){
  		$(this).css({
  			"background-color": lightgreen
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": green
  		});
  	});




});