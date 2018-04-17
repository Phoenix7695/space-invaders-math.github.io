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
        text('To Try Again, Refresh Page', width/2, 400);

        text('1', width/2 - 100, 300);
        text('2', width/2 - 70, 300);
        text('3', width/2 - 40, 300);
        text('4', width/2 - 10, 300);
        text('5', width/2 + 20, 300);
        text('6', width/2 + 50, 300);
        text('7', width/2 + 80, 300);
        text('8', width/2 + 110, 300);
        text('9', width/2 + 140, 300);
        text('0', width/2 + 170, 300);
        text('Submit:', width/2 + 250, 300)
        text('Backspace', width/2 + 225, 262.5)

        noFill();
        stroke(255);
        strokeWeight(3);
        rect(width/2 - 100, 290, 30, 30);
        rect(width/2 - 70, 290, 30, 30);
        rect(width/2 - 40, 290, 30, 30);
        rect(width/2 - 10, 290, 30, 30);
        rect(width/2 + 20, 290, 30, 30);
        rect(width/2 + 50, 290, 30, 30);
        rect(width/2 + 80, 290, 30, 30);
        rect(width/2 + 110, 290, 30, 30);
        rect(width/2 + 140, 290, 30, 30);
        rect(width/2 + 170, 290, 30, 30);
        rect(width/2 + 250, 290, 130, 30);
        rect(width/2 + 225, 252.5, 175, 35);

        if (randomSol == 1) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 3x-12 = 3(2x-6)', width/2 - 100, 260);
		}
		if (randomSol == 1 && solutionSubmitted == true) {
			if (loss.solution.length == 1 && loss.solution[0] == 2) {
				text('CORRECT', width/2, height/2);
			} else {
				text('FALSE', width/2, height/2)
			}
		}

		if (randomSol == 2) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: -10x + 120 = 0', width/2 - 100, 260);
		}
		if (randomSol == 2 && solutionSubmitted == true) {
			if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
				text('CORRECT', width/2, height/2);
			} else {
				text('FALSE', width/2, height/2)
			}
		}

		if (randomSol == 3) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 3x(2 + 6) = 24', width/2 - 100, 260);
		}
		if (randomSol == 3 && solutionSubmitted == true) {
			if (loss.solution.length == 1 && loss.solution[0] == 1) {
				text('CORRECT', width/2, height/2);
			} else {
				text('FALSE', width/2, height/2)
			}
		}

		if (randomSol == 4) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 4x + 23 = 6x - 1', width/2 - 100, 260);
		}
		if (randomSol == 4 && solutionSubmitted == true) {
			if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
				text('CORRECT', width/2, height/2);
			} else {
				text('FALSE', width/2, height/2)
			}
		}

		if (randomSol == 5) {
			textSize(30);
			strokeWeight(3);
			stroke(0);
			fill(255);
            text('Solve for x: 12x = 3(2x + 4)', width/2 - 100, 260);
		}
		if (randomSol == 5 && solutionSubmitted == true) {
			if (loss.solution.length == 1 && loss.solution[0] == 2) {
				text('CORRECT', width/2, height/2);
			} else {
				text('FALSE', width/2, height/2)
			}
		}
    }
}