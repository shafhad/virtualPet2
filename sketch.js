//Create variables here
var dog, dogImage;
var happydogImage;
var database, foodS, foodStock;
var feedButton, newFoodButton;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
  
  
}

function setup() {
	createCanvas(500, 500);

   foodObj=new food(100, 250, 1, 1);

  dog=createSprite(250, 250);
  dog.addImage(dogImage);
  dog.scale=0.2;

  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);


  
    button = createButton('Feed dog');
    button.position(displayWidth/2+30, displayHeight/2);
    
    button = createButton('Restock food');
    button.position(displayWidth/4, displayHeight/2);

}


function draw() {  
 background(46, 139, 87);


  drawSprites();
  //add styles here
  fill("white");
    textSize(20);
    text("Food Supply: "+ foodS, 50, 150);
    
    foodObj.display();

    fedTime=database.ref('feedTime');
    fedTime.on("value", function(data){
      lastFed=data.val();
    })

    //if(keyDown(UP_ARROW)){
//  foodStock=foodStock-1;
//}

//if(keyWentDown(UP_ARROW)){
 // writeStock(foodS);
  //console.log(foodS);
 // dog.addImage(happydogImage);
//}
}


function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref(' / ').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
  //console.log(foodS);
}

function feedDog(){
  dog.addImage(happydogImage);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObj.getFoodStock,
    feedTime: hour()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}