var maxSideSpeedPerSec = 256;
var maxSideSpeed = maxSideSpeedPerSec/fps;

function addVectors(a,b){
	return [a[0]+b[0],a[1]+b[1]]
}

function collision(p,t){
	var points = [[p.x,p.y],[p.x+p.width,p.y],[p.x,p.y+p.height],[p.x+p.width,p.y+p.height],
				  [t.x,t.y],[t.x+t.width,t.y],[t.x,t.y+t.height],[t.x+t.width,t.y+t.height]];
	var bounds = [[t.x,t.x+t.width,t.y,t.y+t.height],[p.x,p.x+p.width,p.y,p.y+p.height]];
	for(var i=0;i<points.length;++i){
		var point = points[i];
		var bound = bounds[Math.floor(i/4)];
		if ((bound[0]<=point[0])&&(point[0]<bound[1])&&(bound[2]<point[1])&&(point[1]<bound[3])){
			return true;
		}
	}
	return false;
}

function runPhysics(){
	
}