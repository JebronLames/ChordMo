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
  var blue = "#70DBFF"
  var boxColor = lightgreen;
  var activeColor = green;
	var array = [0,1,2,3];
	var date = new Date().getTime();
	var flag = true;
	var a = 0;
	var b = 1;
  var timing = 1600;
  var intervalVar;
  var kickTiming = timing/2;
  var kickOption = 0;
  var kickInterval;
  var clapTiming = timing;
  var clapInterval;


	function run() {
    kickStep();
    kickInterval = setInterval(function() { kickStep() },kickTiming);
		/* $("#box" + 0).css({
			"background-color": lightgreen
		}); */

    flag = false;
    setTimeout(clapStep(), 400);
    clapInterval = setInterval(function() { clapStep() },clapTiming);
		intervalVar = setInterval(function(){ step() },timing);
    flag = false;
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
		$("#box" + a).animate({
			"background-color": green
		}, 50);

		$("#box" + b).animate({
			"background-color": lightgreen
		}, 50);


		a++;
		b++;
		if (b == 4) {b = 0};
		if (a == 4) {a = 0};
	};

  function kickStep(){
    $("#kick").animate({"background-color": blue}, 50);
    $("#kick").animate({"background-color": green}, 50);
  };

  function clapStep(){
    $("#clap").animate({"background-color": blue}, 50);
    $("#clap").animate({"background-color": green}, 50);
  };

  /* Clears row */
  function clearAll(){
    a = 0;
    b = 1;
    for (var i = 0; i < 4; i++) {
      $("#box" + i).css({
        "background-color": green
      });
    };
  }

  /* On play button */
	$("#play").click(function(){
    if (flag == true) { 
   	  run();
    } else {
      clearInterval(intervalVar);
      clearInterval(kickInterval);
      clearInterval(clapInterval);
      flag = true;
      clearAll();
    }
  });

  $(".square").click(function(){
   	alert("Click")
  });

  /* Perc row functions */
  $("#kick")
    .on("mouseenter", function(){
      /* Play Sound here! */
      $(this).css({
        "background-color": blue
    });
  })
    .on("mouseleave", function(){
      $(this).css({
        "background-color": green
      });
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