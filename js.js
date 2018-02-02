function Circle(class1, radius, color, x, y){
	this.radius = radius || 20;
	this.color = color || '#ddd';
	this.x = x;
	this.y = y;
	this.class1 = class1;

	this.div = document.createElement('div');
	var style = 'width: ' + this.radius + 'px;';
	style += 'height: ' + this.radius + 'px;';
	style += 'background: ' + this.color + ';';
	style += 'top:'+ this.y +'%;';
	style += 'left: '+ this.x +'%;';
	style += 'position: absolute;';
	style += 'border-radius: 50%;';

	this.div.style.cssText = style;
	this.div.classList.add(class1);
	document.body.appendChild(this.div);
}


function MoveCircle(class1, radius, color, orbit, interval, x, y, angle, speed){
	
	this.circle = new Circle(class1, radius, color);
	this.angle = angle;
	this.speed = speed;
	this.orbit = orbit;
	this.radius = radius;
	this.x = x;
	this.y = y;
	this.interval = interval || 1000;
	this.circle.div.className += ' planet';
	var elem = this;	
	
	setInterval(function(){

		elem.angle += speed;
		elem.circle.div.style.left = orbit * Math.cos(elem.angle*Math.PI/180) + ((x-radius/2)+rSun/2) + 'px';
		elem.circle.div.style.top =  orbit * Math.sin(elem.angle*Math.PI/180) + ((y-radius/2)+rSun/2) + 'px';

	}, this.interval);
}


function Satelite(class1, radius, color, orbit, interval, angle, speed){

	this.satelite = new Circle(class1, radius, color);
	this.angle = angle;
	this.speed = speed;
	this.orbit = orbit;
	this.radius = radius;
	this.interval = interval || 1000;
	var elem = this;	

	var arrPlanets = document.getElementsByClassName('planet');

	setInterval(function(){
		for (var i = 0; i < arrPlanets.length; i++) {	

		if (arrPlanets[i].classList.contains(elem.satelite.div.className)) {

			coords1 = arrPlanets[i].getBoundingClientRect();
			var coordX1 = coords1.left;
			var coordY1 = coords1.top;
			var width = coords1.right - coords1.left;
		}

		elem.angle += speed;
		elem.satelite.div.style.left = orbit * Math.cos(elem.angle*Math.PI/180) + (coordX1-radius/2) + width/2 + 'px';
		elem.satelite.div.style.top =  orbit * Math.sin(elem.angle*Math.PI/180) + (coordY1-radius/2) + width/2 + 'px';
		
		}
	}, this.interval);

}

var rSun = 100;

var sun = new Circle('fuck', rSun, '#ff0', 50, 45);

var rect = sun.div.getBoundingClientRect();

		var coordX = rect.left;
		var coordY = rect.top;


new MoveCircle('planet1', 7, '#cff', 60, 10, coordX, coordY, 51, 1.5);
new MoveCircle('planet2', 15, '#fc0', 80, 10, coordX, coordY, 35, 1.3);
new MoveCircle('planet3', 20, '#00f', 100, 10, coordX, coordY, 69, 1);
new MoveCircle('planet4', 10, '#930', 130, 10, coordX, coordY, 71, 0.8);
new MoveCircle('planet5', 50, '#fc6', 200, 10, coordX, coordY, 25, 0.6);
new MoveCircle('planet6', 45, '#ccc', 270, 10, coordX, coordY, 9, 0.4);
new MoveCircle('planet7', 30, '#6ff', 330, 10, coordX, coordY, 15, 0.3);
new MoveCircle('planet8', 30, '#39f', 380, 10, coordX, coordY, 29, 0.2);
new MoveCircle('planet9', 5, '#960', 420, 10, coordX, coordY, 49, 0.1);

new Satelite('planet3', 3, '#999', 15, 10, 0, 0.4);
new Satelite('planet6', 4, '#555', 35, 10, 0, 1);
new Satelite('planet6', 4, '#555', 35, 10, 6, 2);
new Satelite('planet6', 4, '#555', 35, 10, 12, 2);
new Satelite('planet6', 4, '#555', 35, 10, 118, 1);
new Satelite('planet6', 4, '#555', 35, 10, 124, 2);
new Satelite('planet6', 4, '#555', 35, 10, 130, 2);
new Satelite('planet6', 4, '#555', 35, 10, 136, 1);
new Satelite('planet6', 4, '#555', 35, 10, 140, 2);
new Satelite('planet6', 4, '#555', 35, 10, 246, 2);
new Satelite('planet6', 4, '#555', 35, 10, 252, 1);
new Satelite('planet6', 4, '#555', 35, 10, 258, 2);
new Satelite('planet6', 4, '#555', 35, 10, 264, 2);
new Satelite('planet6', 4, '#555', 35, 10, 346, 1);
new Satelite('planet6', 4, '#555', 35, 10, 352, 2);
new Satelite('planet6', 4, '#555', 35, 10, 358, 2);
new Satelite('planet6', 4, '#555', 35, 10, 364, 1);
new Satelite('planet5', 10, 'red', 40, 10, 0, 0.1);