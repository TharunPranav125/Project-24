class PlayerArrow {
    constructor(x, y) {
      var options = {
        restitution : 0.8,
        friction : 1,
        density : 1,
        isStatic : true
      };
      this.Image = loadImage("assets/arrow.png");

      this.width = width;
      this.height = height;


      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);

      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.Image, 0, 0, width, height);
      pop();
    }
    
  }