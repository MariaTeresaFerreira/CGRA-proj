/*/***
 * MyVehicle
 * @constructor
 */
var degToRad = Math.PI / 180.0;

class MyMagnet extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.pole = new MyCompleteCylinder(scene, 10, 10);

	};
	
	display() {

		this.scene.pushMatrix();
			this.pole.display();
			this.scene.scale(0.3, 5, 0.3);
			this.pole.display();
		this.scene.popMatrix();

	
	};
		
		
 	update(currTime){
 		var fds = currTime/100.0;
 		this.angle += fds;
 		
	};
 	
 };
 



 



