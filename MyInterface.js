 
class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor(){
 		super();
 	}
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// add a button:
		// the first parameter is the object that is being controlled (in this case the scene)
		// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
		// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

		//this.gui.add(this.scene, 'doSomething');	

		// add a group of controls (and open/expand by defult)

		var group=this.gui.addFolder("Luzes");
		group.open();

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;

		group.add(this.scene, 'luz1');
		group.add(this.scene, 'luz2');

		// add a slider
		// must be a numeric variable of the scene, initialized in scene.init e.g.
		// this.speed=3;
		// min and max values can be specified as parameters

		//this.gui.add(this.scene, 'speed', -5, 5);
		this.gui.add(this.scene, 'displayAxis');

		this.initKeys();

		return true;
	};

	/**
	 * processKeyboard
	 * @param event {Event}
	 */
	 /*
	processKeyboard(event) {
		// call CGFinterface default code (omit if you want to override)
		super.processKeyboard(event);

		// Check key codes e.g. here: http://www.asciitable.com/
		// or use String.fromCharCode(event.keyCode) to compare chars

		// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
		switch (event.keyCode)
		{
			case (65):	// only works for capital 'A', as it is
				console.log("Key 'A' pressed");
		};
	};*/

	initKeys() {
		this.scene.gui=this; 
		this.processKeyboard=function(){}; 
		this.activeKeys={};
	};
	processKeyDown(event) {
		this.activeKeys[event.code]=true; 
	};
	processKeyUp(event) { 
		this.activeKeys[event.code]=false;
	};
	isKeyPressed(keyCode) {
		return this.activeKeys[keyCode] || false;
	};

};

