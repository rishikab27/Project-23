class Box{
    constructor(x,y,width,height){

        var Option={
            restitution:0.5,
        }

        this.width=width
        this.height=height

        this.body=Bodies.rectangle(x,y,width,height,Option)
            World.add(world,this.body)
        
    }

    display(){
    stroke("red");
    strokeWeight(5);
    rectMode(CENTER)
    }

}