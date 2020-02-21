var i = 0;
var txt = 'DO NOT AVERT LINE OF SIGHT'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (i < txt.length) {
    document.getElementById("demo2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}
