/*/***
 * MyVehicleBody
 * @constructor
 */
var degToRad = Math.PI / 180.0;

class MyVehicle extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.x = 0;
		this.y = 0;
		this.z = 0;

		this.back = 0;
		this.left = 0;
		this.rigth = 0;

		this.velocity = 0;
		this.acelaration = 0;
		
		this.wheelAngle = 0;
		this.bodyAngle = 0;
		this.rotateVelocity = 0;		


 		this.eyesAppearance = new CGFappearance(this.scene);
    	this.eyesAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.eyesAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.eyesAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.eyesAppearance.setShininess(20);
    	this.eyesAppearance.loadTexture("resources/images/eyes.png");
    	
 		this.teethAppearance = new CGFappearance(this.scene);
    	this.teethAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.teethAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.teethAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.teethAppearance.setShininess(20);
    	this.teethAppearance.loadTexture("resources/images/teeth.png");

    	this.lightAppearance = new CGFappearance(this.scene);
    	this.lightAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.lightAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.lightAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.lightAppearance.setShininess(20);
    	this.lightAppearance.loadTexture("resources/images/light.png");

    	this.windowAppearance = new CGFappearance(this.scene);
    	this.windowAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.windowAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.windowAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.windowAppearance.setShininess(20);
    	this.windowAppearance.loadTexture("resources/images/window.png");

    	this.window2Appearance = new CGFappearance(this.scene);
    	this.window2Appearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.window2Appearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.window2Appearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.window2Appearance.setShininess(20);
    	this.window2Appearance.loadTexture("resources/images/window2.png");

    	this.rustAppearance = new CGFappearance(this.scene);
    	this.rustAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.rustAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.rustAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.rustAppearance.setShininess(20);
    	this.rustAppearance.loadTexture("resources/images/rust2.png");


		//car components
    	this.body = new MyUnitCubeQuad(scene);
    	this.up = new MyUnitCubeQuad(scene);
		this.radiator = new MyRadiator(scene);
		
		this.eyes = new Plane(scene, 30, 0,1,0,1);
		this.teeth = new Plane (scene, 30, 0,1,0,1);
		this.windowR = new Plane (scene, 30, 0,1,0,1);
		this.windowL = new Plane (scene, 30, 0,1,0,1);

		this.rHeadlight = new MyCylinder(scene, 50, 10);
		this.lHeadlight = new MyCylinder(scene, 50, 10);

		this.rHeadlightLamp = new MySemiSphere(scene, 50, 10);
		this.lHeadlightLamp = new MyCircle(scene, 50);

		this.backLamp = new MySemiSphere(scene, 50, 10);
		this.backLamp2 = new MySemiSphere(scene, 50, 10);

		this.carHook = new MyCarHook(scene);

		this.wheel1 = new MyWheel(scene);
		this.wheel2 = new MyWheel(scene);
		this.wheel3 = new MyWheel(scene);
		this.wheel4 = new MyWheel(scene);
	};
	
	display() {
	
	this.scene.translate(this.x, this.y, this.z);
	this.scene.rotate(this.bodyAngle * degToRad, 0,1,0);
	this.scene.scale(0.7, 0.7, 0.7);
	
	//BODY
	this.scene.pushMatrix();
		this.scene.translate(0, 1, 0);
		this.scene.scale(4.5, 1, 2.5);
		this.rustAppearance.apply();
		this.body.display();
	this.scene.popMatrix();

	//UP aka HEAD
	this.scene.pushMatrix();
		this.scene.translate(0, 2, 0);
		this.scene.scale(2, 1, 2.2);
		this.up.display();
	this.scene.popMatrix();

	//HEADLIGHTS
	this.scene.pushMatrix();
		this.scene.scale(3.4, 0.2, 0.2);
		this.scene.translate(-0.295, 7.5, 6);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.rHeadlight.display();
		this.scene.translate(12, 0, 0);
		this.lHeadlight.display();
	this.scene.popMatrix();

	// car semiSpheres
	this.scene.pushMatrix();
		this.scene.scale(0.2, 0.2, 0.2);
		this.scene.translate(-5, 7.5, 6);
		this.scene.rotate(270*degToRad, 0, 1, 0);
		this.backLamp.display();
		this.scene.translate(-12, 0, 0);
		this.backLamp2.display();
	this.scene.popMatrix();

	//car lights
	this.scene.pushMatrix();
		this.scene.scale(0.2, 0.2, 0.2);
		this.scene.translate(11.9, 7.5, 6);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.lightAppearance.apply();
		this.rHeadlightLamp.display();
		this.rustAppearance.apply();
		this.scene.translate(12, 0, 0);
		this.lHeadlightLamp.display();
	this.scene.popMatrix();

/*		//car lights
	this.scene.pushMatrix();
		this.scene.scale(0.2, 0.2, 0.2);
		this.scene.translate(11.9, 7.5, 6);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.lightAppearance.apply();
		this.rHeadlightLamp.display();
		this.rustAppearance.apply();
		this.scene.translate(12, 0, 0);
		this.lHeadlightLamp.display();
	this.scene.popMatrix();
*/
	// car hook 
	this.scene.pushMatrix();
		this.scene.translate(-1.6, 2.4, 0);
		this.scene.scale(0.2, 0.2, 0.5);
		this.scene.rotate(-90 * degToRad, 0, 1, 0);
		this.carHook.display();
	this.scene.popMatrix();

	// car radiator
	this.scene.pushMatrix();
		this.scene.translate(1.6, 1.5, 0);
		this.scene.rotate(270 * degToRad, 1, 0, 0);
		this.scene.scale(0.6, 0.6, 0.4);
		this.radiator.display();
	this.scene.popMatrix();

		// car eyes
	this.scene.pushMatrix();
		this.scene.translate(1.01, 2, 0);
		this.scene.scale(2, 1, 2);
		this.scene.rotate(90 * degToRad, 0, 1, 0);
		this.eyesAppearance.apply();
		this.eyes.display();
	this.scene.popMatrix();

		// car teeth
	this.scene.pushMatrix();
		this.scene.translate(2.31, 1, 0);
		this.scene.scale(2, 0.6, 1);
		this.scene.rotate(90 * degToRad, 0, 1, 0);
		this.teethAppearance.apply();
		this.teeth.display();
	this.scene.popMatrix();

		// car windowsR
	this.scene.pushMatrix();
		this.scene.translate(0, 2, -1.11);
		this.scene.scale(2, 1, 1);
		this.scene.rotate(180 * degToRad, 0, 1, 0);
		this.windowAppearance.apply();
		this.windowR.display();
	this.scene.popMatrix();
		
		// car windowsL
	this.scene.pushMatrix();
		this.scene.translate(0, 2, 1.11);
		this.scene.scale(2, 1, 1);
		this.window2Appearance.apply();
		this.windowL.display();
	this.scene.popMatrix();

	// back left wheel
	this.scene.pushMatrix();
		this.scene.scale(0.6, 0.6, 0.6);
		this.scene.translate(-2.5, 0.7, 1.8);
		this.wheel3.display();
	this.scene.popMatrix();

	// back rigth wheel
	this.scene.pushMatrix();
		this.scene.scale(0.6, 0.6, 0.6);
		this.scene.translate(-2.5, 0.7, -2.3);
		this.wheel4.display();
	this.scene.popMatrix();

	this.scene.rotate(this.wheelAngle * degToRad, 0,0,1);
	
	// front left wheel
	this.scene.pushMatrix();
		this.scene.scale(0.6, 0.6, 0.6);
		this.scene.translate(2.5, 0.7, 1.8);
		this.wheel1.display();
	this.scene.popMatrix();

	// front rigth wheel
	this.scene.pushMatrix();
		this.scene.scale(0.6, 0.6, 0.6);
		this.scene.translate(2.5, 0.7, -2.3);
		this.wheel2.display();
	this.scene.popMatrix();
	};

	//sets
	setWheelAng(angle){
		if(this.wheelAngle >= 45)
		{
			this.wheelAngle = angle;
		}
		else{
			this.wheelAngle = angle;
		}
	};	

	setBodyAng(angle){
		if(this.bodyAngle >= 360)
		{
			this.bodyAngle = angle;
		}
		else{
			this.bodyAngle = angle;
		}
	};

	setVelocity(vel){
		if(this.velocity >= 10)
		{
			this.velocity = 10;
		}
		else{
			this.velocity = this.velocity + vel;
		}
	};

	setAcelaration(ace){
		if(this.acelaration >= 5)
		{
			this.acelaration = 5;
		}
		else{
			this.acelaration = this.acelaration + ace;
		}
	};

	setRotateVelocity(vel){
		if(this.acelaration >= 10)
		{
			this.rotateVelocity = 10;
		}
		else{
			this.rotateVelocity = this.rotateVelocity + vel;
		}
	};

	setX(x){
		this.x = x;
	}

	setY(y){
		this.y = y;
	};

	setZ(z){
		this.z = z;
	};

	updateCoordinates(deltaTime){

		this.velocity = this.acelaration;
		this.setWheelAng(this.bodyAngle + this.rotateVelocity);
		this.setBodyAng( (this.bodyAngle + this.rotateVelocity) * 2);

		if(this.velocity < 0){
			this.back = 1;
		}
		else{
			this.back = 0;
		}

		if(this.acelaration != 0){
			this.z = this.z + Math.sin(this.wheelAngle * degToRad * this.velocity);
			this.x = this.x + Math.cos(this.wheelAngle * degToRad * this.velocity);
		}
		//this.wheel1.update(deltaTime, this.left, this.rigth, this.back, this.velocity, this.rotateVelocity); 	
		//this.wheel2.update(deltaTime, this.left, this.rigth, this.back, this.velocity, this.rotateVelocity);
	};

 };
 



 	



