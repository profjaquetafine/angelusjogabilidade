const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var caminhao
var ball
var radius = 40
var lixo = 0
function preload(){
  fundoimg = loadImage("fundo.jpg")
  cleidosvaldoincomodado = loadImage("incomdado.png")
  cleidosvaldoatacante = loadImage("jogando.png")
  cleidosvaldoparado = loadImage("parado.png")
  caminhaoImg = loadImage("caminhão.png")
  lixoImg = loadImage("lixo.png")
}
 
 
function setup() {
  createCanvas(1600,700);
  var ball_options={
   
     restitution:0.3,
     friction:0,
     desity:1.2
 }
  engine = Engine.create();
  world = engine.world;
var options ={
 
  isStatic:true
}
ball=Bodies.circle(100,575,100,ball_options)
//ball2=Bodies.circle(150,575,100,ball_options)
//ball3=Bodies.circle(200,575,100,ball_options)
//ball4=Bodies.circle(125,525,100,ball_options)
//ball5=Bodies.circle(180,525,100,ball_options)

World.add(world,ball)
//World.add(world,ball2)
//World.add(world,ball3)
//World.add(world,ball4)
//World.add(world,ball5)
caminhao = createSprite(800,575,100,100)
caminhao.addImage("caminhao",caminhaoImg)
caminhao.scale = 0.5
 
cleidosvaldo = createSprite(400,540,50,50)
cleidosvaldo.addImage("parado",cleidosvaldoparado)
cleidosvaldo.scale = 0.3
 
 
solo = Bodies.rectangle(800,650,1600,20, options)
parede = Bodies.rectangle(1600,100,20,900)
World.add(world,solo)
 
rectMode(CENTER);
ellipseMode(RADIUS);
 
}
 
 
function draw() {
  background(fundoimg);
  Engine.update(engine);
  textSize(25)
  text("lixos"+lixo+"/5",width/2,50)
  caminhao.velocityX = 1.5
  

  rect(solo.position.x, solo.position.y,1600,20)
  rect(parede.position.x, parede.position.y,20,900)
  drawSprites()
  
  image(lixoImg,ball.position.x,ball.position.y,75,75)
  //image(lixoImg,ball2.position.x,ball2.position.y,75,75)
  //image(lixoImg,ball3.position.x,ball3.position.y,75,75)
  //image(lixoImg,ball4.position.x,ball4.position.y,75,75)
  //image(lixoImg,ball5.position.x,ball5.position.y,75,75)
  



  if (keyDown(UP_ARROW)){
	 
    Matter.Body.applyForce(ball,{x:0,y:-0},{x:0.25,y:-0.30})
    
    
     }


}



