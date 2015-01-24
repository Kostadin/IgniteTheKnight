//Audio objects
var backgroundTrack = new Audio("audio/.mp3");
//Looping
backgroundTrack.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var wilhelm = new Audio("audio/WilhelmScream.mp3");

var gameOver = new Audio("audio/Game_Over.mp3");

var playerDeath = new Audio("audio/Death.mp3");

var mainTheme = new Audio("audio/Main_Title_Theme.mp3");
mainTheme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

mainTheme.play();