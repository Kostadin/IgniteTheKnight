//Audio objects
var backgroundTrack = new Audio("audio/BGM_-_the_lava_is_nigh.mp3");
//Looping

backgroundTrack.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var wilhelm = new Audio("audio/blank.mp3");

var gameOver = new Audio("audio/game_over_2015.mp3");

var playerDeath = new Audio("audio/blank.mp3");

var mainTheme = new Audio("audio/Title_-_welcome_to_hell.mp3");

mainTheme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

mainTheme.play();

var crashFX = new Audio("audio/FX/metal vs wall.mp3");
var jumpFX = new Audio("audio/FX/Jumping.mp3");
var deathFX = new Audio("audio/FX/dying_fx_fixed.mp3");
var winFX = new Audio("audio/FX/win.mp3");


var playSFX = function(fx)
{
	if (muteSound) return;
	fx.currentTime = 0;
	fx.play();
}