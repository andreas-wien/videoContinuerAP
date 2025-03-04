console.log("videoContinuerAP.js loaded");

var interval = setInterval(function () {
  var confirmButton = document.getElementById("confirm-button");
  if (confirmButton) {
    confirmButton.children[0].children[0].children[0].click();
    console.log("Confirm button clicked!");
    confirmButton.parentElement.parentElement.remove();
    video = document.querySelector("#movie_player > div:nth-child(1) > video:nth-child(1)");
    if (video.paused === true) {
      video.play();
      console.log("Video continued!");
    }
  }
}, 1000);
