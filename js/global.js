var fps = 30;
var colorCount = 4;
var screenWidth = 1024;
var screenHeight = 576;
var screenOriginX = 0;
var screenOriginY = 0;
var tileWidth = 128;
var tileHeight = 128;
var levels = [];
var currentLevel = null;
var gameRunning = false;
var muteSound = false;
var playerFacing = "right";
var playerDivOffsetX = -25;
var playerDivOffsetY = 0;
var parallaxRatio = 3;
//Animation counter
var animationFrame = 0;
var gameFrame = 0;
var animationRatio = 3;
var tileAnimationFrame = 0;
var tileAnimationRatio = 45;
var itemAnimationFrame = 0;
var itemAnimationRatio = 2;
var itemAnimationTotalFrames = 24;
//Brick types
var lava = 0;
var platform = 1;
var portal = 2;
//Other
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var currentTry = 0;
var maxTries = 3;
var deadAnimationHandle = null;
var currentExplodeFrame = 0;
var explodeAnimationHandle = null;
var winAnimationHandle = null;
var currentLevelIndex = 0;
var deathDelayMS = 1500;
var winDelayMS = 1000;
var transitionScreenDelayMS = 3000;
var gameOverDelayMS = 3200;
var youWinDelayMS = 3000;
var opacityTransitionPerFrame = 0.10;

var PlayerState = {
	Idle: 1,
	Running: 2,
	Jumping: 3,
	Crashing: 4,
	Incapacitated: 5,
	Dying: 6
}

var Items = {
	Key: 0,
	Heart: 1
}