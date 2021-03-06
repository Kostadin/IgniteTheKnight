var maxSideSpeedPerSec = 256;
var maxSideSpeed = maxSideSpeedPerSec/fps;

function addVectors(a,b){
	return [a[0]+b[0],a[1]+b[1]]
}

function collision(p,t){
	var points = [[p.x,p.y],[p.x+p.width,p.y],[p.x,p.y+p.height],[p.x+p.width,p.y+p.height],
				  [t.x,t.y],[t.x+t.width,t.y],[t.x,t.y+t.height],[t.x+t.width,t.y+t.height]];
	var bounds = [[t.x,t.x+t.width,t.y,t.y+t.height],[p.x,p.x+p.width,p.y,p.y+p.height]];
	for(var i=0;i<points.length;++i){
		var point = points[i];
		var bound = bounds[Math.floor(i/4)];
		if ((bound[0]<=point[0])&&(point[0]<bound[1])&&(bound[2]<point[1])&&(point[1]<bound[3])){
			return true;
		}
	}
	return false;
}

function checkForTransition(currentTile, p){
	if ((desiredMoveDirection != p.moveDirection)&&(p.state != PlayerState.Jumping)){
		if (p.transitionStepsRemaining == 0){
			p.moveDirection = desiredMoveDirection;
		}
	}
	
	var nextI = p.i;
	var nextJ = p.j;
	if (p.moveDirection == Direction.Up){
		nextJ -= 1;
	} else if (p.moveDirection == Direction.Right){
		nextI += 1;
	} else if (p.moveDirection == Direction.Down){
		nextJ += 1;
	} else if (p.moveDirection == Direction.Left){
		nextI -= 1;
	}
	if (currentTile.type == portal){
		p.transitionStateTo(PlayerState.Winning);
		return;
	} else if (currentTile.type == lava){
		if (p.state != PlayerState.Jumping){
			//console.log("Pre-transition:");
			//console.log(currentTile);
			//console.log(p);
			p.transitionStateTo(PlayerState.Dying);
			//console.log("Post-transition:");
			//console.log(currentTile);
			//console.log(p);
			return;
		}
	}
	
	if ((nextJ<0)||(nextJ>=currentLevel.map.length)||(nextI<0)||(nextI>=currentLevel.map[0].length)){
		p.moveDirection = null;
		p.transitionStateTo(PlayerState.Idle);
	} else { 
		
		var nextTile = currentLevel.tiles[nextJ*currentLevel.map[0].length + nextI];
		if (currentTile != nextTile){
			if (nextTile.type == wall){
				if (p.state != PlayerState.Crashing)
				{
					playerCrashingFrame = 0;
				}
				p.transitionStateTo(PlayerState.Crashing);//Or incapacitated here ...
				p.moveDirection = null;
			} else {
				if (p.canJump && desiredJump){
					p.transitionStateTo(PlayerState.Jumping);
				} else if ((currentTile.type == lava)&&(nextTile.type != lava)&&(p.state == PlayerState.Jumping)){
					p.transitionStateTo(PlayerState.Jumping);
				} else {
					p.transitionStateTo(PlayerState.Running);
				}
				p.i = nextI;
				p.j = nextJ;
			}
		}
	}
}

function doPlayerAnimation(p){
	if (p.transitionStepsRemaining > 0){
		p.x = p.previousX + (p.totalTransitionSteps-p.transitionStepsRemaining)*((p.i*tileWidth-p.previousX)/(1.0*p.totalTransitionSteps));
		p.y = p.previousY + (p.totalTransitionSteps-p.transitionStepsRemaining)*((p.j*tileHeight-p.previousY)/(1.0*p.totalTransitionSteps));
		p.transitionStepsRemaining -= 1;
	}
}

function runPhysics(){
	var p = currentLevel.player;
	if (p.dead) return;
	var lavaDef = null;
	for (var i=0;i<currentLevel.def.length;++i){
		def = currentLevel.def[i];
		if (def.type == lava){
			lavaDef = def;
			break;
		}
	}
	for (var i=0;i<currentLevel.tiles.length;++i){
		var tile = currentLevel.tiles[i];
		if (tile.type == platform){
			if (tile.breaking != null){
				if (tile.breaking > 0){
					tile.breaking -= 1;
					if (tile.breaking <= tileBreakSevere) tile.brokenStage = 3;
					else if (tile.breaking <= tileBreakMajor) tile.brokenStage = 2;
					else if (tile.breaking <= tileBreakMinor) tile.brokenStage = 1;
				} 
				if (tile.breaking === 0){
					// Transform to lava tile
					tile.type = lavaDef.type;
					tile.texture = lavaDef.texture;
					tile.brokenStage = 0;
				}
			}
		}
	}
	p.canJump = (currentLevel.def[currentLevel.map[p.j][p.i]].type == platform);
	if (!p.canJump){
		desiredJump = false;
	}
	if (p.moveDirection != null){
		playerFacing = p.moveDirection;
	}
	if (p.transitionStepsRemaining > 0){ // Must finish animation
		doPlayerAnimation(p);
	} else { // Do we need to change anything?
		var currentI = p.i;
		var currentJ = p.j;
		var currentTile = currentLevel.tiles[currentJ*currentLevel.map[0].length + currentI];
		// Are we dying?
		if (p.state == PlayerState.Dying){
			p.dead = true;
			return;
		}
		if (p.state == PlayerState.Winning){
			p.win = true;
			return;
		}
		if (p.state == PlayerState.Incapacitated){
			if (currentTile.type != lava){
				p.transitionStateTo(PlayerState.Incapacitated);
				return;
			} else {
				p.transitionStateTo(PlayerState.Dying);
				return;
			}
		}
		if (currentTile.type == platform){
			if (currentTile.breaking == null){
				currentTile.breaking = 60;
				//console.log('A tile started breaking...');
			}
		}
		if (p.state == PlayerState.Idle){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Running){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Jumping){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Crashing){
			checkForTransition(currentTile, p);
		}
		doPlayerAnimation(p);
	}
	
}