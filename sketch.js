var cat, cat1Image, cat2Image, cat3Image;
var rat, rat1Image, rat2Image, rat3Image;
var park, park1Image;

function preload() {
    cat1Image = loadImage("images/cat1.png");
    cat2Image = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3Image = loadImage("images/cat4.png");

    rat1Image = loadImage("images/mouse1.png");
    rat2Image = loadAnimation("images/mouse2.png", "images/mouse3.png");
    rat3Image = loadImage("images/mouse4.png");

    park1Image = loadImage("images/garden.png");
}


function setup(){
    createCanvas(1000,800);
  
  park = createSprite(500, 400);
  park.addImage("park", park1Image);
  park.scale = 1.1;

  cat = createSprite(800, 600, 20, 20);
  cat.addImage("cat", cat1Image);
  cat.scale = 0.15;

  rat = createSprite(200, 600, 20, 20);
  rat.addImage("rat", rat1Image);
  rat.scale = 0.2;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - rat.x < (cat.width - rat.width)/2){
    cat.velocityX = 0;
      cat.addAnimation("running", cat3Image);
      cat.x = 350;
      cat.changeAnimation("running");
     
    rat.addAnimation("teasing", rat3Image);
      rat.changeAnimation("teasing");
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("running", cat2Image);
      cat.changeAnimation("running");

      rat.addAnimation("teasing", rat2Image);
      rat.changeAnimation("teasing");
  }


}
