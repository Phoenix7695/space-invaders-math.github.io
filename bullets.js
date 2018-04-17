function Bullets(x, y) {
    this.x = x;
    this.y = y;

    this.startY = y;

    this.toDelete = false;

    this.show = function() {
        fill(255, 200);
        stroke(50);
        strokeWeight(2);
        ellipse(this.x, this.y, 10, 10)
    }
    this.move = function() {
        this.y = this.y - 10;
    }
    this.goAway = function() {
        this.toDelete = true;
    }

    this.hits = function() {
        if (this.x > width/2 - 200 - 800/22 && this.x < width/2 - 200 + 800/22) {
            console.log('you have nothing to lose but your chains!');
        }
    }
}