function AlienTwo(ind, sp, sp2) {
    this.yDir = sp;
    this.xDir = sp2;
    this.index = ind;

    if (ind == 0) {
        this.x = random(width/2 - 50, width/2 - 300);
    } else {
        this.x = random(width/2 + 50, width/2 + 300);
    }
    this.y = 200;
    this.toDeleteOne = false;
    this.toDeleteTwo = false;

    this.show = function() {
        imageMode(CENTER);
        image(invaderIMG, this.x, this.y, 800/11, 582/11);
    }

    this.move = function() {
        if (this.x > width/2 - 300 && this.x < width/2 + 300) {
            this.y += this.yDir;
            this.x += this.xDir;
        } else {
            this.y += this.yDir;
            this.x += -1 * this.xDir;
        }
    }

    this.goAwayOne = function() {
        this.toDeleteOne = true;
    }
    this.goAwayTwo = function() {
        this.toDeleteTwo = true;
    }

    this.hits = function(ship) {
        if (ship.y - 285/6 > this.y - 582/22 && ship.y + 286/6 < this.y + 582/22) {
            if (ship.x - 236/6 > this.y - 800/22 && ship.x + 236/6 < this.y + 800/11) {
                return true;
            }return false;
        }return false;
    }
}