
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)

  monkey = createSprite(50,465,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(200,500,600,10);
  ground.x = ground.width/2;
  
   stroke("white")
  textSize(20);
  fill("white")
  text("Score ",score,500,50);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival time ",survivalTime,100,50)
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background("white");
  
  if (keyDown("space")) {
    monkey.velocityY = -12
    }
  
  if (foodGroup.isTouching(monkey)) {
    score = score + 2;
  }
  
  if (obstacleGroup.isTouching(monkey)) {
    obstacleGroup.velocityX = 0
    foodGroup.velocityX = 0
  }
 
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
  
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,Math.round(random(250,400)),10,10)
    banana.addImage(bananaImage)
    banana.velocityX = -5
    banana.scale = 0.1;
    banana.lifetime = 200
    foodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(600,470,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5
    obstacle.scale = 0.15
    obstacle.lifetime = 200
    obstacleGroup.add(obstacle);
  }
}




