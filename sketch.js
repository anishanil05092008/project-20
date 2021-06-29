var cat , mouse1;
var catWalking ;
var cat1 , mouse2 ,  mouse4 ;
var garden;

function preload() {
    //load the images here

    garden = loadImage ("garden.png");

    cat = loadImage ("cat1.png");
    catWalking  = loadImage ("cat2.png,cat3.png");
     cat1 = loadImage ("cat4.png" );

     mouse1 = loadImage ("mouse1.png");
     mouse2 = loadImage ("mouse2.png,mouse3.png");
  mouse4 = loadImage ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var garden = createSprite(100,50);
    garden.addImage ("garden");
    garden.scale ("1");

    var cat = createSprite(200,700);
    cat.addImage("cat");
    cat.scale("0.5");

    var catWalking = createSprite(800,700,50,10);
    catWalking.addAnimation ("cat2.png,cat3.png");
    catWalking.scale("0.5");

    var mouse1 = createSprite(200,700,50,10);
    mouse1.addImage("0.5");
    mouse1.scale("0.5");

    var mouse2 = createSprite(200,700,50,10);
    mouse2.addAnimation("mouse2.png,mouse3.png");
    mouse2.scale("0.5");

    var mouse4 = createSprite(200,700,50,10);
    mouse4.addImage("mouse4.png");
    mouse4.scale("0.5");

}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide

   if cat.x - mouse.x < (cat.width - mouse.width)/2{

    mouse.addAnimation ("mouse2.png,mouse3.png",mouse2);
    mouse.changeAnimation("mouse4.png",mouse4);

    cat.addAnimation("cat2.png,cat3.png",cat);
    cat.changeAnimation("cat4.png");

   }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


  if (keydown (LEFT_ARROW)){
    
    mouse.addAnimation ("mouse1.png",mouse1);
    mouse.changeAnimation("mouse2.png,mouse3.png",mouse2);

    cat.addAnimation("cat1.png",cat);
    cat.changeAnimation("cat2.png,cat3.png",catWalking);

  }

}
