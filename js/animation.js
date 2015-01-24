function getSpriteCoords($xmlData, name) {
	var $st = $xmlData.find('SubTexture[name="' + name + '"]');
	return {
		x: -parseInt($st.attr('x')), 
		y: -parseInt($st.attr('y'))
	};
}

function getPlayerAnimationFrame(frame, state, direction) {
	switch (state) {
		case PlayerState.Running: {
			var dir = "s";	//left/right
			if (direction == Direction.Up) dir = "b";
			if (direction == Direction.Down) dir = "f";
			frame = frame % playerRunAnimation.length;
			var sprite = getSpriteCoords($spriteXml, dir+playerRunAnimation[frame]);
			var info = {
				x: sprite.x,
				y: sprite.y
				};
			break;
			}
		case PlayerState.Idle: {
			frame = frame % playerIdleAnimation.length;
			var sprite = getSpriteCoords($spriteXml, playerIdleAnimation[frame]);
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

function getTileAnimationFrame(frame, type) {
// Rework
	frame = frame % tileAnimation.length;
	var typeName = "";
	switch (type) {
		case platform: {
			typeName = "Platform";
			break;
			}
		case lava: {
			typeName = "Lava";
			break;
			}
		default: {
			var info = {
				x: 0,
				y: 0
			};
			return info;
			break;
			}
	}
	
	var sprite = getSpriteCoords($tileXml, typeName+tileAnimation[frame]);
	var info = {
		x: sprite.x,
		y: sprite.y
	};

	return info;
}