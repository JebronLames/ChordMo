  /*
  var darkRed = "#9BD7D5";
  var green = "#129793";
  var orange = "#FF7D32"; */
  var blue = "#00B2EE";
  var gray = "#333333";
  var white = "#FFFFFF";
  var darkRed = "#97321F";
  var brightRed = "#FC5234";
  var orange = "#FF7D32";
  var yellow = "#FEC330";
  var mustardYellow = "#99741C"
  var brightOrange = "#FD8B33";
  var darkOrange = "#98531E";
  var date = new Date().getTime();
  var flag = true;
  var a = -1;
  var b = 0;
  var timing = 550;
  var timing2 = timing/2;
  var timing3 = timing * (3/4);
  

  var kickOption = 0;
  var clapOption = 0;
  var hihatOption = 1;
  var kick2Option = 1;

  var pianoOption = 1;
  var guitarOption = 1;
  var bassOption = 1;
  var counter = 1;
  var timeOutID;
  var hihatTimeOut;
  var kickTimeOut;
  var kick2TimeOut;
  var kick2TimeOut1;

    /* Loading multiple instances of the same file for layered playback */
  var kicki = 0;
  var kickAudio0 = document.createElement('audio');
  kickAudio0.setAttribute('src', 'kick.wav');
  var kickAudio1 = document.createElement('audio');
  kickAudio1.setAttribute('src', 'kick.wav');

  var kick2i = 0;
  var kick2Audio0 = document.createElement('audio');
  kick2Audio0.setAttribute('src', 'kick2.wav');
  var kick2Audio1 = document.createElement('audio');
  kick2Audio1.setAttribute('src', 'kick2.wav');

  var clapi = 0;
  var clapAudio0 = document.createElement('audio');
  clapAudio0.setAttribute('src', 'clap.wav');
  var clapAudio1 = document.createElement('audio');
  clapAudio1.setAttribute('src', 'clap.wav');

  var hihati = 0;
  var hihatAudio0 = document.createElement('audio');
  hihatAudio0.setAttribute('src', 'hihat.wav');
  var hihatAudio1 = document.createElement('audio');
  hihatAudio1.setAttribute('src', 'hihat.wav');

  /* Loading chords */
  var chordi = 0;
  var AmChord = document.createElement('audio');
  AmChord.setAttribute('src', 'Am.mp3');
  var AmChord2 = document.createElement('audio');
  AmChord2.setAttribute('src', 'Am.mp3');

  var BdimChord = document.createElement('audio');
  BdimChord.setAttribute('src', 'Bdim.mp3');
  var BdimChord2 = document.createElement('audio');
  BdimChord2.setAttribute('src', 'Bdim.mp3');
  var CChord = document.createElement('audio');
  CChord.setAttribute('src', 'C.mp3');
  var CChord2 = document.createElement('audio');
  CChord2.setAttribute('src', 'C.mp3');
  var DmChord = document.createElement('audio');
  DmChord.setAttribute('src', 'Dm.mp3');
  var DmChord2 = document.createElement('audio');
  DmChord2.setAttribute('src', 'Dm.mp3');
  var EmChord = document.createElement('audio');
  EmChord.setAttribute('src', 'Em.mp3');
  var EmChord2 = document.createElement('audio');
  EmChord2.setAttribute('src', 'Em.mp3');
  var FChord = document.createElement('audio');
  FChord.setAttribute('src', 'F.mp3');
  var FChord2 = document.createElement('audio');
  FChord2.setAttribute('src', 'F.mp3');
  var GChord = document.createElement('audio');
  GChord.setAttribute('src', 'G.mp3');
  var GChord2 = document.createElement('audio');
  GChord2.setAttribute('src', 'G.mp3');

  /* Loading notes */
  var Anote0 = document.createElement('audio');
  Anote0.setAttribute('src', 'Anote.mp3');
  var Anote1 = document.createElement('audio');
  Anote1.setAttribute('src', 'Anote.mp3');
  var Anote2 = document.createElement('audio');
  Anote2.setAttribute('src', 'Anote.mp3');
  var Anote3 = document.createElement('audio');
  Anote3.setAttribute('src', 'Anote.mp3');
  var Anote4 = document.createElement('audio');
  Anote4.setAttribute('src', 'Anote.mp3');



  var Bnote0 = document.createElement('audio');
  Bnote0.setAttribute('src', 'Bnote.mp3');
  var Bnote1 = document.createElement('audio');
  Bnote1.setAttribute('src', 'Bnote.mp3');
  var Bnote2 = document.createElement('audio');
  Bnote2.setAttribute('src', 'Bnote.mp3');
  var Bnote3 = document.createElement('audio');
  Bnote3.setAttribute('src', 'Bnote.mp3');
  var Bnote4 = document.createElement('audio');
  Bnote4.setAttribute('src', 'Bnote.mp3');


  var Cnote0 = document.createElement('audio');
  Cnote0.setAttribute('src', 'Cnote.mp3');
  var Cnote1 = document.createElement('audio');
  Cnote1.setAttribute('src', 'Cnote.mp3');
  var Cnote2 = document.createElement('audio');
  Cnote2.setAttribute('src', 'Cnote.mp3');
  var Cnote3 = document.createElement('audio');
  Cnote3.setAttribute('src', 'Cnote.mp3');
  var Cnote4 = document.createElement('audio');
  Cnote4.setAttribute('src', 'Cnote.mp3');

  var Dnote0 = document.createElement('audio');
  Dnote0.setAttribute('src', 'Dnote.mp3');
  var Dnote1 = document.createElement('audio');
  Dnote1.setAttribute('src', 'Dnote.mp3');
  var Dnote2 = document.createElement('audio');
  Dnote2.setAttribute('src', 'Dnote.mp3');
  var Dnote3 = document.createElement('audio');
  Dnote3.setAttribute('src', 'Dnote.mp3');
  var Dnote4 = document.createElement('audio');
  Dnote4.setAttribute('src', 'Dnote.mp3');




  var Enote0 = document.createElement('audio');
  Enote0.setAttribute('src', 'Enote.mp3');
  var Enote1 = document.createElement('audio');
  Enote1.setAttribute('src', 'Enote.mp3');
  var Enote2 = document.createElement('audio');
  Enote2.setAttribute('src', 'Enote.mp3');
  var Enote3 = document.createElement('audio');
  Enote3.setAttribute('src', 'Enote.mp3');
  var Enote4 = document.createElement('audio');
  Enote4.setAttribute('src', 'Enote.mp3');


  var Fnote0 = document.createElement('audio');
  Fnote0.setAttribute('src', 'Fnote.mp3');
  var Fnote1 = document.createElement('audio');
  Fnote1.setAttribute('src', 'Fnote.mp3');
  var Fnote2 = document.createElement('audio');
  Fnote2.setAttribute('src', 'Fnote.mp3');
  var Fnote3 = document.createElement('audio');
  Fnote3.setAttribute('src', 'Fnote.mp3');
  var Fnote4 = document.createElement('audio');
  Fnote4.setAttribute('src', 'Fnote.mp3');

  var Gnote0 = document.createElement('audio');
  Gnote0.setAttribute('src', 'Gnote.mp3');
  var Gnote1 = document.createElement('audio');
  Gnote1.setAttribute('src', 'Gnote.mp3');
  var Gnote2 = document.createElement('audio');
  Gnote2.setAttribute('src', 'Gnote.mp3');
  var Gnote3 = document.createElement('audio');
  Gnote3.setAttribute('src', 'Gnote.mp3');
  var Gnote4 = document.createElement('audio');
  Gnote4.setAttribute('src', 'Gnote.mp3');

  var A2note0 = document.createElement('audio');
  A2note0.setAttribute('src', 'A2note.mp3');
  var A2note1 = document.createElement('audio');
  A2note1.setAttribute('src', 'A2note.mp3');
  var A2note2 = document.createElement('audio');
  A2note2.setAttribute('src', 'A2note.mp3');
  var A2note3 = document.createElement('audio');
  A2note3.setAttribute('src', 'A2note.mp3');
  var A2note4 = document.createElement('audio');
  A2note4.setAttribute('src', 'A2note.mp3');

  var Anotei = 0, Bnotei = 0, Cnotei = 0, Dnotei = 0, Enotei = 0, Fnotei = 0, Gnotei = 0, A2notei = 0;

  /* Clears row */
  function clearAll(){
    a = -1;
    b = 0;
    for (var i = 0; i < 4; i++) {
      $("#box" + i).css({
        "background-color": brightOrange
      });
    };
  }

  function playChord(chord){
    switch(chord){
      case "Am":
        AmChord.play(); break;
      case "Bdim":
        BdimChord.play(); break;
      case "C":
        CChord.play(); break;
      case "Dm":
        DmChord.play(); break;
      case "Em":
        EmChord.play(); break;
      case "F":
        FChord.play(); break;
      case "G":
        GChord.play(); break;
      case "none":
        break; 
    }
  };

  /* Chords can overlap into each other */
  function playChord2(chord){
    switch(chord){
      case "Am":
        AmChord2.play(); break;
      case "Bdim":
        BdimChord2.play(); break;
      case "C":
        CChord2.play(); break;
      case "Dm":
        DmChord2.play(); break;
      case "Em":
        EmChord2.play(); break;
      case "F":
        FChord2.play(); break;
      case "G":
        GChord2.play(); break;
      case "none":
        break; 
    }
  };


  function kickStep(){
    
    if (kicki == 0)
      kickAudio0.play();
    else
      kickAudio1.play();

    if (kickOption == 1){
      $("#kick").animate({"background-color": mustardYellow}, 1);
      $("#kick").animate({"background-color": yellow}, 1);
    }
    else {
      $("#kick").animate({"background-color": mustardYellow}, 1);
      $("#kick").animate({"background-color": white}, 1);  
    }
    kicki ++;
    if (kicki == 2){
      kicki = 0
    };
  };

  function clapStep(){
    if (clapi == 0)
      clapAudio0.play();
    else
      clapAudio1.play();

    if (clapOption == 1){
      $("#clap").animate({"background-color": mustardYellow}, 1);
      $("#clap").animate({"background-color": yellow}, 1);
    }
    else {
      $("#clap").animate({"background-color": mustardYellow}, 1);
      $("#clap").animate({"background-color": white}, 1);  
    }
    clapi ++;
    if (clapi == 2){
      clapi = 0
    };
  };

  function kick2Step(){
  
      if (kick2i == 0)
        kick2Audio0.play();
      else
        kick2Audio1.play();
    

    if (kick2Option == 1){
      $("#kick2").animate({"background-color": mustardYellow}, 1);
      $("#kick2").animate({"background-color": yellow}, 1);
    }
    else {
      $("#kick2").animate({"background-color": mustardYellow}, 1);
      $("#kick2").animate({"background-color": white}, 1);  
    }
    kick2i ++;
    if (kick2i == 2){
      kick2i = 0
    };
  };

  function hihatStep(){
    if (hihati == 0)
      hihatAudio0.play();
    else
      hihatAudio1.play();

    if (hihatOption == 1){
      $("#hihat").animate({"background-color": mustardYellow}, 1);
      $("#hihat").animate({"background-color": yellow}, 1);
    }
    else {
      $("#hihat").animate({"background-color": mustardYellow}, 1);
      $("#hihat").animate({"background-color": white}, 1);  
    }
    hihati ++;
    if (hihati == 2){
      hihati = 0
    };
  };

  function playAnote(){
    switch (Anotei){
      case 0:
        Anote0.play(); break;
      case 1: 
        Anote1.play(); break;
      case 2: 
        Anote2.play(); break;
      case 3: 
        Anote3.play(); break;
      case 4:
        Anote4.play(); break;
    }
    $("#key0").animate({"background-color": darkRed}, 1);
    $("#key0").animate({"background-color": brightRed}, 50);
    Anotei ++;
    if (Anotei == 5)
      Anotei = 0;
  };

  function playBnote(){
    switch (Bnotei){
      case 0:
        Bnote0.play(); break;
      case 1: 
        Bnote1.play(); break;
      case 2: 
        Bnote2.play(); break;
      case 3: 
        Bnote3.play(); break;
      case 4:
        Bnote4.play(); break;
    }
    $("#key1").animate({"background-color": darkRed}, 1);
    $("#key1").animate({"background-color": brightRed}, 50);
    Bnotei ++;
    if (Bnotei == 5)
      Bnotei = 0;
  };
  
  function playCnote(){
    switch (Cnotei){
      case 0:
        Cnote0.play(); break;
      case 1: 
        Cnote1.play(); break;
      case 2: 
        Cnote2.play(); break;
      case 3: 
        Cnote3.play(); break;
      case 4:
        Cnote4.play(); break;
    }
    $("#key2").animate({"background-color": darkRed}, 1);
    $("#key2").animate({"background-color": brightRed}, 50);
    Cnotei ++;
    if (Cnotei == 5)
      Cnotei = 0;
  };
  
  function playDnote(){
    switch (Dnotei){
      case 0:
        Dnote0.play(); break;
      case 1: 
        Dnote1.play(); break;
      case 2: 
        Dnote2.play(); break;
      case 3: 
        Dnote3.play(); break;
      case 4:
        Dnote4.play(); break;
    }
    $("#key3").animate({"background-color": darkRed}, 1);
    $("#key3").animate({"background-color": brightRed}, 50);
    Dnotei ++;
    if (Dnotei == 5)
      Dnotei = 0;
  };

  function playEnote(){
    switch (Enotei){
      case 0:
        Enote0.play(); break;
      case 1: 
        Enote1.play(); break;
      case 2: 
        Enote2.play(); break;
      case 3: 
        Enote3.play(); break;
      case 4:
        Enote4.play(); break;
    }
    $("#key4").animate({"background-color": darkRed}, 1);
    $("#key4").animate({"background-color": brightRed}, 50);
    Enotei ++;
    if (Enotei == 5)
      Enotei = 0;
  };
  
  function playFnote(){
    switch (Fnotei){
      case 0:
        Fnote0.play(); break;
      case 1: 
        Fnote1.play(); break;
      case 2: 
        Fnote2.play(); break;
      case 3: 
        Fnote3.play(); break;
      case 4:
        Fnote4.play(); break;
    }
    $("#key5").animate({"background-color": darkRed}, 1);
    $("#key5").animate({"background-color": brightRed}, 50);
    Fnotei ++;
    if (Fnotei == 5)
      Fnotei = 0;
  };

  function playGnote(){
    switch (Gnotei){
      case 0:
        Gnote0.play(); break;
      case 1: 
        Gnote1.play(); break;
      case 2: 
        Gnote2.play(); break;
      case 3: 
        Gnote3.play(); break;
      case 4:
        Gnote4.play(); break;
    }
    $("#key6").animate({"background-color": darkRed}, 1);
    $("#key6").animate({"background-color": brightRed}, 50);
    Gnotei ++;
    if (Gnotei == 5)
      Gnotei = 0;
  };

  function playA2note(){
    switch (A2notei){
      case 0:
        A2note0.play(); break;
      case 1: 
        A2note1.play(); break;
      case 2: 
        A2note2.play(); break;
      case 3: 
        A2note3.play(); break;
      case 4:
        A2note4.play(); break;
    }
    $("#key7").animate({"background-color": darkRed}, 1);
    $("#key7").animate({"background-color": brightRed}, 50);
    A2notei ++;
    if (A2notei == 5)
      A2notei = 0;
  };
  

  function playToggle(){
    if (flag == true) { 
      flag = false;
      $("#play span").text("Stop");
      run();
      step();
      $("#play").animate({"background-color": white}, 200);
    } else {
      flag = true;
      $("#play span").text("Play");
      clearAll();
      clearInterval(timeOutID);
      counter = 1;
      $("#play").animate({"background-color": yellow}, 200);
    }
  }

  function step(){
    $("#box" + a).animate({
      "background-color": brightOrange
    }, 50); 

    if (chordi == 0) 
      playChord(String($("div#box" + b).text()));
    else
      playChord2(String($("div#box" + b).text()));

    $("#box" + b).animate({
      "background-color": darkOrange
    }, 50);
    chordi++
    if (chordi == 2)
      chordi = 0; 

    a++;
    b++;
    if (b == 4) {b = 0};
    if (a == 4) {a = 0};
  };

  function run() {
    if (kickOption == 1)
      kickStep();

 

    if (kick2Option == 1){
      if (counter == 3 || counter == 7 || counter == 11 || counter == 15)
        kick2TimeOut = window.setTimeout(kick2Step, timing3);
      if (counter%4==0)
        kick2TimeOut1 = window.setTimeout(kick2Step, timing2);

    }

    if (hihatOption == 1)
      hihatTimeOut = window.setTimeout(hihatStep, timing2);

    if (clapOption == 1)
      if (counter%2 == 0) {
        clapStep();
    };

    if (counter%4 == 0) {
      step();
    };

    counter ++;
    if (counter == 17) { counter = 1 };
    timeOutID = window.setTimeout(run, timing);
  
    /*
    var a = 0;
    $("#box" + a).css({
      "background-color": "red"
    });
    */
    return 0;
    };

  /* Helper function for run().  Steps through chord boxes */
  
  

  $(document).keypress(function(e) {
  
    switch(e.which){
      case 97:
        kickStep(); break;
      case 115:
        kick2Step(); break;
      case 100:
        clapStep(); break;
      case 102:
        hihatStep(); break;
      case 49:
        playAnote(); break;
      case 50:
        playBnote(); break;
      case 51:
        playCnote(); break;
      case 52:
        playDnote(); break;
      case 53:
        playEnote(); break;
      case 54:
        playFnote(); break;
      case 55:
        playGnote(); break;
      case 56:
        playA2note(); break;
      case 32: 
        playToggle(); break;
    }
      
    /*
    if(e.which == 49) 
      playZero();
    if(e.which == 50)
      playOne();
    */
  });



$(document).ready(function(){


  function playChord(chord){
    switch(chord){
      case "Am":
        AmChord.play(); break;
      case "Bdim":
        BdimChord.play(); break;
      case "C":
        CChord.play(); break;
      case "Dm":
        DmChord.play(); break;
      case "Em":
        EmChord.play(); break;
      case "F":
        FChord.play(); break;
      case "G":
        GChord.play(); break;
      case "none":
        break; 
    }
  };

  function playChord2(chord){
    switch(chord){
      case "Am":
        AmChord2.play(); break;
      case "Bdim":
        BdimChord2.play(); break;
      case "C":
        CChord2.play(); break;
      case "Dm":
        DmChord2.play(); break;
      case "Em":
        EmChord2.play(); break;
      case "F":
        FChord2.play(); break;
      case "G":
        GChord2.play(); break;
      case "none":
        break; 
    }
  };

  /* stop start kickdrum */
  $("#kick").click(function(){
    if (kickOption == 1){
      kickOption = 0;
      $("#kick").animate({"background-color": white}, 100);
    }
    else {
      kickOption = 1;
      $("#kick").animate({"background-color": yellow}, 100);
    }
  });

  /* For use with 3 options 
  $("#kick").click(function(){

    /* For use with 3 options 
    if (kickOption == 1){
      kickOption = 2;
      $("#kick").animate({"background-color": blue}, 50);
    }
    else if (kickOption == 2){
      kickOption = 0;
      $("#kick").animate({"background-color": white}, 50);
    }
    else {
      kickOption = 1;
      $("#kick").animate({"background-color": yellow}, 50);
    }
  });
  */

  $("#clap").click(function(){
    if (clapOption == 1){
      clapOption = 0;
      $("#clap").animate({"background-color": white}, 100);
    }
    else {
      clapOption = 1;
      $("#clap").animate({"background-color": yellow}, 100);
    }
  });

  $("#kick2").click(function(){
    if (kick2Option == 1){
      kick2Option = 0;
      
      $("#kick2").animate({"background-color": white}, 100);
    }
    else {
      kick2Option = 1;
      $("#kick2").animate({"background-color": yellow}, 100);
    }

  });

  $("#hihat").click(function(){
    if (hihatOption == 1){
      hihatOption = 0;
      $("#hihat").animate({"background-color": white}, 100);
    }
    else {
      hihatOption = 1;
      $("#hihat").animate({"background-color": yellow}, 100);
    }
  });


  /* On play button */ /* Here ends */
	$("#play").click(function(){
    playToggle();
  });

  /* Event handlers for clicking on chord boxes */
  $("#box0").click(function(){
   	$("#box0 span").text(chordToggle(String($("div#box0").text())));
  });

  $("#box1").click(function(){
    $("#box1 span").text(chordToggle(String($("div#box1").text())));
  });

  $("#box2").click(function(){
    $("#box2 span").text(chordToggle(String($("div#box2").text())));
  });

  $("#box3").click(function(){
    $("#box3 span").text(chordToggle(String($("div#box3").text())));
  });


  /* Simply Toggles to the next chord.  Takes Input as a chord and returns next chord */
  function chordToggle(chord){
    switch(String(chord)){
      case "Am":
        return "Bdim"
      case "Bdim":
        return "C"
      case "C":
        return "Dm"
      case "Dm":
        return "Em"
      case "Em":
        return "F"
      case "F":
        return "G"
      case "G":
        return "none"
      case "none":
        return "Am"
    };

  };


  

  /* Perc row functions */
  $("#kick")
    .on("mouseenter", function(){
      /* Convert colors, not necessary 
      var a = $(this).css('backgroundColor');
      var b = colorToHex(a);
      var thisColor = b.toUpperCase();
      if (thisColor === white){
        }
      else 
        kickStep();
      */ 
      if (kickOption == 1) {
        kickStep();
      }
      /* Play Sound here! */
      /*$(this).css({
        "background-color": orange
    });*/
  })
    .on("mouseleave", function(){
      /*$(this).css({
        "background-color": yellow
      });*/
    });

  $("#clap")
    .on("mouseenter", function(){
      if (clapOption == 1) {
        clapStep();
      }
  })
    .on("mouseleave", function(){
    });

  $("#kick2")
    .on("mouseenter", function(){
      if (kick2Option == 1) {
        kick2Step();
      }
  })
    .on("mouseleave", function(){
    });

  $("#hihat")
    .on("mouseenter", function(){
      if (hihatOption == 1) {
        hihatStep();
      }
  })
    .on("mouseleave", function(){
    });

  $("#play")
    .on("mouseenter", function(){
      var a = $(this).css('backgroundColor');
      var b = colorToHex(a);
      var thisColor = b.toUpperCase();
      if (thisColor === yellow){
        $("#play").animate({"background-color": brightOrange}, 200);
      }
  })
    .on("mouseleave", function(){
      var a = $(this).css('backgroundColor');
      var b = colorToHex(a);
      var thisColor = b.toUpperCase();
      if (thisColor === brightOrange)
        $("#play").animate({"background-color": yellow}, 200);

    });


  /* first row functions */
  $(".square")
  	.on("mouseenter", function(){
  		$(this).css({
  			"background-color": darkOrange
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": brightOrange
  		});
  	});

    /* Second row functions */
   $(".keys")
  	.on("mouseenter", function(){
      switch(this.id){
        case 'key0':
          playAnote(); break;
        case 'key1':
          playBnote(); break;
        case 'key2':
          playCnote(); break;
        case 'key3':
          playDnote(); break;
        case 'key4':
          playEnote(); break;
        case 'key5':
          playFnote(); break;
        case 'key6':
          playGnote(); break;
        case 'key7':
          playA2note(); break;
      }
  		$(this).css({
  			"background-color": darkRed
  	});
  })
  	.on("mouseleave", function(){
  		$(this).css({
  			"background-color": brightRed
  		});
  	});


  /* RGB to Hex format converter. Taken from
  http://haacked.com/archive/2009/12/29/convert-rgb-to-hex.aspx/ */
  function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
};




});