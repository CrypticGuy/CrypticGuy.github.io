var targetId = ["home", "about", "contact"];
if (annyang) {
    var binaryblood = function(target) {
            console.log(target);
            var len = targetId.length;
            for (var i = 0; i < len; i++) {
              if (targetId[i] == target) {
                var elm = document.getElementById(target);
                console.log(target);
                elm.scrollIntoView({behaviour: 'smooth', block: 'top'});
                break;
              }
            }
          }

    var helloer = function() {
            alert('Hello to you too VISITOR');
          }

    var pause = function() {
      annyang.pause(); 
      document.getElementById('speechStatus').innerHTML = "MIC has been turned OFF, audio commands not being accepted";
    }

    var resume = function() {
      annyang.resume();
      document.getElementById('speechStatus').innerHTML = "MIC has been turned ON, auido commands are accepted";
    }

    var commands = {
      'go to *target': binaryblood,
      'hello': helloer
      //'pause': pause,
      //'resume': resume
    };

    annyang.debug();
    annyang.addCommands(commands);
    annyang.start();
}

var pauseBtn = function() {
  annyang.pause(); 
  document.getElementById('speechStatus').innerHTML = "MIC has been turned OFF, audio commands not being accepted";
}

var resumeBtn = function() {
  annyang.resume();
  document.getElementById('speechStatus').innerHTML = "MIC has been turned ON, auido commands are accepted";
}