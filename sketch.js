var ground;
var paper;
var redBox , redBox1 , redBox2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var redBox = createSprite(400,660,150,5);
	redBox.shapeColor = color("red");

	var redBox1 = createSprite(325,637,5,50);
	redBox1.shapeColor = color("red");

	var redBox2 = createSprite(475,637,5,50);
	redBox2.shapeColor = color("red");

	var paper = createSprite(150,635,50,50);
	paper.shapeColor = color("red");
	
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	// paper = Bodies.circle(150, 635, 20, options);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:660});
	}
}