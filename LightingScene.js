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
		/*
		this.table = new MyTable(this);
		this.wallR = new Plane(this);
		this.wallL = new MyQuad(this, -0.6, 1.55, -0.6, 1.55);
		this.floor = new MyQuad(this, 0, 12, 0, 10);
		
		this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.2,1.2,0,1);
		this.boardB = new Plane(this, BOARD_B_DIVISIONS,);

		this.column = new MyCylinder(this, 10, 2);
		this.clock = new MyClock(this);
		this.circle = new MyCircle(this, 20);*/

		this.altimetry= [[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3, 0.0 ],
						 [ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 2.0, 4.0, 2.5, 2.4, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 2.0, 4.0, 3.5, 2.4, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						 [ 2.0 , 3.0 , 2.0, 1.0, 2.5, 2.4, 2.3, 1.3, 0.0 ]];

		this.vehicle = new MyVehicle(this);
		this.terrain = new MyTerrain(this, 8, this.altimetry);

		

		// Materials
		
		this.materialDefault = new CGFappearance(this);

		this.grassMaterial = new CGFappearance(this);
		this.grassMaterial.loadTexture("resources/images/moon.png");
		this.grassMaterial.setTextureWrap('REPEAT', 'REPEAT');

		/*
		this.materialA = new CGFappearance(this);
		this.materialA.loadTexture("../resources/images/table.png");
		this.materialA.setAmbient(0.1,0.1,0.1,1);
		this.materialA.setDiffuse(0.9,0.9,0.9,1);
		this.materialA.setSpecular(0.1,0.1,0.1,1);
		this.materialA.setShininess(100);

		this.floorAppearence = new CGFappearance(this);
		this.floorAppearence.loadTexture("../resources/images/floor.png");
		this.floorAppearence.setAmbient(0.1,0.1,0.1,1);
		this.floorAppearence.setDiffuse(0.9,0.9,0.9,1);
		this.floorAppearence.setSpecular(0.1,0.1,0.1,1);	
		this.floorAppearence.setShininess(1);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.1,0.1,0.1,1);
		this.materialB.setDiffuse(0.9,0.9,0.9,1);
		this.materialB.setSpecular(0.1,0.1,0.1,1);	
		this.materialB.setShininess(1);

		this.windowAppearence = new CGFappearance(this);
		this.windowAppearence.loadTexture("../resources/images/window.png");
		this.windowAppearence.setAmbient(0.1,0.1,0.1,1);
		this.windowAppearence.setDiffuse(0.9,0.9,0.9,1);
		this.windowAppearence.setSpecular(0.1,0.1,0.1,1);	
		this.windowAppearence.setShininess(1);
		this.windowAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		

		this.slidesAppearence = new CGFappearance(this);
		this.slidesAppearence.loadTexture("../resources/images/slides.png");
		this.slidesAppearence.setAmbient(0.25,0.25,0.25,1);
		this.slidesAppearence.setDiffuse(0.75,0.75,0.75,1);
		this.slidesAppearence.setSpecular(0.25,0.25,0.25,1);	
		this.slidesAppearence.setShininess(10);
		this.slidesAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');


		this.boardAppearence = new CGFappearance(this);
		this.boardAppearence.loadTexture("../resources/images/board.png");
		this.boardAppearence.setAmbient(0.25,0.25,0.25,1);
		this.boardAppearence.setDiffuse(0.75,0.75,0.75,1);
		this.boardAppearence.setSpecular(0.25,0.25,0.25,1);
		this.boardAppearence.setShininess(10);
		this.boardAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		this.clockAppearence = new CGFappearance(this);
		this.clockAppearence.loadTexture("../resources/images/clock.png");
		this.clockAppearence.setAmbient(0.25,0.25,0.25,1);
		this.clockAppearence.setDiffuse(0.75,0.75,0.75,1);
		this.clockAppearence.setSpecular(0.25,0.25,0.25,1);
		this.clockAppearence.setShininess(10);
		this.clockAppearence.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		this.setUpdatePeriod(100);
		*/

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
		this.axis.display();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section


		/*
		// Floor
		this.pushMatrix();
			this.translate(7.5, 0, 7.5);
			this.rotate(-90 * degToRad, 1, 0, 0);
			this.scale(15, 15, 0.2);
			this.floorAppearence.apply();
			this.floor.display();
		this.popMatrix();

		// Left Wall
		this.pushMatrix();
			this.translate(0, 4, 7.5);
			this.rotate(90 * degToRad, 0, 1, 0);
			this.scale(15, 8, 0.2);
			this.windowAppearence.apply();
			this.wallL.display();
		this.popMatrix();

		// Plane Wall
		this.pushMatrix();
			this.translate(7.5, 4, 0);
			this.scale(15, 8, 0.2);
			this.materialB.apply();
			this.wallR.display();
		this.popMatrix();

		// First Table
		this.pushMatrix();
			this.translate(5, 0, 8);
			this.materialA.apply();
			this.table.display();
		this.popMatrix();

		// Second Table
		this.pushMatrix();
			this.translate(12, 0, 8);
			this.table.display();
		this.popMatrix();

		// Board A
		this.pushMatrix();
			this.translate(4, 4.5, 0.2);
			this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
			this.slidesAppearence.apply();
			this.boardA.display();
		this.popMatrix();

		// Board B
		this.pushMatrix();
			this.translate(10.5, 4.5, 0.2);
			this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
			
			this.boardAppearence.apply();
			this.boardB.display();
		this.popMatrix();

		//Column
		this.pushMatrix();
			this.translate(1,8,14);
			this.rotate(90 * degToRad,1,0,0);
			this.scale(1,1,8);
			this.boardAppearence.apply();
			//this.column.display();
		this.popMatrix();

		this.pushMatrix();
			this.translate(7,7,0);
			this.clock.display();
		this.popMatrix();
		*/

		this.pushMatrix();
			this.vehicle.display();
		this.popMatrix();

		this.pushMatrix();
			this.rotate(-90 * degToRad, 1, 0, 0);
			this.scale(50, 50, 1);
			this.grassMaterial.apply();
			this.terrain.display();
		this.popMatrix();

		this.pushMatrix();
			
		this.popMatrix();

		
		

		// ---- END Scene drawing section
	};

	/*
	update(currTime)
	{

	this.lastTime = this.lastTime || 0;
	this.deltaTime = currTime - this.lastTime;
	this.lastTime = currTime;
	this.clock.update(this.deltaTime);

	};
	*/



};
