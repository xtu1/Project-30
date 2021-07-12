const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball

function preload(){
polygonImg=loadImage('polygon.png')


}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,380,900,20)
  stand1= new Ground(390,300,250,10)
  stand2= new Ground(700,200,200,10)
//level 1
block1= new Block(300,275,30,40)
block2= new Block(330,275,30,40)
block3= new Block(360,275,30,40)
block4= new Block(390,275,30,40)
block5= new Block(420,275,30,40)
block6= new Block(450,275,30,40)
block7= new Block(480,275,30,40)
//level 2
block8= new Block(330,235,30,40)
block9= new Block(360,235,30,40)
block10= new Block(390,235,30,40)
block11= new Block(420,235,30,40)
block12= new Block(450,235,30,40)
//level 3
block13= new Block(360,195,30,40)
block14= new Block(390,195,30,40)
block15= new Block(420,195,30,40)
//top
block16= new Block(390,155,30,40)




ball= Bodies.circle(50,200,20)
World.add (world,ball)

slingshot= new Slingshot(this.ball,{x:150,y:200})





}


function draw() {
    background(180);
    Engine.update(engine);
    ground.display()
    stand1.display()
    stand2.display()
    fill("pink")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    fill("green")
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    fill("blue")
    block13.display()
    block14.display()
    block15.display()
    fill("yellow")
    block16.display()
    
    slingshot.display()
    imageMode(CENTER)
    image(polygonImg,ball.position.x,ball.position.y,50,50)
}
function mouseDragged (){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode===32){
slingshot.attach(this.ball)
  }
}





