/*/***
 * MyWheel
 * @constructor
 */
var degToRad = Math.PI / 180.0;

class MyWheel extends CGFobject
{

	constructor(scene)
	{
		super(scene);
		this.cylinder = new MyCylinder(scene, 12, 1);
 		this.circle = new MyCircle(scene, 20);
 		this.angle = 0;

 		this.rimAppearance = new CGFappearance(this.scene);
    	this.rimAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.rimAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.rimAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.rimAppearance.setShininess(20);
    	this.rimAppearance.loadTexture("resources/images/rims.png");

 		this.wheelAppearance = new CGFappearance(this.scene);
    	this.wheelAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.wheelAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.wheelAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.wheelAppearance.setShininess(20);
    	this.wheelAppearance.loadTexture("resources/images/wheel.png");		
	};
	
	display() {

 	var degToRad = Math.PI / 180.0;
	
	//front of the wheel
	this.scene.pushMatrix();
		this.scene.scale(1, 1, 0.5);
		this.wheelAppearance.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	//side of the wheel
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.rimAppearance.apply();
		this.circle.display();
	this.scene.popMatrix();
	
	//other side of the wheel
	this.scene.pushMatrix();
		this.scene.rotate(180 * degToRad,0,1,0)
		//this.scene.translate(0,0,0.5);
		this.rimAppearance.apply();
		this.circle.display();
	this.scene.popMatrix();
	};   

 	setAngle(angle){
    	this.angle = angle;
 	};
 };
 



 



