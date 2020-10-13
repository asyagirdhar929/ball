
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper1;
var part1,part2,part3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,670,800,10);
paper1=new Paper (100,640,2);
var  part1_options={
  isStatic:true
  }
 var part1=new Dustbin (400,650,200,20,part1_options);
   part1.fill= ("red");
   var  part2_options={
    isStatic:true
    }

    
 var part2 =new Dustbin (307,610,20,100,part2_options);
 part2.fill= ("red");

 var  part3_options={
  isStatic:true
 
  }
  
 var part3=new Dustbin (493,610,20,100,part3_options);
 part3.fill= ("red");




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  keypressed();
  ground1.display();
  paper1.display();
part1.display();
part2.display();
part3.display();
 
  drawSprites();
 
}


function keypressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85}) 
  }
}
