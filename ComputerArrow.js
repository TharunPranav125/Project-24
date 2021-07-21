class ComputerArrow {
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
    display() {
      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.Image, 0, 0, width, height);
      pop();
    }
    
  }