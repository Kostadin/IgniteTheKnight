//Audio objects
var backgroundTrack = new Audio("audio/blank.mp3");
//Looping
/*
backgroundTrack.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
*/
var wilhelm = new Audio("audio/blank.mp3");

var gameOver = new Audio("audio/blank.mp3");

var playerDeath = new Audio("audio/blank.mp3");

var mainTheme = new Audio("audio/blank.mp3");
/*
mainTheme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
*/
mainTheme.play();
