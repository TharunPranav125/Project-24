class PlayerArcher {
    constructor(x, y, width, height, angle) {

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.Image = loadImage("assets/playerArcher.png");

    }
    display() {
      
      if (keyIsDown(UP_ARROW) && this.angle < 1.77) {
         this.angle += 0.02 
      }
      if (keyIsDown(DOWN_ARROW) && this.angle > -1.47) {
        this.angle -= 0.02
     }
  
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.Image, 0, 0);
        pop();
    }
  }
  