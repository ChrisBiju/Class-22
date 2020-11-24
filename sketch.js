var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom,side1,side2

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	

	Engine.run(engine);
  
	boxLeftSprite = createSprite(250,600,20,100)
	boxLeftSprite.shapeColor = "red"

	boxLeftSpriteBody = Bodies.rectangle(250,600,20,100,{isStatic:true})
	World.add(world, boxLeftSpriteBody)

	
boxRightSprite = createSprite(500,600,20,100)
	boxRightSprite.shapeColor = "red"

	boxRightSpriteBody = Bodies.rectangle(500,600,20,100,{isStatic:true})
	World.add(world, boxRightSpriteBody)


	boxBottomSprite = createSprite(370,650,260,20)
	boxBottomSprite.shapeColor = "red"

	boxBottomSpriteBody = Bodies.rectangle(370,650,260,20,{isStatic:true})
	World.add(world, boxBottomSpriteBody)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  


  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false)
	}
}



