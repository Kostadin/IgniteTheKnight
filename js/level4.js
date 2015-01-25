levels[4]={
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
	],
	map:[
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[3,1,1,1,1,0,1,0,0,3,3,3,3,1,1,1,1,3,3,3,0],
		[3,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0],
		[3,1,1,1,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,1,0],
		[3,3,3,1,0,0,1,0,0,1,3,3,3,3,3,3,3,3,3,1,0],
		[0,0,3,1,1,3,1,1,1,1,3,3,1,1,1,0,1,1,2,1,0],
		[3,3,3,3,1,3,0,1,1,1,3,3,1,0,1,0,1,0,0,0,0],
		[3,1,1,1,1,3,0,1,1,1,1,1,1,0,1,0,1,1,3,0,0],
		[3,1,0,0,0,3,3,3,1,0,3,1,1,0,1,1,0,1,3,3,0],
		[3,1,0,0,0,1,1,1,1,0,3,0,0,0,0,1,0,1,1,1,0],
		[3,1,1,0,0,1,1,1,3,3,3,0,0,1,1,1,0,0,0,1,0],
		[3,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0],
		[3,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
	],
	landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
	itemMap:[],
	startPosition: [2,13]
};