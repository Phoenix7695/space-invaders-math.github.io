function Loss() {
    this.solution = [];

    this.show = function() {
        rectMode(CENTER);

        stroke(0);
        fill(25);
	    strokeWeight(10);
        rect(windowWidth/2, 300, 650, 300);

        fill(255);
        strokeWeight(3);
        textSize(48);
        stroke(0);
        text('You Lost!', width/2, 200);

        textSize(30);
        text('To Try Again, Refresh Page', width/2, 430);


        if (randomSol == 1) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 3x-12 = 3(2x-6)', width/2 - 100, 260);
		}

		if (randomSol == 2) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: -10x + 120 = 0', width/2 - 100, 260);
		}

		if (randomSol == 3) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 3x(2 + 6) = 24', width/2 - 100, 260);
		}

		if (randomSol == 4) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 4x + 23 = 6x - 1', width/2 - 100, 260);
		}

		if (randomSol == 5) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 12x = 3(2x + 4)', width/2 - 100, 260);
		}
    }
}
