const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,polygon;
var tblock1,tblock2,tblock3,tblock4,tblock5,tblock6,tblock7,tblock8,tblock9,tblock10,tblock11,tblock12,tblock13,tblock14,tblock15

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  polygon = new Polygon(100,200,20,20);

  slingshot = new SlingShot(polygon.body,{x:100, y:200});

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  
  //top
  block16 = new Block(390,155,30,40);

  //Second tower
  //level one
  tblock1 = new Block(625,175,30,40);
  tblock2 = new Block(655,175,30,40);
  tblock3 = new Block(685,175,30,40);
  tblock4 = new Block(715,175,30,40);
  tblock5 = new Block(745,175,30,40);
  tblock6 = new Block(775,175,30,40);

  //level two
  tblock7 = new Block(655,135,30,40);
  tblock8 = new Block(685,135,30,40);
  tblock9 = new Block(715,135,30,40);
  tblock10 = new Block(745,135,30,40);

  //level three
  tblock11 = new Block(685,95,30,40);
  tblock12 = new Block(715,95,30,40);
}
function draw() {
  background("lightpink");

  textSize(20);
  fill("black");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(15);
  text("Press Space to get a second Chance to Play!!",550 ,350);

  ground.display();
  polygon.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);

  //First tower
  //level one
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  //level two
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //level three
  block13.display();
  block14.display();
  block15.display();

  //top
  block16.display();

  //Second tower
  //level one
  tblock1.display();
  tblock2.display();
  tblock3.display();
  tblock4.display();
  tblock5.display();
  tblock6.display();

  //level two
  tblock7.display();
  tblock8.display();
  tblock9.display();
  tblock10.display();

  //top
  tblock11.display();
  tblock12.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(polygon.body);
  } 
}