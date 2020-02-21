var i = 0;
var txt = 'AUTOMATED SECURITY PROTOCOL. GENERATING MEMETIC KILL AGENT.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
