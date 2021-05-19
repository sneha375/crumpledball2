class Paper{
  constructor(x,y,radius){
    var options={
      'isStatic':false,
      'restitution':0.5,
      'friction':0.2,
      'density':1.2,
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("paper.png");
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius*3,this.radius*3);
  }
}