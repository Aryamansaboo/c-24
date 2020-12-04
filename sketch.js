const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var engine,world; 
var object; 
var ground,box2,box1,box3,box4,box5; 
var pig1,log1,pig2,log2,log5,log6,bird;
function setup() { 
  createCanvas(1200,400); 
  engine=Engine.create(); 
  world=engine.world; 
  box2= new Box(920,320,70,70);
  box1= new Box(700,320,70,70);
  pig1 = new Pig(810,320);
  log1 = new Log(810,260,300,PI/2);

  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);

  log5 = new Log(760,120,150,PI/7);
  log6 = new Log(870,120,150,PI/7);
  box5= new Box(810,160,70,70);

  bird = new Bird(200,200);


  ground = new Ground(600,390,1200,20);



}

function draw(){
  background(0);
  Engine.update(engine);
box2.display();
box1.display();
ground.display();
pig1.display();
log1.display();

box3.display();
box4.display();
pig2.display();
log2.display();

box5.display();
log5.display();
log6.display();

bird.display();

}

 
  
