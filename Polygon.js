class Polygon{
    constructor(x, y, width, height) {
        var options = {
            density: 2
        }

        this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width-5, this.height-5);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+30, this.height+30);
        pop();
      }
}