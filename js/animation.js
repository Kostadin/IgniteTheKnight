function getSpriteCoords(name) {
	var $st = $spriteXml.find('SubTexture[name="' + name + '"]');
	return {
		x: -parseInt($st.attr('x')), 
		y: -parseInt($st.attr('y'))
	};
}

function getDeathSpriteCoords(name) {
	var $st = $deathXml.find('SubTexture[name="' + name + '"]');
	return {
		x: -parseInt($st.attr('x')), 
		y: -parseInt($st.attr('y'))
	};
}

function getPlayerAnimationFrame(frame, state, direction) {
// Rework
	switch (state) {
		case PlayerState.Run: {
			var dir = "s";	//left/right
			if (direction == "up") dir = "b";
			if (direction == "down") dir = "f";
			frame = frame % playerRunAnimation.length;
			var sprite = getSpriteCoords(dir+playerRunAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		case PlayerState.Idle: {
			frame = frame % playerIdleAnimation.length;
			var sprite = getSpriteCoords(playerIdleAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		default: {
			var info = {
				x: 0,
				y: 0
				};
			break;
			}
	}
		
	return info;
}


function getPlayerDeathAnimationFrame (frame) {
// Rework
return {x:0, y:0};

	frame = frame % playerDeathAnimation.length;
	var sprite = getDeathSpriteCoords(playerDeathAnimation[frame]);
	var info = {
		x: sprite.x,
		y: sprite.y
		};
	return info;
}

