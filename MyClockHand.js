/**
 * MyClockHand
 * 
 *@constructor
 */


 class MyClockHand extends CGFobject 
 {
 	constructor(scene,x,y,z){

 		super(scene);
 		
 		this.cylinder = new MyCylinder(scene,12,1);
 		this.x = x;
 		this.y = y;
 		this.z = z;
 		this.angle=0;

 	this.clockhandAppearance = new CGFappearance(this.scene);
    this.clockhandAppearance.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.clockhandAppearance.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.clockhandAppearance.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.clockhandAppearance.setShininess(0);
 		 
 	};

 	display()
 	{
 	  this.scene.pushMatrix();
 	  this.scene.translate(0,0,0.5);
 	  this.scene.rotate(-this.angle*Math.PI/180,0,0,1);
 	  this.scene.scale(this.x,this.y,this.z);
 	  this.scene.rotate(-Math.PI/2,1,0,0);
 	  this.clockhandAppearance.apply();
 	  this.cylinder.display();
 	  this.scene.popMatrix();
 	};

 	setAngle(angle){
    this.angle = angle;
 	};
 	

   
 };




