/*/***
 * MyRadiator
 * @constructor
 */
var degToRad = Math.PI / 180.0;


class MyRadiator extends CGFobject
{

	constructor(scene)
	{
		super(scene);
		this.cylinder = new MyCylinder(scene, 12, 1);
 		this.circle = new MyCircle(scene, 50);

 		this.radiatorAppearance = new CGFappearance(this.scene);
    	this.radiatorAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.radiatorAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.radiatorAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.radiatorAppearance.setShininess(20);
    	this.radiatorAppearance.loadTexture("../resources/images/radiator.png");


 		this.rust1Appearance = new CGFappearance(this.scene);
    	this.rust1Appearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.rust1Appearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.rust1Appearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.rust1Appearance.setShininess(20);
    	this.rust1Appearance.loadTexture("../resources/images/rust1.png");

	    this.blankAppearance = new CGFappearance(this.scene);
   		this.blankAppearance.setAmbient(0.0, 0.0, 0.0, 0.0);
   	 	this.blankAppearance.setDiffuse(0.0, 0.0, 0.0, 0.0);
    	this.blankAppearance.setSpecular(0.0, 0.0, 0.0, 0.0);
    	this.blankAppearance.setShininess(0);
		
	};
	
	display() {

 	var degToRad = Math.PI / 180.0;
	
	//front of the wheel
	this.scene.pushMatrix();
		this.scene.scale(1, 1, 0.5);
		this.rust1Appearance.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	//side of the wheel
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.radiatorAppearance.apply();
		this.circle.display();
	this.scene.popMatrix();
	};   

 };
 



 



