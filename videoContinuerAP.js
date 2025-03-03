console.log("videoContinuerAP.js loaded");

var interval = setInterval(function () {
  var confirmButton = document.getElementById("confirm-button");
  if (confirmButton) {
    confirmButton.children[0].children[0].children[0].click();
    console.log("Button clicked!");
    confirmButton.parentElement.parentElement.remove();
    var ytPauseButton = document.querySelector('[data-title-no-tooltip="Pause"]');
    if (!ytPauseButton) {
      var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
      console.log("Play button clicked!");
    }
  }
}, 1000);
