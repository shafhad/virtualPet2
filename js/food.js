class food{
    constructor(){
  
     this.image=loadImage("Milk.png");
     this.lastFed=0;
     this.foodStock=0;
    }

display(){
    //var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, 150, 200, 50, 50); 
}

  
getFoodStock(){
    //console.log(this.foodStock);
return this.foodStock;
}

updateFoodStock(){
   // console.log(foodStock);
    this.foodStock=foodStock;
}

deductFood(){
    if(foodStock>0){
        this.foodStock=this.foodStock-1;
    }
}

getFeedTime(){
    this.lastFed=lastFed;

}

}



