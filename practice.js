// for use after page has loaded

(function() {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
  script.onload = function() {
    var raceBtn, leaveBtn, words;

    setInterval(function() {
      $(".xButton").click();
      // if time shows Time Remaining
      // or just left the beginning of the race
      if ($(".time").attr("title") || parseInt($(".time").eq(0).text().split(":")[1]) < 12) {
        console.log("Waiting...");
      }
      else {
        if ((raceBtn = $(".raceAgainLink[aria-hidden='false']")).length) {
          console.log("In lobby...");
          raceBtn.click();
        }
        else if ((leaveBtn = $(".gwt-Anchor:contains('« leave race')[aria-hidden='false']")).length) {
          console.log("In race...");
          var raceItv = setInterval(function() {
            var popupText = $(".countdownPopup.horizontalCountdownPopup").find(".lightLabel").text();
            if (popupText == "Get ready to race!" || popupText == "It's the final countdown!") {
              console.log("Prepping to leave...");
              words = $(".nonHideableWords.unselectable").children().map(function() { return $(this).text(); }).get().join("");
              console.log(words);
              leaveBtn.click();
              clearInterval(raceItv);
            }
          }, 1000);
        }
      }
    }, 4000);

  };
  head.appendChild(script);
})();

// if you're in lobby
// $(".raceAgainLink[aria-hidden='false']")

// if you're in race
// $(".gwt-Anchor:contains('« leave race')[aria-hidden='false']")

// get all text
// $(".nonHideableWords.unselectable").children().map(function() { return $(this).text(); }).get().join("");

// <div class="timeDisplay"><span class="time" title="Time remaining">3:47</span></div>

// http://play.typeracer.com/?rt=22ammhtx5a
