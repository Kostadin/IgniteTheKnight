function getSpriteCoords($xmlData, name) {
	var $st = $xmlData.find('SubTexture[name="' + name + '"]');
	return {
		x: -parseInt($st.attr('x')), 
		y: -parseInt($st.attr('y'))
	};
}

function getPlayerAnimationFrame(frame, state, direction) {
	var dir = "s";	//left/right
	if (direction == Direction.Up) dir = "b";
	if (direction == Direction.Down) dir = "f";

	switch (state) {
		case PlayerState.Running: {
			frame = frame % playerRunAnimation.length;
			return getSpriteCoords($playerXml, dir+playerRunAnimation[frame]);
			break;
			}
		case PlayerState.Idle: {
			frame = frame % playerMiscAnimation.length;
			return getSpriteCoords($playerXml, "i"+playerMiscAnimation[frame]);
			break;
			}
		case PlayerState.Jumping: {
			return getSpriteCoords($playerXml, "j"+dir+playerMiscAnimation[0]);
			break;
			}
		case PlayerState.Crashing: {
			frame = frame % playerMiscAnimation.length;
			return getSpriteCoords($playerXml, "c"+dir+playerMiscAnimation[frame]);
			}
		case PlayerState.Winning: {
			return getSpriteCoords($playerXml, "gg"+playerMiscAnimation[0]);
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

function getGenericAnimationFrame(frame, totalAnimationFrames, $xml)
{
	frame = frame % totalAnimationFrames;
	
	return getSpriteCoords($xml, frame + ".png");
}