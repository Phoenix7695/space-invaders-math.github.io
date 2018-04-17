function Health(ind) {
    this.x = width/2 - 325 + ind*50

    this.show = function() {
        rectMode(CENTER);

        fill(255);
        noStroke();
        textSize(20);
        text('Health:', width/2 - 310, 125);

        fill(10, 0, 255, 220);
        noStroke();
        rect(this.x, 150, 40, 10);
    }
}