/*/***
 * MyVehicle
 * @constructor
 */
class MyVehicle extends CGFobject
{


	constructor(scene)
	{
		super(scene);
		
		/*
		this.cylinder = new MyCylinder(scene, 12, 1);
 		this.circle = new MyCircle(scene, 20);

 		this.handH = new MyClockHand(scene,0.05,0.4,0.01);
 		this.handM = new MyClockHand(scene,0.05,0.6,0.01);
 		this.handS = new MyClockHand(scene,0.05,0.8,0.01);

 		this.clockAppearance = new CGFappearance(this.scene);
    	this.clockAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.clockAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.clockAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.clockAppearance.setShininess(20);
    	this.clockAppearance.loadTexture("../resources/images/clock.png");

	    this.blankAppearance = new CGFappearance(this.scene);
   		this.blankAppearance.setAmbient(0.0, 0.0, 0.0, 0.0);
   	 	this.blankAppearance.setDiffuse(0.0, 0.0, 0.0, 0.0);
    	this.blankAppearance.setSpecular(0.0, 0.0, 0.0, 0.0);
    	this.blankAppearance.setShininess(0); */

    	this.bottom = new MyUnitCubeQuad(scene);
    	this.up = new MyUnitCubeQuad(scene);
		
	};
	
	display() {


	/*
 	var degToRad = Math.PI / 180.0;
	
	//side of the clock
	this.scene.pushMatrix();
		this.scene.scale(1, 1, 0.5);
		this.blankAppearance.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	//front of the clock
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.clockAppearance.apply();
		this.circle.display();
	this.scene.popMatrix();
	
	//hours pointer
	this.scene.pushMatrix();
		
	this.handH.display();
	this.handM.display();
	this.handS.display();


	this.scene.popMatrix(); */

	this.scene.pushMatrix();
		this.scene.translate(0, 1, 0);
		this.scene.scale(2, 1, 1.5);
		this.bottom.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 1.5, 0);
		this.scene.scale(1, 0.5, 1)
		this.up.display();
	this.scene.popMatrix();



	};
 	
 	/*
	update(delta) {
		
 		this.handS.setAngle(this.handS.angle + (delta/1000 * 360 / 60));
		this.handM.setAngle(this.handM.angle + (delta/1000 * 360 / (60 * 60)));
		this.handH.setAngle(this.handH.angle + (delta/1000 * 360 / (60 * 60 * 12)));

	};
	*/   

 };
 



 



