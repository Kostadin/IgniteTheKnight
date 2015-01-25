levels[5]={
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
			texture: "img/tiles/filler1.png"
		},
		{//9
			type: wall,
			texture: "img/tiles/filler2.png"
		},
		{//10
			type: wall,
			texture: "img/tiles/filler4.png"
		},
		{//11
			type: wall,
			texture: "img/tiles/filler6.png"
		},
		{//12
			type: wall,
			texture: "img/tiles/wall1b.png"
		},
		{//13
			type: wall,
			texture: "img/tiles/wall1c.png"
		},
		{//14
			type: wall,
			texture: "img/tiles/lavaWall34.png"
		},
		{//15
			type: wall,
			texture: "img/tiles/lavaWall5.png"
		},
		{//16
			type: wall,
			texture: "img/tiles/lavaWall4.png"
		},
		{//17
			type: wall,
			texture: "img/tiles/lavaWall3.png"
		},
		{//18
			type: wall,
			texture: "img/tiles/floor4.png"
		},
		{//19
			type: wall,
			texture: "img/tiles/floor3.png"
		},
		
	],
	map:[
		[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3],
		[0,1,0,0,2,1,1,3,3,3,1,0,0,0,1,1,3,3,3,3,3],
		[0,1,0,0,0,0,1,1,1,1,1,3,3,3,3,1,1,1,3,3,3],
		[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
		[0,1,3,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1],
		[0,1,3,0,0,0,1,1,0,1,3,1,0,0,1,1,1,1,0,0,1],
		[0,1,1,0,0,0,0,1,1,1,3,1,1,0,0,0,0,1,1,1,1],
		[0,0,1,1,1,1,3,3,1,3,3,1,1,1,1,1,0,0,0,3,0],
		[0,0,3,1,3,3,3,1,1,1,3,0,0,0,0,1,1,1,1,0,3],
		[0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,3,3,3,1,3,0],
		[0,0,1,0,0,1,3,1,1,1,1,1,0,0,0,0,0,1,1,0,3],
		[0,0,1,0,1,1,3,3,1,0,0,1,1,0,0,0,0,1,1,3,0],
		[0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,3,1,0,0,3],
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,3,1,0,3,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,3],
	],
	landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
	itemMap:[],
	startPosition: [1,1]

};