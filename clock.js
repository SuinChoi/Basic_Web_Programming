var canvas = document.getElementById("clock_canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
ra4 = radius * 0.9;
setInterval(drawClock, 1000);

var gradient = ctx.createRadialGradient(0, 0, radius, 200, 0, 2 * Math.PI);
gradient.addColorStop(0, "#e66465");
gradient.addColorStop(0.5, "#9198e5");
// gradient.addColorStop(1, "blue");

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}
function drawFace(ctx, radius) {
  var grad;
  var text = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  text.font = "italic 38pt Arial";
  text.strokeText("SUIN!", 10, 50);
}
function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}
function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  hour = hour % 12;
  hour * Math.PI / 6 +
  minute * Math.PI / (6 * 60) +
  second * Math.PI / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.06);
  minute = minute * Math.PI / 30 + second * Math.PI / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, radius * 0.06);
  second = second * Math.PI / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.015);
}
function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
