levels[0]={
	def:[
		{
			type: lava,
			texture: "img/sprites/tiles.png"
		},
		{
			type: platform,
			texture: "img/sprites/tiles.png"
		},
		{
			type: portal,
			texture: "img/tiles/Portal.png"
		},
		{
			type: wall,
			texture: "img/tiles/Wall.png"
		}
	],
	map:[
		[1,1,1,1,1,1,1,3,2,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,3,0,1,1,1,0,3,0,0,0],
		[0,0,0,0,0,0,1,3,0,1,0,1,0,0,0,0,0],
		[0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
		[0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0],
		[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0],
		[2,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0],
		[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0]
	],
	landmarks:[
		[5,4,"img/landmarks/Stalactite.png"],
		[6,7,"img/landmarks/Stalagmite.png"]
	],
	itemMap:[
		{
			x: 3,
			y: 0, 
			type: Items.Key,
			texture: "img/sprites/key.png"
		}
	],
	startPosition: [0,0]
};