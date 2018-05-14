/*/***
 * MyPrism
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texture = [];	
	pi = Math.PI;
	step = (pi*2)/(this.slices);

	for(k = 0; k <= this.stacks; k += (1 / (this.stacks))){
		for (i = 0; i < this.slices; i++){ //slides
			this.vertices.push(Math.cos(i*step),Math.sin(i*step),k);
			
			this.normals.push(Math.cos(i*step),Math.sin(i*step),0);
		}
	}

	for(var j=0;j<this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 			this.indices.push(j*this.slices+i);
			this.indices.push(j*this.slices+(i+1)%this.slices);
			this.indices.push((j+1)*this.slices+i);
 			this.indices.push(j*this.slices+i);
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 		}
 	}

 	this.texCoords = [];
    var s = 0;
	var t = 0;
	var s_inc = 1/this.slices;
	var t_inc = 1/this.stacks;
	
	for (var i = 0; i <= this.stacks; i++) {
		for (var j = 0; j < this.slices; j++) {
			this.texCoords.push(s, t);
			s += s_inc;
		}
		s = 0;
		t += t_inc;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };