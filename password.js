var IsCorrect = false;

var SoftLocked = false;
var password;

var tries = 0;
while (IsCorrect == false) {

password = prompt("Enter password(It's 12345):");

if (password == 12345 && SoftLocked == false) {
alert("ACCESS GRANTED");
IsCorrect = true;
} else {
alert("ACCESS DENIED");
tries = tries + 1;
if (tries == 3 || SoftLocked == true) {
alert ("THREE ATTEMPTS MADE. PROGRAM SOFTLOCKED.");
SoftLocked = true;
}
}
}
