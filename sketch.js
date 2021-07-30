var path,pathImg;

function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}


function setup(){
  
  createCanvas(400,400);

  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(400,0,100,800)
}

function draw() {
  background(0);
path.velocityY=4;

boy.x = World.mouseX;

edge =createEdgeSprites();
boy.collide(edge[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

if(path.y > 400){
  path.y = height/2;
}

drawSprites();
}