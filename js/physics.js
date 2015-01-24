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
	if (desiredMoveDirection != p.moveDirection){
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
	if ((nextJ<0)||(nextJ>=currentLevel.map.length)||(nextI<0)||(nextI>=currentLevel.map[0].length)){
		p.moveDirection = null;
		p.state = PlayerState.Idle;
		p.resetTransitionStepsTo(5);
	} else {
		if (currentTile.type == lava){
			if (p.state != PlayerState.Jumping){
				p.resetTransitionStepsTo(5);
				p.state = PlayerState.Dying;
				console.log(currentTile);
				console.log(p);
				alert('We are dying :(');
			} else {
				
			}
		} else if (currentTile.type == portal){
			p.resetTransitionStepsTo(5);
			p.state = PlayerState.Winning;
			alert('We are winning!');
		} else {
			var nextTile = currentLevel.tiles[nextJ*currentLevel.map[0].length + nextI];
			if (currentTile != nextTile){
				if (nextTile.type == wall){
					p.resetTransitionStepsTo(5);
					p.state = PlayerState.Crashing;
					p.moveDirection = null;
				} else {
					if (p.canJump && desiredJump){
						p.resetTransitionStepsTo(5);
						p.state = PlayerState.Jumping;
					} else {
						p.resetTransitionStepsTo(5);
						p.state = PlayerState.Running;
						p.i = nextI;
						p.j = nextJ;
					}
				}
			}
		}
	}
}

function runPhysics(){
	var p = currentLevel.player;
	if (p.dead) return;
	p.canJump = (currentLevel.map[p.j][p.i].type == platform);
	if (!p.canJump){
		desiredJump = false;
	}
	if (p.moveDirection != null){
		playerFacing = p.moveDirection;
	}
	if (p.transitionStepsRemaining > 0){ // Must finish animation
		p.x = p.previousX + (p.totalTransitionSteps-p.transitionStepsRemaining)*((p.i*tileWidth-p.previousX)/(1.0*p.totalTransitionSteps));
		p.y = p.previousY + (p.totalTransitionSteps-p.transitionStepsRemaining)*((p.j*tileHeight-p.previousY)/(1.0*p.totalTransitionSteps));
		p.transitionStepsRemaining -= 1;
	} else { // Do we need to change anything?
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
			p.resetTransitionStepsTo(5);
			return;
		}
		var currentI = p.i;
		var currentJ = p.j;
		var currentTile = currentLevel.tiles[currentJ*currentLevel.map[0].length + currentI];
		if (p.state == PlayerState.Idle){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Running){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Jumping){
			checkForTransition(currentTile, p);
		} else if (p.state == PlayerState.Crashing){
			checkForTransition(currentTile, p);
		}
	}
	
}