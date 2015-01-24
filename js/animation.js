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

function getPlayerAnimationFrame(frame, animation, color) {
// Rework
return {x:0, y:0};

	switch (animation) {
		case "run": {
			frame = frame % playerRunAnimation.length;
			var sprite = getSpriteCoords(color+playerRunAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		case "idle": {
			frame = frame % playerIdleAnimation.length;
			var sprite = getSpriteCoords(color+playerIdleAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		case "jump": {
			frame = frame % playerJumpAnimation.length;
			var sprite = getSpriteCoords(color+playerJumpAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		case "fall": {
			frame = frame % playerFallAnimation.length;
			var sprite = getSpriteCoords(color+playerFallAnimation[frame]);
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
	frame = frame % playerDeathAnimation.length;
	var sprite = getDeathSpriteCoords(playerDeathAnimation[frame]);
	var info = {
		x: sprite.x,
		y: sprite.y
		};
	return info;
}

