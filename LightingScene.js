//
var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();
	};

	init(application) 
	{
		super.init(application);
		//this.doSomething = false;
		this.luz1 = true;
		this.luz2 = true;
		//this.speed = false;
		this.displayAxis = false;

		this.initCameras();

		this.initLights();

		this.enableTextures(true);

		this.gl.clearColor(0.0, 0.0, 1.0, 0.4);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Scene elements

		this.altimetry= [[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3, 0.0 ],
						 [ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 1.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0 ],
						 [ 1.0 , 0.0 , 2.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 2.0 , 3.0 , 2.0, 1.0, 2.5, 2.4, 2.3, 1.3, 0.0 ]];

		this.vehicle = new MyVehicle(this);
		this.terrain = new MyTerrain(this, 8, this.altimetry);
		this.crane = new MyCrane(this);
		this.magnet = new MyMagnet(this);

		this.dimension = new MyUnitCubeQuad(this);


		// Materials
		
		this.materialDefault = new CGFappearance(this);

		this.grassMaterial = new CGFappearance(this);
		this.grassMaterial.loadTexture("resources/images/grass.png");
		this.grassMaterial.setTextureWrap('REPEAT', 'REPEAT');
		
		this.setUpdatePeriod(10);
		

	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);
		//this.setGlobalAmbientLight(6, 6, 6, 1.0);
		
		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		//this.lights[0].setVisible(true); // show marker on light position (different from enabled)
		
		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		//this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		//this.lights[2].setVisible(true); // show marker on light position (different from enabled)


		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		//this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		//this.lights[3].setVisible(true); // show marker on light position (different from enabled)

		//this.lights[0].setAmbient(0, 0, 0, 1);
		//this.lights[0].setDiffuse(1.0, 1.0, 0, 1.0);
		this.lights[0].enable();

		//this.lights[1].setAmbient(0, 0, 0, 1);
		//this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		//this.lights[2].setAmbient(0, 0, 0, 1);
		//this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].enable();

		//this.lights[2].setConstantAttenuation(0);
		//this.lights[2].setQuadraticAttenuation(0);
		//this.lights[2].setLinearAttenuation(1);

		//this.lights[3].setAmbient(0, 0, 0, 1);
		//this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].enable();

		//this.lights[3].setConstantAttenuation(0);
		//this.lights[3].setQuadraticAttenuation(1);
		//this.lights[3].setLinearAttenuation(0);
	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();

		if (this.luz1) this.lights[0].enable();
		else this.lights[0].disable();

		if (this.luz2) this.lights[1].enable();
		else this.lights[1].disable();

	}


	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		if(this.displayAxis) this.axis.display();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		
		this.pushMatrix();
			this.translate(0, 0, -8);
			this.vehicle.display();
		this.popMatrix();
		

		this.pushMatrix();
			this.rotate(-90 * degToRad, 1, 0, 0);
			this.scale(50, 50, 1);
			this.grassMaterial.apply();
			this.terrain.display();
		this.popMatrix();

		this.materialDefault.apply();

		this.pushMatrix();
			this.crane.display();
		this.popMatrix();

		

		
		

		// ---- END Scene drawing section
	};

	
	update(currTime)
	{

	this.lastTime = this.lastTime || 0;
	this.deltaTime = currTime - this.lastTime;
	this.lastTime = currTime;

	//this.vehicle.update(this.deltaTime);
	this.checkKeys();
	this.crane.update(this.deltaTime);
	};
	
	checkKeys() {
		var text="Keys pressed: "; 
		var keysPressed=false;
		if (this.gui.isKeyPressed("KeyW")) {
			text+=" W ";
			keysPressed=true;
		}
		if (this.gui.isKeyPressed("KeyS")) {
				text+=" S ";
				keysPressed=true;
		}
		if (keysPressed) 
			console.log(text);
	};

	



};
