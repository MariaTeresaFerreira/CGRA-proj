/*/***
 * MyWheel
 * @constructor
 */
var degToRad = Math.PI / 180.0;

class MyCompleteCylinder extends CGFobject
{

	constructor(scene)
	{
		super(scene);
		this.cylinder = new MyCylinder(scene, 12, 1);
 		this.circle = new MyCircle(scene, 20);
 		this.angle = 0;
	
	};
	
	display() {

 	var degToRad = Math.PI / 180.0;
	this.scene.pushMatrix();
 	this.scene.rotate(90 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, -0.5);

	//front of the wheel
	this.scene.pushMatrix();
		this.scene.scale(1, 1, 0.5);
		this.cylinder.display();
	this.scene.popMatrix();

	//side of the wheel
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.circle.display();
	this.scene.popMatrix();
	
	//other side of the wheel
	this.scene.pushMatrix();
		this.scene.rotate(180 * degToRad,0,1,0);
		this.circle.display();
	this.scene.popMatrix();
	this.scene.popMatrix();
	};   

 	setAngle(angle){
    	this.angle = angle;
 	};
 };
 



 



