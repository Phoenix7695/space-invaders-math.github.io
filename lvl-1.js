function LevelOne() {

    this.showC = function() {
        ellipseMode(CENTER);
        fill(255, 80);
        stroke(255);

        ellipse(700, 300, 150);

        stroke(0);
        fill(255);
        textSize(72);
        text('1', 700, 325);
    }

    this.begin = function() {
        //time is 11:11 PM, wednesday before handing in. send help
        fill(25);
        stroke(0);
        strokeWeight(10);
        rect(width/2, height/2, 750, 800);
    }
}