
class MyTrapezium extends CGFobject
{
	constructor(scene, sizeUp, sizeDown, height, minS = 0, maxS = 1, minT = 0, maxT = 1) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.sizeUp = sizeUp;
		this.sizeDown = sizeDown;
		this.height = height;

		this.initBuffers();
	};
	

	initBuffers() 
	{
		
		this.vertices = [
		-(this.sizeDown/2), -(this.height/2), 0,
		(this.sizeDown/2), -(this.height/2), 0,
		-(this.sizeUp/2), (this.height/2), 0,
		(this.sizeUp/2), (this.height/2), 0
		];

		this.indices = [
		0, 1, 2, 
		3, 2, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.texCoords = [
			this.minS, this.maxT,
			this.maxS, this.maxT,
			this.minS, this.minT,
			this.maxS, this.minT
		];
		
		this.normals = [
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1
		];
	
		this.initGLBuffers();
	};
};
