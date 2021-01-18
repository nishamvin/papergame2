class dustbine{
  constructor(x,y){
this.x=x;
this.y=y;
this.dustbineWidth=200;
this.dustbineHeight=100;
this.wallThickness=20;
this.angle=0;
this.image=loadImage("dustbinegreen.png")

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbineWidth,this.dustbineHeight,this.wallThickness
      ,{isStatic:true})

    this.leftWallBody=Bodies.rectangle(this.x-this.dustbineWidth/2,this.y-this.dustbineHeight/2,this.wallThickness,this.dustbineHeight
      ,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle);

    this.rightWallBody=Bodies.rectangle(this.x+this.dustbineWidth/2,this.y-this.dustbineHeight/2,this.wallThickness,this.dustbineHeight
      ,{isStatic:true})

    Matter.Body.setAngle(this.rightWallBody,-1*this.angle);

    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody);

  }
display(){
    var posBottom =this.bottomBody.position;
    var posLeft =this.leftWallBody.position;
    var posRight =this.rightWallBody.position;
    

    push()
    translate(posLeft.x,posLeft.y)
    imageMode(CENTER);
    strokeWeight(4);
    angleMode(RADIANS);
     fill(255);
     stroke(255);
     rotate(this.angle)
   image(this.image,0,0,this.wallThickness,this.dustbineHeight);  
    pop()
    
   /* push()
    translate(posRight.x,posRight.y)
    rectMode(CENTER);
    strokeWeight(4);
    angleMode(RADIANS);
     fill(255);
     stroke(255);
     rotate(-1*this.angle)
    rect(0,0,this.wallThickness,this.dustbineHeight);  
    pop()

    push()
    translate(posBottom.x,posBottom.y)
    rectMode(CENTER);
    strokeWeight(4);
    angleMode(RADIANS);
     fill(255);
     stroke(255);
    rect(0,0,this.wallThickness,this.dustbineHeight);  
    pop()*/
}
};
