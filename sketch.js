var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleGroup;
var score = 0
var gameState = 'play'

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage('apple.png')
}

function setup(){
  
createCanvas(400,400);

appleGroup = new Group()
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.setCollider('rectangle',0,0,500,800)
rabbit.debug = false
}


function draw() {
  background(0);
  
  

  rollBg(garden);
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (rabbit.isTouching(appleGroup)){
    apple.destroy()
    score+=1
  }


  randomApple()
  playGame();
  drawSprites();
}


function rollBg(bgSprite){

  bgSprite.velocityX = -5

  if(bgSprite.position.x<150){
    bgSprite.x = bgSprite.width/3+50
  }
}

function playGame(){

  if(gameState==='play'){

    if (keyDown('right')){
      rabbit.x+=10
    }

    if (keyDown('left')){
      rabbit.x-=10
    }

  }

}
function  randomApple(){

  if (frameCount%80===0){

    apple=createSprite(200,-20)
    apple.addImage('apple',appleImg)
    appleGroup.add(apple)
    apple.x = Math.round(random(20,380))
    apple.velocityY = 5
    apple.scale = 0.05
    apple.lifetime = 200

  }

}
