class food{
    constructor(){
  
     this.image=loadImage("Milk.png");
     var lastFed;
     var foodStock;
    }

display(){
    //var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
}

  
getFoodStock(){
}

updateFoodStock(){
}

deductFood(){
}

}