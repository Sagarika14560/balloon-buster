
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
 
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  
   redB = createGroup(); 
   pinkB= createGroup();
    greenB= createGroup();
   blueB= createGroup();
   arrowGroup = createGroup();
  
 for (var r=50;r<450;r=r+60)
  {
    red_balloon= createSprite(50,r,10,10);
    red_balloon.addImage(red_balloonImage);
    red_balloon.scale=0.1;
  }
  
 for (var g=100;g<350;g=g+60)
  {
    green_balloon= createSprite(100,g,10,10);
    green_balloon.addImage(green_balloonImage);
    green_balloon.scale=0.1;
  }
  
 for (var b=150;b<320;b=b+60)
  {
    blue_balloon= createSprite(150,b,10,10);
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale=0.1;
  }
  
 for (var p=200;p<250;p=p+60)
  {
    pink_balloon= createSprite(200,p,10,10);
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale=1.3;
  }
  
  
}

function draw() {

 // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
  if (keyDown("space")){
    var Temp_arrow = createArrow();
    Temp_arrow.addImage(arrowImage);
    Temp_arrow.y = bow.y;
  }
  drawSprites();
  
    
}
function createArrow (){
  arrow = createSprite (360,100,5,10);
  arrow.velocityX = -3;
  arrow.scale = 0.4;
  return arrow;
  
}



