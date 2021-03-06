﻿levels[1]={
	def:[
		{//0
			type: lava,
			texture: "img/sprites/tiles.png"
		},
		{//1
			type: platform,
			texture: "img/sprites/tiles.png"
		},
		{//2
			type: portal,
			texture: "img/tiles/Portal.png"
		},
		{//3
			type: wall,
			texture: "img/tiles/Wall1.png"
		},
		{//4
			type: wall,
			texture: "img/tiles/rightWall.png"
		},
		{//5
			type: wall,
			texture: "img/tiles/topWall.png"
		},
		{//6
			type: wall,
			texture: "img/tiles/leftWall.png"
		},
		{//7
			type: wall,
			texture: "img/tiles/filler3.png"
		},
		{//8
			type: wall,
			texture: "img/tiles/upLeftWall.png"
		},
		{//9
			type: wall,
			texture: "img/tiles/upRightWall.png"
		},
		{//10
			type: wall,
			texture: "img/tiles/lavaWall3.png"
		},
		{//11
			type: wall,
			texture: "img/tiles/lavaWall4.png"
		},
		{//12
			type: wall,
			texture: "img/tiles/lavaWall34.png"
		}
	],
	map:[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
		[3, 3, 3, 3, 3, 3, 3, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0], 
		[1, 1, 1, 1, 1, 1, 1, 6, 4, 0, 0, 0, 0, 8, 9, 0, 0], 
		[0, 0, 0, 8, 9, 0, 1, 6, 4, 1, 1, 1, 0,10,10, 0, 0], 
		[0, 0, 0,10,10, 0, 1, 3, 3, 1, 0, 1, 0, 0, 0, 0, 0], 
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0], 
		[0, 8, 9, 0, 8, 9, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0], 
		[0,11,11, 0,12,12, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0], 
		[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], 
		[2, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
		[0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
		[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
	itemMap:[],
	startPosition: [0,2]
};