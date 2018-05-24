
var degToRad = Math.PI / 180.0;

class MyCarHook extends CGFobject
{
	constructor(scene) 
	{
		super(scene);

		this.side = new MyTrapezium(scene, 0.4, 0.8, 10, 0, 1, 0, 1);
		this.pole = new MyCylinder(scene, 30, 10);

		this.semiSphere = new MySemiSphere(scene, 30, 10);

		this.initBuffers();


 		this.rustAppearance = new CGFappearance(this.scene);
    	this.rustAppearance.setAmbient(0.5, 0.5, 0.5, 0.5);
    	this.rustAppearance.setDiffuse(0.9, 0.9, 0.9, 0.5);
    	this.rustAppearance.setSpecular(0.1, 0.1, 0.1, 0.5);
    	this.rustAppearance.setShininess(20);
    	this.rustAppearance.loadTexture("resources/images/rust2.png");

	};
	

	display() 
	{
		
		this.scene.pushMatrix();
			this.scene.rotate(30 * degToRad, 1, 0, 0);
			this.rustAppearance.apply();
			this.side.display();
			this.scene.rotate(90 * degToRad, 0, 1, 0);
			this.side.display();
			this.scene.rotate(90 * degToRad, 0, 1, 0);
			this.side.display();
			this.scene.rotate(90 * degToRad, 0, 1, 0);
			this.side.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.scale(0.1, 7, 0.1);
			this.scene.translate(0, 0.5, 25);
			this.scene.rotate(90 * degToRad, 1, 0, 0);
			this.pole.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.scale(0.5, 0.5, 0.5);
			this.scene.translate(0, 8, 5);
			this.semiSphere.display();
			this.scene.rotate(180*degToRad, 0, 1, 0);
			this.semiSphere.display();
			this.scene.translate(0, -15, 0);
			this.scene.scale(0.5, 0.5, 0.5);
			this.semiSphere.display();
			this.scene.rotate(180*degToRad, 0, 1, 0);
			this.semiSphere.display();
		this.scene.popMatrix();



	};
};
