levels[2]={
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
			texture: "img/tiles/filler2.png"
		},
		{//8
			type: wall,
			texture: "img/tiles/filler3.png"
		},
		{//9
			type: wall,
			texture: "img/tiles/upLeftWall.png"
		},
		{//10
			type: wall,
			texture: "img/tiles/upRightWall.png"
		},
		{//11
			type: wall,
			texture: "img/tiles/lavaWall3.png"
		},
		{//12
			type: wall,
			texture: "img/tiles/lavaWall34.png"
		},
		{//13
			type: wall,
			texture: "img/raw/tiles/lava_animated/2.png"
		}
	],
	map:[
		[4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11, 6], 
		[4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 6], 
		[4, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 9,10, 1, 6], 
		[4, 1, 1, 1, 1, 1, 1, 1, 9,10, 1, 1, 3, 3, 3, 3, 3, 3, 1, 6], 
		[4, 1, 1, 1, 1, 1, 1, 1, 6, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 6], 
		[4, 1, 9,10,12,12, 9, 5, 7, 4, 1, 1, 1, 1, 1, 9,10, 0, 1, 6], 
		[4, 1, 6, 4,13,13, 6, 4, 3, 3, 1, 1, 0, 0, 1, 6, 4, 1, 1, 6], 
		[4, 1, 6, 4,13,13, 6, 4, 1, 1, 1, 1, 0, 0, 1, 6, 4, 1, 1, 6], 
		[4, 1, 6, 4, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 1, 1, 6], 
		[4, 1, 6, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 6], 
		[4, 1, 6, 4, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 6], 
		[4, 1, 3, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 6], 
		[4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6], 
		[3, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6], 
		[13,9, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 6]
	],
	landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
	
itemMap:[],
	startPosition: [1,1]//14,10
};