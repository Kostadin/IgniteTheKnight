//Audio objects
var backgroundTrack = new Audio("audio/BGM_-_the_lava_is_nigh.mp3");
//Looping

backgroundTrack.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var wilhelm = new Audio("audio/blank.mp3");

var gameOver = new Audio("audio/blank.mp3");

var playerDeath = new Audio("audio/blank.mp3");

var mainTheme = new Audio("audio/Title_-_welcome_to_hell.mp3");

mainTheme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

mainTheme.play();
