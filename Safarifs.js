var toggleBtn = false;
function btnClick() {
  toggleBtn = !toggleBtn;
  document.getElementById("testText").innerHTML = toggleBtn;
  if (toggleBtn) {
    openfullscreen();
  }
  else {
    closefullscreen();
  }
}

function openfullscreen() {
    // Trigger fullscreen  
    if (document.getElementById("parent").requestFullscreen) {
      document.getElementById("parent").requestFullscreen();
    } else if (document.getElementById("parent").mozRequestFullScreen) { /* Firefox */
      document.getElementById("parent").mozRequestFullScreen();
    } else if (document.getElementById("parent").webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.getElementById("parent").webkitRequestFullscreen();
    } else if (document.getElementById("parent").webkitRequestFullScreen) { /* Chrome, Safari and Opera */
      document.getElementById("parent").webkitRequestFullScreen();
    }
  else if (document.getElementById("parent").msRequestFullscreen) { /* IE/Edge */
      document.getElementById("parent").msRequestFullscreen();
    }
  }

 function closefullscreen(){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.webkitExitFullScreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullScreen();
    }
   else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
