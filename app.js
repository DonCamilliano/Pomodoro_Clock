$(document).ready(function() {
  var minute = "25";
  var seconds = "00";
  var clickcount = 0;
  var sessionMinute = "25";
  var isPaused = false;
  var wordcount = 0;
  $("#sessionTimer").text(sessionMinute);
  //$("#breakTimer").text("5");
  $("#clock").text(minute + ":" + seconds);
  
  // RESET  //
  $("#btn").click(function() {
    minute = "25";
    seconds = "00";
    $("#clock").text(minute + ":" + seconds);
  });
  
  // Add minute //
  $("#sessionplus").click(function() {
      sessionMinute = parseFloat(sessionMinute);
      minute = parseFloat(minute);
      sessionMinute++;
      minute = sessionMinute;
      String(sessionMinute);
      String(minute);
      $("#sessionTimer").text(minute);
      $("#clock").text(minute + ":" + seconds);
  })
  
  // Substract minute //
  $("#sessionminus").click(function() {
     if (minute>=2) {
         sessionMinute = parseFloat(sessionMinute); 
         minute = parseFloat(minute);
         sessionMinute--;
         minute = sessionMinute;
         String(minute);
         $("#sessionTimer").text(minute);
         $("#clock").text(minute + ":" + seconds);
     }
  })
  
  //  COUNT  //
  function count() {
    minute = parseFloat(minute);
    seconds = parseFloat(seconds);
    if (isPaused == false) {
      
      if (seconds == 0 && minute>0) {
        seconds = 60;
        minute -= 1;
      } else if (seconds == 1 && minute == 0) {
        clearInterval(count, 1000);
        isPaused = true;
      }
      seconds -= 1;
      String(seconds);
      String(minute);
      $("#clock").text(minute + ":" + seconds);
      }
  }
  
  //  CIRCLE  Click //
  $(".circle").click(function() {
    if (clickcount == 0) {
        setInterval(count, 1000);
        isPaused = false;
        clickcount = 1;
        $("#sessionminus").unbind("click");
        $("#sessionplus").unbind("click");
        $("#breakminus").unbind("click");
        $("#breakplus").unbind("click");
    } else if (clickcount == 1){
        isPaused = true;
        clickcount = 0;
        $("#sessionminus").bind("click", function() {
            if (minute>=2) {
                   sessionMinute = parseFloat(sessionMinute); 
                   minute = parseFloat(minute);
                   sessionMinute--;
                   minute = sessionMinute;
                   seconds = "00";
                   String(minute);
                   $("#sessionTimer").text(minute);
                   $("#clock").text(minute + ":" + seconds);
    }
  });
      $("#sessionplus").bind("click", function() {
             sessionMinute = parseFloat(sessionMinute);
             minute = parseFloat(minute);
             sessionMinute++;
             minute = sessionMinute;
             seconds = "00";
             String(sessionMinute);
             String(minute);
             $("#sessionTimer").text(minute);
             $("#clock").text(minute + ":" + seconds);
  });
    }    
  })
})