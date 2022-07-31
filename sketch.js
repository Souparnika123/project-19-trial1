var PLAY = 1;
var END =0;
var gameState = 1

var girlrunning,girlImg;
var cactus,cactusImg,cactusGroup;
var forest,forestImg;
var zombie,zombieImg;

var gameOver;
var score=0;

function preload(){
girlImg = loadImage("girlrunning.png");
zombieImg = loadImage("zombie.png");
cactusImg = loadImage("cactus.png");
forestImg = loadImage("forest.png");
gameOverImg = loadImage("gameOver.png");

cactusGroup = new Group();

}

function setup() {
 createCanvas(windowWidth,windowHeight);

 forest = createSprite(windowWidth,windowHeight);
 forest.addImage(forestImg)

 girlrunning = createSprite(100,100,20,50);
 girlrunning.addImage(girlImg);
 girlrunning.scale = 0.5;
 girlrunning.velocity=-2;
}

function draw() {

 drawSprites()
}