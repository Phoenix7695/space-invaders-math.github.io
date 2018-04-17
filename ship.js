function Ship() {
    this.x = width/2;
    this.y = height - 400;

    this.xdir = 0;
    this.ydir = 0;
    
    this.allowLEFT = true;
    this.allowRIGHT = true;
    this.allowUP = true;
    this.allowDOWN = true;

    this.show = function() {
        fill(50);
        image(shipIMG, this.x, this.y, 236/3, 285/3);

        this.x += this.xdir;
        this.y += this.ydir;
    }

    this.moveX = function(dirX) {
        this.xdir = .75 * dirX;
    }

    this.moveY = function(dirY) {
        this.ydir = .75 * dirY;
    }
}