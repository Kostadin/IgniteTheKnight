var runGameHandle = null;

function setScreenOrigin(level){
	var ox = screenOriginX;
	var oy = screenOriginY;
	screenOriginX = Math.min(Math.max(level.player.x-(screenWidth/2),0), level.width-screenWidth);
	screenOriginY = Math.min(Math.max(level.player.y-(screenHeight/2),0), level.height-screenHeight);
	if ((ox!=screenOriginX)||(oy!=screenOriginY)){
		//console.log('screenOriginX = '+screenOriginX+' screenOriginY = '+screenOriginY);
	}
}

function tileVisible(tile){
	if ((((screenOriginX<=tile.x)&&(tile.x<screenOriginX+screenWidth))||((screenOriginX<=tile.x+tile.width)&&(tile.x+tile.width<screenOriginX+screenWidth)))&&
		(((screenOriginY<=tile.y)&&(tile.y<screenOriginY+screenHeight))||((screenOriginY<=tile.y+tile.height)&&(tile.y+tile.height<screenOriginY+screenHeight))))
		return true;
	else
		return false;
}

function updateHeart(index){
	var $heart = $('#heart'+index);
	if (currentLives>=(index)){
		$heart.css({
			'background-position': '0px 0px'
		});
	} else if (((index-1)< currentLives) && (currentLives < (index))){
		$heart.css({
			'background-position': '-64px 0px'
		});
	} else {
		$heart.css({
			'background-position': '-128px 0px'
		});
	}
}

function updateLivesDisplay(){
	console.log(currentLives);
	updateHeart(1);
	updateHeart(2);
	updateHeart(3);
}

function loadLevel(id){
	currentLevelIndex = id;
	currentLevel = jQuery.extend(true, {}, levels[id]);//Deep copy
	currentLives = maxLives;
	var p = {
		i: currentLevel.startPosition[0],
		j: currentLevel.startPosition[1],
		x: currentLevel.startPosition[0]*tileWidth,
		y: currentLevel.startPosition[1]*tileHeight,
		vel: [0,0],
		state: PlayerState.Idle,
		totalTransitionSteps: 0,
		transitionStepsRemaining: 0,
		previousX: currentLevel.startPosition[0]*tileWidth,
		previousY: currentLevel.startPosition[1]*tileHeight,
		moveDirection: null,
		resetTransitionStepsTo: function(transitionSteps){
			this.totalTransitionSteps = transitionSteps;
			this.transitionStepsRemaining = transitionSteps;
			this.previousX = this.x;
			this.previousY = this.y;
		},
		transitionStateTo: function(state){
			if (state == PlayerState.Idle){
				this.resetTransitionStepsTo(stepsIdle);
				desiredMoveDirection = null;
				if (this.state != state){
					console.log('We are idle.');
				}
			} else if (state == PlayerState.Running){
				this.resetTransitionStepsTo(stepsRunning);
			} else if (state == PlayerState.Jumping){
				this.resetTransitionStepsTo(stepsJumping);
				if (this.state != state){
					desiredJump = false;
					playSFX(jumpFX);
					console.log("I don't want to jump anymore.");
				}
			} else if (state == PlayerState.Crashing){
				if (this.state != state){
					currentLives -= 0.5;
					updateLivesDisplay();
					if (currentLives <= 0){
						this.transitionStateTo(PlayerState.Incapacitated);
						return; // Prevents the state to be overwritten you PlayerState.Crashing
					} else {
						this.resetTransitionStepsTo(stepsCrashing);
						playSFX(crashFX);
						console.log('We crashed.');
					}
				} else {
					this.transitionStateTo(PlayerState.Idle);
					return; // Prevents the state to be overwritten you PlayerState.Crashing
				}
			} else if (state == PlayerState.Incapacitated){
				this.resetTransitionStepsTo(stepsIncapacitated);
				if (this.state != state){
					console.log('We got incapacitated.');
				}
			} else if (state == PlayerState.Dying){
				this.resetTransitionStepsTo(stepsDying);
				if (this.state != state){
					playerDyingFrame = 0;
					playSFX(deathFX);
					console.log('We are dying :(');
				}
			} else if (state == PlayerState.Winning){
				this.resetTransitionStepsTo(stepsWinning);
				if (this.state != state){
					playSFX(winFX);
					console.log('We are winning!');
				}
			} else {
				alert('Unknown PlayerState');
			}
			this.state = state;
		}
	};
	p.dead = false;
	p.win = false;
	currentLevel.player = p;
	var tiles = [];
	for(var j=0;j<currentLevel.map.length;++j){
		for(var i=0;i<currentLevel.map[j].length;++i){
			tileDef = currentLevel.def[currentLevel.map[j][i]];
			tiles.push({
				type: tileDef.type,
				x: i*tileWidth,
				y: j*tileHeight,
				width: tileWidth,
				height: tileHeight,
				texture: tileDef.texture,
				breaking: null,
				brokenStage: 0,
				prevBrokenStage: 0
			});
		}
	}
	
	var items = [];
	for(var i=0;i<currentLevel.itemMap.length;++i){
		item = currentLevel.itemMap[i];
		items.push({
			type: item.type,
			x: item.x*tileWidth,
			y: item.y*tileHeight,
			width: tileWidth,
			height: tileHeight,
			texture: item.texture
		});
	}
	
	currentLevel.tiles = tiles;
	currentLevel.items = items;
	currentLevel.height = tileHeight*currentLevel.map.length;
	currentLevel.width = tileWidth*currentLevel.map[0].length;
	setScreenOrigin(currentLevel);
	$('#level').html('');

	var player = '<div id="player" style="left:'+(p.x-screenOriginX+playerDivOffsetX)+'px;top:'+(p.y-screenOriginY+playerDivOffsetY)+'px;"/>';
	var tiles = '';
	for(var i=0;i<currentLevel.tiles.length;++i){
		var tile = currentLevel.tiles[i];
		if (true){
			tiles += '<div id="tile_'+i+'" class="tile" style="left:'+(tile.x-screenOriginX)+'px;top:'+(tile.y-screenOriginY)+'px;width:'+tileWidth+'px;height:'+tileHeight+'px;background-image:url(\''+tile.texture+'\')'+';background-repeat:no-repeat;'+((!tileVisible(tile))?'display:none;':'')+'"/>';
		}
	}
	
	var items = '';
	for(var i=0;i<currentLevel.items.length;++i){
		var item = currentLevel.items[i];
		items += '<div id="item_'+i+'" class="item" style="left:'+(item.x-screenOriginX)+'px;top:'+(item.y-screenOriginY)+'px;width:'+tileWidth+'px;height:'+tileHeight+'px;background-image:url(\''+item.texture+'\')'+';background-repeat:no-repeat;'+((!tileVisible(item))?'display:none;':'')+'"/>';
	}
	
	$('#level').append(player);
	$('#level').append(tiles);
	$('#level').append(items);
	updateLivesDisplay();
	$('#level, #heart_overlay').css({
		display: 'block'
	});
	leftPressed = false;
	upPressed = false;
	rightPressed = false;
	downPressed = false;
	desiredMoveDirection = null;
}

function runGame(){
	if(gameRunning){
		//Count frames
		gameFrame++;

		animationFrame = Math.floor(gameFrame / animationRatio);
		tileAnimationFrame = Math.floor(gameFrame / tileAnimationRatio);
		itemAnimationFrame = Math.floor(gameFrame / itemAnimationRatio);

		//Player variables
		var p = currentLevel.player;
		
		//Process world
		runPhysics();

		var playerFrameInfo = getPlayerAnimationFrame(animationFrame, p.state, playerFacing);
		
		
		setScreenOrigin(currentLevel);
		
		//Display
		
		//Background parallax
		//$('#level').css({
		//	'background-position': (-screenOriginX / parallaxRatio) + 'px ' + '0px , 0px 0px',
		//});
		
		var totalOffsetX = playerDivOffsetX;
		var totalOffsetY = playerDivOffsetY;
		if (p.state == PlayerState.Jumping)
		{
			totalOffsetX += playerJumpingOffsetX;
			totalOffsetY += playerJumpingOffsetY;
		}
		
		//Player
		if (playerFacing == Direction.Right) {
			//Must flip image when facing right
			$('#player').css({
				left: (p.x-screenOriginX+totalOffsetX)+'px',
				top: (p.y-screenOriginY+totalOffsetY)+'px',
				'background-position': playerFrameInfo.x + 'px ' + playerFrameInfo.y + 'px',
				'transform-origin': '50% 50%',
				transform: 'scaleX(-1)'
			});
		}
		else {
			// Original orientation when not facing right
			$('#player').css({
				left: (p.x-screenOriginX+totalOffsetX)+'px',
				top: (p.y-screenOriginY+totalOffsetY)+'px',
				'background-position': playerFrameInfo.x + 'px ' + playerFrameInfo.y + 'px',
				'transform-origin': '50% 50%',
				transform: 'scaleX(1)'
			});
		}
		//Tiles
		for(var i=0;i<currentLevel.tiles.length;++i){
			var tile = currentLevel.tiles[i];
			
			if ((tile.breaking != null)&&(tile.breaking<=0)){
				$('#tile_'+i).css({
					'background-image': 'url(\''+tile.texture+'\')'
				});

				tile.breaking = null;
				tile.brokenStage = 0;
				//console.log('#tile_'+i+' got broken.');
			}
			
			if (tile.brokenStage > 0)
			{
				var tileFrameInfo = {x:0,y:0};
				if (tile.brokenStage != tile.prevBrokenStage)
				{
					tile.prevBrokenStage = tile.brokenStage;
					$('#tile_'+i).css({
					'background-image': 'url(\'img/tiles/breaktile'+tile.brokenStage+'.png\')',
					'background-position':'0px 0px'
					});
				}
			} else {
				var tileFrameInfo = getTileAnimationFrame(tileAnimationFrame, tile.type);
			}
			
			$('#tile_'+i).css({
				left: (tile.x-screenOriginX)+'px',
				top: (tile.y-screenOriginY)+'px',
				'background-position': tileFrameInfo.x + 'px ' + tileFrameInfo.y + 'px',
				display: ((tileVisible(tile))?'block':'none')
			});
			
		}
		//Items (pickups)
		for (var i=0;i<currentLevel.items.length;++i)
		{
			var item = currentLevel.items[i];
			var $xml = (item.type == Items.Key ? $keyXml : $heartXml);
			var itemFrameInfo = getGenericAnimationFrame(itemAnimationFrame, itemAnimationTotalFrames, $xml);
			$('#item_'+i).css({
				left: (item.x-screenOriginX)+'px',
				top: (item.y-screenOriginY)+'px',
				'background-position': itemFrameInfo.x + 'px ' + itemFrameInfo.y + 'px',
				display: ((tileVisible(item))?'block':'none')
			});
		}
		//Debug
		//$('#debug').html('<p>'+Math.round(p.x)+', '+Math.round(p.y)+'</p>');
		//End determination
		if ((!p.win)&&(p.dead)&&(deadAnimationHandle == null)){
			//console.log('Dead '+(new Date()).getSeconds());
			gameRunning = false;
			clearInterval(runGameHandle);
			runGameInterval = null;
			if (p.state == PlayerState.Dying){
				playerDyingFrame = 0;
				deathAnimationHandle = setInterval(function(){
					if (playerDyingFrame < playerDeathAnimation.length){
						var playerDeathFrameInfo = getPlayerAnimationFrame(0, PlayerState.Dying);
						
						$('#player').css( 'background-position', playerDeathFrameInfo.x + 'px ' + playerDeathFrameInfo.y + 'px');
						/*
						if (currentExplodeFrame == 5) {
							playerDeath.currentTime = 0;
							playerDeath.play();
						}*/
						playerDyingFrame++;
					} else {
						//playerDeath.pause();
						clearInterval(deathAnimationHandle);
						deathAnimationHandle = null;
					}
				},(1000/(fps/deathAnimationRatio)))
			}
			deadAnimationHandle = setTimeout(function(){
				++currentTry;
				if (currentTry>=maxTries) {
					//Stop BGM
					backgroundTrack.currentTime = 0;
					backgroundTrack.pause();
					currentTry = 0;
					currentLevelIndex = 0;
					$('#level').hide();
					$('#heart_overlay').hide();
					$('#gameOver').show();
					gameOver.currentTime = 0;
					gameOver.play();
					setTimeout(function(){
						$('#gameOver').hide();
						$('#mainMenu').show();
						mainTheme.currentTime = 0;
						mainTheme.play();
						titleVideoPlayer.play();
						gameOver.pause();
					},gameOverDelayMS);
				} else {
					loadLevel(currentLevelIndex);
					gameRunning = true;
					runGameHandle = setInterval(runGame,1000/fps);
				}
				deadAnimationHandle = null;
			},deathDelayMS);
		} else if ((!p.dead)&&(p.win)&&(winAnimationHandle == null)){
			//console.log('Win '+(new Date()).getSeconds());
			gameRunning = false;
			clearInterval(runGameHandle);
			runGameInterval = null;
			winAnimationHandle = setTimeout(function(){
				if (currentLevelIndex<levels.length-1){
					//Stop BGM
					backgroundTrack.currentTime = 0;
					backgroundTrack.pause();
					++currentLevelIndex;
					$('#level').hide();
					$('#heart_overlay').hide();
					$('#levelNumber').html(currentLevelIndex+1);
					$('#mainMenu').hide();
					mainTheme.pause();
					$('#transition').show();
					setTimeout(function(){
						$('#transition').hide();
						loadLevel(currentLevelIndex);
						gameRunning = true;
						runGameHandle = setInterval(runGame,1000/fps);
						backgroundTrack.play();
					},transitionScreenDelayMS);
				} else {
					//Stop BGM
					backgroundTrack.currentTime = 0;
					backgroundTrack.pause();
					currentTry = 0;
					currentLevelIndex = 0;
					$('#level').hide();
					$('#heart_overlay').hide();
					$('#youWin').show();
					setTimeout(function(){
						$('#youWin').hide();
						$('#mainMenu').show();
						mainTheme.currentTime = 0;
						mainTheme.play();
						titleVideoPlayer.play();
					},youWinDelayMS);
				}
				winAnimationHandle = null;
			},winDelayMS);
		}
	}else{	
		clearInterval(runGameHandle);
		runGameInterval = null;
	}
}

function startGame(){
	if (!gameRunning){
		currentTry = 0;
		currentLevelIndex = 6;
		titleVideoPlayer.pause();
		
		$('#levelNumber').html(currentLevelIndex+1);
		$('#mainMenu').hide();
		mainTheme.pause();
		$('#transition').show();
		setTimeout(function(){
			$('#transition').hide();
			loadLevel(currentLevelIndex);
			gameRunning = true;
			runGameHandle = setInterval(runGame,1000/fps);
			backgroundTrack.play();
		},transitionScreenDelayMS);
	}
}

function shuffle(array) {
	var currentIndex = array.length
	var temporaryValue;
	var randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function introVideoEnd()
{
	$(introVideoPlayer).hide();
	$(titleVideoPlayer).show();
	titleVideoPlayer.play();

}

function titleVideoEnd()
{
	if (!gameRunning)
	{
		titleVideoPlayer.currentTime = 0;
		titleVideoPlayer.play();
	}
	else
	{
		//$(titleVideoPlayer).hide();
	}
}

$(function(){
	var credits = ['Kostadin Vodenicharov - Dev', 'Neven Iliev - Dev', 'Todor Imreorov -  Graphics' , 'Ilko Birov - Music', 'Veselin Donov - UI, Graphics, Level design'];
	shuffle(credits);
	var logstr = 'Credits\n-------\n';
	for (var i=0;i<credits.length;++i){
		$('#creditsNames').append('<p>'+credits[i]+'</p>');
		logstr+=credits[i]+'\n';
	}
	introVideoPlayer = document.getElementById('introVideo');
	titleVideoPlayer = document.getElementById('titleLoop');
	introVideoPlayer.addEventListener('ended', introVideoEnd, false);
	titleVideoPlayer.addEventListener('ended', titleVideoEnd, false);

	console.log(logstr);
	$('#btnPlay').click(startGame);
	$('#credits').click(function(){
		$('#credits').hide();
		$('#mainMenu').show();
		creditsTheme.pause();
		mainTheme.currentTime = 0;
		mainTheme.play();
	});
	$('#btnCredits').click(function(){
		$('#mainMenu').hide();
		mainTheme.pause();
		creditsTheme.play();
		$('#credits').show();
	});
	$('body').on('keydown',function(e){
		var code = e.keyCode;
		if (code == 32){
			spacePressed = true;
		} else if (code == 37) {
			leftPressed = true;
		} else if (code == 38) {
			upPressed = true;
		} else if (code == 39) {
			rightPressed = true;
		} else if (code == 40) {
			downPressed = true;
		}
		
		// Desired move direction
		if (upPressed){
			desiredMoveDirection = Direction.Up;
		} else if (rightPressed){
			desiredMoveDirection = Direction.Right;
		} else if (downPressed){
			desiredMoveDirection = Direction.Down;
		} else if (leftPressed){
			desiredMoveDirection = Direction.Left;
		}
		// Desired jump
		if (spacePressed){
			desiredJump = true;
			console.log("I want to jump.");
		}
		//M for muting
		if (e.which == 77 || e.which == 109) {
			muteSound = !muteSound;
			backgroundTrack.muted = muteSound;
			wilhelm.muted = muteSound;
			gameOver.muted = muteSound;
			playerDeath.muted = muteSound;
			mainTheme.muted = muteSound;
		}
	});
	setTimeout(function(){
		$('body').on('keyup',function(e){
			var code = e.keyCode;
			if (code == 32){
				spacePressed = false;
			} else if (code == 37) {
				leftPressed = false;
			} else if (code == 38) {
				upPressed = false;
			} else if (code == 39) {
				rightPressed = false;
			} else if (code == 40) {
				downPressed = false;
			} else if ((code == 13)&&($('#mainMenu').css('display')=='block')) {
				startGame();
			}
		});
	},100);
});