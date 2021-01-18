class paper{
        constructor(x,y,r){
      var option ={
      isStatic: false,
      restitution:0.3,
      friction:0.5,
      density:1.2,
      }
      this.x=x;
      this.y=y;
      this.r=r;

      this.image=loadImage("paper.png")

      this.body=Bodies.circle(this.x,this.y,r/2,option)
      World.add(world,this.body);
      
        }
      display(){
          var paperpos =this.body.position;
          push();
          translate(paperpos.x,paperpos.y);
          fill(255,0,255);
          imageMode(CENTER)
          image(this.image,0,0,this.r,this.r);
          pop();   
      }
      };