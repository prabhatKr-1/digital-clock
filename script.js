hour = document.getElementById("hour");
minutes = document.getElementById("min");
setInterval(function () {
  date = new Date();
  hrs = date.getHours();
  min = date.getMinutes();
  hour.innerText = hrs % 12;
  minutes.innerText = min;
  // day = document.getEleme
}, 400);
ntById("date");
// day.innerHTML = date.toString()
