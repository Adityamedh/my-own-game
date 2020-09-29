const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var backgroundimage;
var stikeman1image;
var stikeman1;
var playimage
var stfights_fight


function preload(){
  backgroundimage = loadImage("images/Backgrond.png")
stikeman1image = loadImage("images/sm1.png")
playimage = loadImage("images/play1.jpg");
stwalking = loadAnimation("c1.png")
stfights_fight = loadAnimation("a (1).png","a (2).png","a (3).png","a (4).png","a (5).png","a (6).png","a (7).png","a (8).png","a (9).png","a (10).png","a (11).png","a (13).png","a (12).png");
stl_left = loadAnimation("b (1).png","b (2).png","b (3).png","b (4).png","b (5).png","b (6).png","b (7).png","b (8).png","b (9).png","b (10).png","b (11).png","b (12).png","b (13).png");
enm = loadAnimation("c (1).png","c (2).png","c (3).png","c (4).png","c (5).png","c (6).png","c (7).png","c (8).png","c (9).png","c (10).png","c (11).png","c (12).png")



}


function setup() {
  createCanvas(windowWidth,windowHeight);


background1 = createSprite(760,400,1520,displayHeight);
background1.addImage("sm3",backgroundimage);
background1.scale = 5;
  
play = createSprite(400,400,500,70);
play.addImage("sm2",playimage);
play.scale = 1.5;

  stikeman1 = createSprite(750,500,20,40); 
stikeman1.addAnimation("running",stwalking)
stikeman1.addAnimation("fights",stfights_fight)
stikeman1.addAnimation("left",stl_left);
stikeman1.visible = false;
stikeman1.scale = 6;




}



function draw() {
  background("black");  

 if(mousePressedOver(play)){
stikeman1.visible = true
background1.visible = false
play.visible = false

 }

  if(keyWentDown("LEFT_ARROW")){
    stikeman1.changeAnimation("fights",stfights_fight);



  }
  if(keyWentUp("LEFT_ARROW") || touches.length > 0){
stikeman1.changeAnimation("running",stwalking);
touches = []
  }
  
  if(keyWentDown("RIGHT_ARROW")){
    stikeman1.changeAnimation("left",stl_left);



  }
  if(keyWentUp("RIGHT_ARROW")){
stikeman1.changeAnimation("running",stwalking);

  }


  stikeman();
  st();





  drawSprites();
}
function stikeman(){
  if(frameCount%  300 === 0){
    var stikeman2 = createSprite(-5,500,20,40)
    stikeman2.addAnimation("stleft",enm)
    stikeman2.velocityX = 7;
    stikeman2.scale = 6;
    
    }
}
function st(){
  if(frameCount%  300 === 0){
    var stike = createSprite(-5,500,20,40)
    stike.addAnimation("stleft",enm)
    stike.velocityX = 7;
    stike.scale = 6;
    
    }
}

