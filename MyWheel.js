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
 		this.direction = 0;	

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
	
	this.scene.rotate(this.angle * degToRad, 0,0,1);	
	this.scene.rotate(this.direction * degToRad, 0,1,0);

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

 	update(deltaTime, left, right, back, fVelocity, rVelocity) {
    
    if(back == 1){
    this.angle = this.angle - deltaTime * 0.36 * fVelocity;
    	if (Math.abs(this.angle) >= 360) {
        	this.angle = this.angle % 360;
    	}
    }
    if(back == 0){
    this.angle = this.angle + deltaTime * 0.36 * fVelocity;
    	if (Math.abs(this.angle) >= 360) {
        	this.angle = this.angle % 360;
    	}
    }
    
	if(right == 1){
    this.direction = this.direction + deltaTime * rVelocity;
    	if (Math.abs(this.direction) >= 45) {
        	this.direction = 45;
    	}
    }

    if(left == 1){
    this.direction = this.direction + deltaTime * rVelocity;
    	if (Math.abs(this.direction) >= 45) {
        	this.direction = -45;
    	}
    }

    if(left == 0 && right == 0){
    	this.angle = this.angle - 10;
    	if (Math.abs(this.angle) < 10) {
        	this.angle = 0;
    	}
    }

 	}
 };
 



 



