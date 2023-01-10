hour = document.getElementById("hour");
minutes = document.getElementById("min");
seconds = document.getElementById("sec");
ampm = document.getElementById("ampm");
setInterval(function () {
  date = new Date();
  hrs = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  if (hrs % 12 < 10) {
    hour.innerText = "0" + (hrs % 12);
  } else {
    hour.innerText = hrs % 12;
  }
  if (min < 10) {
    minutes.innerText = "0" + min;
  } else {
    minutes.innerText = min;
  }
  if (sec < 10) {
    seconds.innerText = "0" + sec;
  } else {
    seconds.innerText = sec;
  }
  if (hrs > 12) {
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }
}, 1000);
