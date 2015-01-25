levels[0]={
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
		}
	],
	map:[
		[7,7,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
		[7,7,4,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,2],
		[4,3,3,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0],
		[4,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0],
		[4,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0],
		[4,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1],
		[4,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1],
		[4,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1],
		[4,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1],
		[4,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,9,5],
		[4,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,6,7],
		[4,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,6,7],
		[4,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,6,7],
		[4,1,1,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],
		[3,3,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
	],
landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
itemMap:[],
startPosition: [1,13]
};