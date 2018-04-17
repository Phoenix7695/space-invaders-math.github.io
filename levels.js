    function Levels() {
    this.show = function() {
        rectMode(CENTER);

        //bg
        fill(25);
        strokeWeight(10);
        stroke(0);
        rect(width/2, height/2, 750, 800);

        //title
        textSize(48);
        fill(255);
        strokeWeight(4);
        text('Levels', windowWidth/2, 175);

        //underline
        line(width/2 - 80, 180, width/2 + 80, 180);

        //back button
        textSize(36);
	    textAlign(CENTER);
	    fill(220);
	    stroke(0);
	    strokeWeight(2);
        text('[Back]', width/2 - 275, height - 150);

        //rectangle-back
        noFill();
        strokeWeight(3);
        stroke(230);
        rectMode(CENTER);
        rect(width/2 - 275, height - 162.5, 140, 50);
    }

    this.goAway = function() {
        var rectx = (width/2) - (750/2);
    	var recty = (height/2) - (800/2);

	    fill(25);
	    strokeWeight(10);
    	rect(rectx, recty, 750, 800);

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