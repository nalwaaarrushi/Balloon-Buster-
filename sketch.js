var playground, playgroundImage; 
var blueBalloon, blueBalloonImage, blueG; 
var greenBalloon, greenBalloonImage, greenG;
var pinkBalloon, pinkBalloonImage, pinkG;  
var redBalloon, redBalloonImage, redG; 
var i; 
var bow, bowImage; 
var arrowImage, arrowG ; 
var score = 0; 

function preload(){
  
  playgroundImage =  loadImage("background0.png");
  blueBalloonImage = loadImage("blue_balloon0.png"); 
  greenBalloonImage = loadImage("green_balloon0.png"); 
  pinkBalloonImage = loadImage("pink_balloon0.png"); 
  redBalloonImage = loadImage("red_balloon0.png"); 
  bowImage = loadImage("bow0.png"); 
  arrowImage = loadImage("arrow0.png"); 
}

function setup() {
  createCanvas(600, 600);
  
  //creating the playground background. 

playground = createSprite(0, 0, 600, 600); 
  playground.scale = 3;
  playground.addImage("p", playgroundImage); 
  playground.x = playground.width / 2; 
  playground.velocityX = -3; 
  
  textSize(20) 
  
  //creating different colors balloons.
  
  //blueBalloon
  //blueBalloon = createSprite(300, 50, 20, 20); 
  //blueBalloon.addImage("bb", blueBalloonImage); 
  //blueBalloon.scale = 0.1;
  
  
  //greenBalloon
  //greenBalloon = createSprite(300, 100, 20, 20);
  //greenBalloon.addImage("gb", greenBalloonImage); 
  // greenBalloon.scale = 0.1;

  
  //pinkBalloon 
  //pinkBalloon = createSprite(300, 150, 20, 20);
  //pinkBalloon.addImage("pb", pinkBalloonImage); 
  // pinkBalloon.scale = 1;
  
  
  //redBalloon
  //redBalloon = createSprite(300, 200, 20, 20);
  //redBalloon.addImage("rb", redBalloonImage);
  //redBalloon.scale = 0.1;
  
  //creating the bow 
  bow = createSprite(580, 100, 50, 50); 
  bow.addImage("b", bowImage); 
  
  arrowG = new Group(); 
  blueG = new Group();
  pinkG = new Group();
  greenG = new Group();
  redG = new Group();
  
  
  
  
  
}

function draw() {
  
  background("white"); 
  
  if(playground.x<0) { 
    playground.x = playground.width / 2; 
  } 
  
 bow.y = mouseY; 
  
  if(keyDown("space")){ 
  createArrows(); 
  } 
  
  if (arrowG.isTouching(redG)){ 
    redG.destroyEach(); 
    arrowG.destroyEach(); 
    score = score+1; 
  } 
  
  if (arrowG.isTouching(pinkG)){ 
    pinkG.destroyEach(); 
    arrowG.destroyEach(); 
    score = score+10; 
  } 
  
  
  if (arrowG.isTouching(greenG)){ 
    greenG.destroyEach(); 
    arrowG.destroyEach(); 
    score = score+3; 
  } 
  
  
  if (arrowG.isTouching(blueG)){ 
    blueG.destroyEach(); 
    arrowG.destroyEach(); 
    score = score+7; 
  } 
  
  var select_balloon = Math.round(random(1,4))
  console.log(select_balloon) 
  
  if (frameCount % 80 === 0) { 
    if (select_balloon == 1){ 
      redBalloon(); 
    } else if (select_balloon === 2) { 
      greenBalloon(); 
    } else if (select_balloon === 3) { 
      blueBalloon(); 
    } else if (select_balloon === 4) { 
      pinkBalloon(); 
    }  
  } 
    
    
 
  drawSprites(); 
  
  text("Score : "+ score, 270, 30); 
  
}

function createArrows() {
  var arrow = createSprite(580, 100, 50, 50); 
  arrow.velocityX = -5; 
  arrow.addImage("a", arrowImage); 
  arrow.y = bow.y; 
  arrow.scale = 0.3; 
  arrow.lifetime = 120; 
  arrowG.add(arrow); 
}

function redBalloon () { 
  var red = createSprite(0, Math.round(random(20, 370)), 20, 10); 
  red.addImage(redBalloonImage); 
  red.velocityX = 3; 
  red.lifetime = 150; 
  red.scale = 0.1; 
  redG.add(red); 
} 

function greenBalloon () { 
  var green = createSprite(0, Math.round(random(20, 370)), 30, 10); 
  green.addImage(greenBalloonImage); 
  green.velocityX = 3; 
  green.lifetime = 150; 
  green.scale = 0.1; 
  greenG.add(green); 
} 

function blueBalloon () { 
  var blue = createSprite(0, Math.round(random(20, 370)), 15, 10); 
  blue.addImage(blueBalloonImage); 
  blue.velocityX = 3; 
  blue.lifetime = 150; 
  blue.scale = 0.1; 
  blueG.add(blue); 
} 

function pinkBalloon () { 
  var pink = createSprite(0, Math.round(random(20, 370)), 49, 10); 
  pink.addImage(pinkBalloonImage); 
  pink.velocityX = 3; 
  pink.lifetime = 150; 
  pink.scale = 0.1; 
  pinkG.add(pink); 
  
  
} 


  

