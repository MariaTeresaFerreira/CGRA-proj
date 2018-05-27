/*/***
 * MyVehicle
 * @constructor
 */
var degToRad = Math.PI / 180.0;

class MyCrane extends CGFobject
{
	constructor(scene)
	{
		super(scene);

 		this.metalAppearance = new CGFappearance(this.scene);
    	this.metalAppearance.loadTexture("resources/images/metal.png");
    	this.angleH = 0;
    	this.angleV = 0;
    	this.pole = new MyCompleteCylinder(scene, 10, 10);
    	this.magnet = new MyMagnet(scene);
    	this.state = 0;
    	

	};
	
	display() {

		//rodar toda a grua
		this.scene.pushMatrix();
		this.metalAppearance.apply();
		this.scene.rotate(this.angleV,0,1,0);

		//BASE - artic 1
		this.scene.pushMatrix();
			this.pole.display();
		this.scene.popMatrix();

		// POLE 1
		this.scene.pushMatrix();
			this.scene.rotate(30*degToRad, 1, 0, 0);
			this.scene.translate(0, 0.2, -0.25);
			this.scene.scale(0.3, 15, 0.3);
			this.pole.display();
		this.scene.popMatrix();

		//rodar o braço 
		this.scene.pushMatrix();
		

		// artic 2
		this.scene.pushMatrix();
			this.scene.scale(1.2, 0.5, 0.5);
			this.scene.translate(0.25, 13, 7);
			this.scene.rotate(90*degToRad, 0, 0, 1);
			this.pole.display();
		this.scene.popMatrix();

		//POLE 2
		this.scene.pushMatrix();
			this.scene.translate(0, 6.5, 3.5);
			this.scene.scale(1, -1, -1);
			this.scene.rotate(-this.angleH,-1,0,0);

			//
			this.scene.rotate(-30*degToRad, 1, 0, 0);
			this.scene.scale(0.3, 8, 0.3);		
			this.pole.display();
		this.scene.popMatrix();


		//Magnet
		this.scene.pushMatrix();
		this.scene.translate(0,7.5 * Math.cos(30*degToRad) - 4 * Math.cos(-30*degToRad+this.angleH) - 5,7.5 * Math.sin(30*degToRad)- 4 * Math.sin(-30*degToRad+this.angleH));
			this.scene.scale(0.4, 0.4, 0.4);
			this.scene.translate(0, 10, -1);
			this.magnet.display();
		this.scene.popMatrix();


		this.scene.popMatrix();





		this.scene.popMatrix();












		/*
		

		this.scene.pushMatrix();
			//artic 1
				//this.scene.rotate(this.angle * degToRad,0,1,0);
			this.scene.pushMatrix();
				this.scene.rotate(30*degToRad, 1, 0, 0);
				this.scene.translate(0, 0.2, -0.2); //pole 1
				this.scene.scale(0.2, 15, 0.2); //pole 1 scale
				this.pole.display(); //pole 1 display
			this.scene.popMatrix();

			this.scene.pushMatrix();
				

				this.scene.rotate(90*degToRad, 0, 0, 1); //artic 2
				this.scene.translate(6.7, -0.1, 3.7); //artic 2
				this.scene.translate(0, -0.125, 0); //artic 2
			
				this.scene.pushMatrix();
				

				
						this.scene.pushMatrix();
						//this.scene.rotate(this.angle * degToRad,0, 1, 0);
							this.scene.rotate(90*degToRad, 0, 0, 1); //pole 2
							this.scene.rotate(30*degToRad, 1, 0, 0); //pole 2
							this.scene.translate(0.2, 0, 0); //pole 2
							this.scene.scale(0.2, 8, 0.2); //pole 2 scale

							this.pole.display(); //pole 2 display

						this.scene.popMatrix();
					this.scene.translate(0,-2.2,2);
					this.scene.rotate(90*degToRad, 0, 0, 1);
					
					//this.scene.rotate(this.angle * degToRad, 1, 0, 0);
					this.scene.translate(2, 3.2, -0.2);//rope

					this.scene.pushMatrix();
						this.scene.scale(1, -1, 1);
						this.magnet.display();
					this.scene.popMatrix();


					this.scene.pushMatrix();
					
					this.scene.translate(10, 0, 0);

						this.scene.pushMatrix();
							this.scene.translate(0, 1.5, 0); //magnet
							this.scene.scale(0.5, 0.5, 0.5) //magnet scale

							this.pole.display(); //magnet display
						this.scene.popMatrix();
					this.scene.popMatrix();
						
					
						this.scene.scale(0.05, 3, 0.05); //rope scale
						//this.scene.rotate(-this.angle * degToRad, 1, 0, 0);
						
						this.pole.display(); //rope display
					this.scene.popMatrix();

				this.scene.scale(0.5, 0.9, 0.5); //artic 2 scale
				this.pole.display(); //artic 2 display

			this.scene.popMatrix();


			//artic 1 scale
			this.pole.display(); //artic 1 display
		this.scene.popMatrix();*/

	
	};
		
		
 	update(currTime){

 		var fds = 1*degToRad;

 		switch(this.state){
 			case 0:
 			if(this.angleV <= 180*degToRad){
 				this.angleV += fds;
 				console.log(this.angleV);
 			} else this.state = 1;
 			break;

 			case 1:
 			if(this.angleH <= 30*degToRad){
 				this.angleH += fds;
 			}else this.state = 2;
 			break;

 			case 2:
 			if(this.angleH > 0){
 				this.angleH -= fds;
 			}else this.state = 3;

 			case 3:
 			if(this.angleV > 0){
 				this.angleV -= fds;
 			}

 		}


 		
// 		this.angle += fds;
 		
	};
 	
 };
 



 



