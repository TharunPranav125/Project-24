class ComputerBase {
    constructor(x, y, width, height) {
        var options= {
            isStatic : true
        }
        
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);

        this.Image = loadImage("assets/base1.png");
    }

    display () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Image, 0, 0, this.width, this.height);;
        pop();
    }
}