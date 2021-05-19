
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var box1,box2,box3;
function preload()
{

}

function setup() {
	createCanvas(1200, 400);
 
  

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
   
    paper1=new Paper(100,360,20);
    ground1=new Ground (width/2,height-35,width,10);
   //box1= new Box(width/1.2,height-45,140,16);
   box2=new Box(1065,300);
  // box3= new Box(933,300,16,130);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  Engine.update(engine);
  
  //box1.display();
   paper1.display();
  
  //box3.display();
 
  ground1.display();
  box2.display();
 
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-78});
  }
}


