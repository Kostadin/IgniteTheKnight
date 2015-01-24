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
var $spriteXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="b1.png" x="130" y="520" width="128" height="128"/><SubTexture name="b2.png" x="390" y="130" width="128" height="128"/><SubTexture name="b3.png" x="390" y="0" width="128" height="128"/><SubTexture name="b4.png" x="260" y="780" width="128" height="128"/><SubTexture name="b5.png" x="260" y="650" width="128" height="128"/><SubTexture name="b6.png" x="260" y="520" width="128" height="128"/><SubTexture name="b7.png" x="260" y="390" width="128" height="128"/><SubTexture name="b8.png" x="260" y="260" width="128" height="128"/><SubTexture name="f1.png" x="260" y="130" width="128" height="128"/><SubTexture name="f2.png" x="260" y="0" width="128" height="128"/><SubTexture name="f3.png" x="130" y="780" width="128" height="128"/><SubTexture name="f4.png" x="130" y="650" width="128" height="128"/><SubTexture name="f5.png" x="390" y="260" width="128" height="128"/><SubTexture name="f6.png" x="130" y="390" width="128" height="128"/><SubTexture name="f7.png" x="130" y="260" width="128" height="128"/><SubTexture name="f8.png" x="130" y="130" width="128" height="128"/><SubTexture name="s1.png" x="130" y="0" width="128" height="128"/><SubTexture name="s2.png" x="0" y="780" width="128" height="128"/><SubTexture name="s3.png" x="0" y="650" width="128" height="128"/><SubTexture name="s4.png" x="0" y="520" width="128" height="128"/><SubTexture name="s5.png" x="0" y="390" width="128" height="128"/><SubTexture name="s6.png" x="0" y="260" width="128" height="128"/><SubTexture name="s7.png" x="0" y="130" width="128" height="128"/><SubTexture name="s8.png" x="0" y="0" width="128" height="128"/></TextureAtlas>');
var $envXml = $('');
var $deathXml = $('');
var $tileXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="Lava1.png" x="0" y="130" width="128" height="128"/><SubTexture name="Lava2.png" x="0" y="260" width="128" height="128"/><SubTexture name="Platform1.png" x="130" y="0" width="128" height="128"/><SubTexture name="Platform2.png" x="0" y="0" width="128" height="128"/></TextureAtlas>');

var PlayerState = {
	Idle: 1,
	Running: 2,
	Jumping: 3,
	Crashing: 4,
	Incapacitated: 5,
	Dying: 6
}