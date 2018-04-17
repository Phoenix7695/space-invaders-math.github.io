function HowTo() {

    this.show = function() {
        rectMode(CENTER);

    //setting things and whatever
        strokeWeight(4);
        stroke(0);
        fill(42, 255);

    //rectangle will soon exist
        rect(windowWidth/2, 375, 650, 500)

    //header thing
        textSize(48);
        fill(255);
        rectMode(CENTER);
        text('How To Play', windowWidth/2, 175);

    //text goes here
        textSize(18);
        text('The objective of this game is to last as long as possible.', windowWidth/2, 225);
        text('Every so often, you will have to solve a random math problem.', windowWidth/2, 250);
        text('You must also not allow the "aliens" to pass or hit you.', windowWidth/2, 275);
        text('The problem is required to be solved for you to progress.', windowWidth/2, 300);

        text('Note: As you answer the problem,\n the game will continue, and you may lose health!', windowWidth/2, 325);

    //space
        text('Movement:', windowWidth/2, 375);

    //wasd, arrow key imgs
        imageMode(CENTER);
        image(wasd, windowWidth/2 - 100, 410);
        image(arrows, windowWidth/2 + 100, 410);

    //space
        text('Attack/Shoot:', windowWidth/2 - 50, 500);
        image(j, windowWidth/2 + 50, 500, 50, 50);

    //close button
        fill(255);
        textSize(24);
        text('[Close]', windowWidth/2 - 225, 580);

        noFill();
        stroke(255);
        rect(windowWidth/2 - 225, 572.5, 105, 40);

    //underline (yes I had to put in this much effort into the title of this worthless popup)
        stroke(0, 200);
        line(windowWidth/2 - 180, 180, windowWidth/2 + 180, 180);
    }

    this.goAway = function() {
        fill(25);
        strokeWeight(10);
        rect(width/2, height/2, 750, 800);
    //put in the logo
	    imageMode(CENTER);
	    image(siIMG, (windowWidth/2) + 125/5, 250, 2175/4, 1100/4);

    //text and whatever
    	textSize(24);
    	textAlign(CENTER);
    	fill(220);
    	stroke(0);
    	strokeWeight(2);
    	text('[Play]', windowWidth/2, 550);
    	text('[How To Play]', windowWidth/2, 600)
    	text('[Quit]', windowWidth/2, 650)

    //rectangles and whatever
    	strokeWeight(3);
    	stroke(230);
    	noFill();

	    rectMode(CENTER);
	    rect(width/2, 542.5, 90, 35);
	    rect(width/2, 592.5, 175, 35);
	    rect(width/2, 642.5, 90, 35);    
    }
}