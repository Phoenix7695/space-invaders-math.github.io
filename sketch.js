var siIMG;
var wasd;
var arrows;
var j;
var shipIMG;
var invaderIMG;
var invaders = [];
var k;

//check popups
var popups = [];
var mainMenu = true;
var howToP = false;
var levelsP = false;
var failed = true;

//globals for popups
var levels;
var lvl1;
var ship;
var bullets = [];

//levels and whatnot
var level1 = false;
var healthBar = [];
var wave = 1;
var loss;
var solutionSubmitted = false;

function preload() {
//load logo
//fix it please it looks terrible thanks me in the future!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! pls notice this
	siIMG = loadImage('assets/si-fixed.png');
	wasd = loadImage('assets/wasd-v2.png');
	arrows = loadImage('assets/arrow-v2.png');
	j = loadImage('assets/j-key-v2.png');
	shipIMG = loadImage('assets/ship.png');
	invaderIMG = loadImage('assets/space-invaders-gren.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);

	var rectx = (width/2) - (750/2);
	var recty = (height/2) - (800/2);

	fill(25);
	strokeWeight(10);
	rect(rectx, recty, 750, 800);

//put in the logo
	imageMode(CENTER);
	image(siIMG,	 (windowWidth/2) + 125/5, 250, 2175/4, 1100/4);

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

	ship = new Ship();
	lvl1 = new LevelOne();

	for (var i = 0; i < 2; i++) {
		alienEZ2 = new AlienEz2(i);
		invaders.push(alienEZ2);
	}

	for (var i = 0; i < 5; i++) {
		bar = new Health(i);
		healthBar.push(bar);
	}

	lvl1 = new LevelOne();
	loss = new Loss();
	actualMath = new actualMath();

	randomSol = floor(random(1, 5));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if (failed == false) {
		lvl1.begin();
		waveNum = 1;
		ship.show();

		for (var i = 0; i < healthBar.length; i++) {
			healthBar[i].show();
		}

		for (var i = 0; i < invaders.length; i++) {
			invaders[i].show();
			invaders[i].move();
		}

		//checking if invaders hits ship
		//check: top
		for (var u = 0; u < invaders.length; u++) {
			if (invaders[u].y - 582/22 < ship.y + 285/6 && invaders[u].y + 582/22 > ship.y + 286/6) {
			//check: top-right, top-left
				if (invaders[u].x + 800/22 > ship.x - 236/6 && invaders[u].x - 800/22 < ship.x - 236/6) {
					invaders.splice(u, 1);
					healthBar.splice(healthBar.length - 1, 1);
				} else if (invaders[u].x + 800/22 > ship.x + 236/6 && invaders[u].x + 800/22 < ship.x + 236/6) {
					invaders.splice(u, 1);
					healthBar.splice(healthBar.length - 1, 1);
				}
			}
		}
		//check: bottom
		for (var u = 0; u < invaders.length; u++) {
			if (invaders[u].y - 582/22 < ship.y - 285/6 && invaders[u].y + 582/22 > ship.y - 285/6) {
				//check: bottom-right, bottom-left
				if (invaders[u].x + 800/22 > ship.x - 236/6 && invaders[u].x - 800/22 < ship.x - 236/6) {
					invaders.splice(u, 1);
					healthBar.splice(healthBar.length - 1, 1);
				} else if (invaders[u].x + 800/22 > ship.x + 236/6 && invaders[u].x - 800/22 < ship.x + 236/6) {
					invaders.splice(u, 1);
					healthBar.splice(healthBar.length - 1, 1);
				}
			}
		}

		for (var i = 0; i < invaders.length; i++) {
			if (invaders[i].y > 850) {
				invaders.splice(i, 1);
				healthBar.splice(healthBar.length - 1, 1);
			}
		}

		for (var i = 0; i < bullets.length; i++) {
			if (bullets[i].toDelete) {
				bullets.splice(i, 1);
			}
		}

		for (var i = 0; i < bullets.length; i++) {
			bullets[i].show();
			bullets[i].move();

			//check if hits alien
			for (var j = 0; j < invaders.length; j++) {
				if (bullets.length > 0) {
					if (bullets[i].x > invaders[j].x - 800/22 && bullets[i].x < invaders[j].x + 800/22)	{
						if (bullets[i].startY > invaders[j].y) {
							if (bullets[i].y < invaders[j].y) {
								invaders.splice(j, 1);
							}
						}
					}
				}
			}

			if (bullets[i].y < height/2 - 400) {
				bullets[i].goAway()
			}
		}

		//checks for offscreen (can be bypassed but that's cheap lol)
		if (ship.x > width/2 + 375 - 50) {
			ship.allowRIGHT = false;
			ship.xdir = 0;
		}
		if (ship.x < width/2 + 375 - 50) {
			ship.allowRIGHT = true;
		}
		if (ship.x < width/2 - 375 + 50) {
			ship.allowLEFT = false;
			ship.xdir = 0;
		}
		if (ship.x > width/2 - 375 + 50) {
			ship.allowRIGHT = true;
		}
		if (ship.y > height/2 + 400 - 50) {
			ship.allowDOWN = false;
			ship.ydir = 0;
		}
		if (ship.x < height/2 + 400 - 50) {
			ship.allowRIGHT = true;
		}
		if (ship.y < height/2 - 400 + 50) {
			ship.allowUP = false;
			ship.ydir = 0;
		}
		if (ship.x > height/2 - 400 + 50) {
			ship.allowRIGHT = true;
		}

		//next wave
		if (invaders.length == 0 && waveNum == 1 && failed == false) {
			k = random(1, 12);
			for (var i = 0; i < 2; i++) {
				var randomNumAliens = random(1, 11);
				console.log(k);
				if (randomNumAliens % 2 == 0) {
					var aliens = new AlienEz2(i, random(3, 6), random(-4, 4));
					invaders.push(aliens);
				} else {
					var aliens2 = new AlienTwo(i, random(3, 6), random(-4, 4));
					invaders.push(aliens2);
				}
			}
			waveNum = 2;
		}

		if (healthBar.length == 0) {
			loss.show();
			failed = true;
			level1 = false;
			invaders.splice(invaders.length, invaders.length);
		}
		if (popups.length > 1) {
			for (i = 0; i < 1; i++) {
				popups[i].show();
			}
		}
	}
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW && ship.allowRIGHT == true) {
        ship.moveX(15);
    } else if (keyCode === LEFT_ARROW) {
        ship.moveX(-15);
    } else if (keyCode === 65) {
		ship.moveX(-15);
	} else if (keyCode === 68 && ship.allowRIGHT == true) {
		ship.moveX(15);
	} else if (keyCode === UP_ARROW) {
        ship.moveY(-15);
    } else if (keyCode === DOWN_ARROW) {
        ship.moveY(15);
	} else if (keyCode === 87) {
		ship.moveY(-15);
	} else if (keyCode === 83) {
		ship.moveY(15);
	} else if (keyCode === 74) {
		var bullet = new Bullets(ship.x, ship.y);
		bullets.push(bullet);
	}
	if (failed && mainMenu == false) {
		if (keyCode === 49) {
			loss.solution.push('1');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('1', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 50) {
			loss.solution.push('2');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('2', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 51) {
			loss.solution.push('3');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('3', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 52) {
			loss.solution.push('4');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('4', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 53) {
			loss.solution.push('5');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('5', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 54) {
			loss.solution.push('6');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('6', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 55) {
			loss.solution.push('7');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('7', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 56) {
			loss.solution.push('8');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('8', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 57) {
			loss.solution.push('9');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('9', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 48) {
			loss.solution.push('0');

			fill(255);
	        strokeWeight(3);
			stroke(0);
			textSize(30);
			text('0', width/2 - 150 + (loss.solution.length - 1)*20, 320);
		}
		if (keyCode === 8) {
			loss.solution.splice(loss.solution.length -1, 1);
			rectMode(CENTER);
			fill(25);
			noStroke();
			rect(width/2 - 150 + (loss.solution.length)*20, 310, 20, 30)
		}
		if (keyCode === 13) {
			if (randomSol == 1) {
				if (loss.solution.length == 1 && loss.solution[0] == 2) {
					text('CORRECT', width/2, height/2);
				} else {
					text('FALSE', width/2, height/2)
				}
			}

			if (randomSol == 2) {
				if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
					text('CORRECT', width/2, height/2);
				} else {
					text('FALSE', width/2, height/2)
				}
			}

			if (randomSol == 3) {
				if (loss.solution.length == 1 && loss.solution[0] == 1) {
					text('CORRECT', width/2, height/2);
				} else {
					text('FALSE', width/2, height/2)
				}
			}

			if (randomSol == 4) {
				if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
					text('CORRECT', width/2, height/2);
				} else {
					text('FALSE', width/2, height/2)
				}
			}

			if (randomSol == 5) {
				if (loss.solution.length == 1 && loss.solution[0] == 2) {
					text('CORRECT', width/2, height/2);
				} else {
					text('FALSE', width/2, height/2)
				}
			}
		}
	}
}

function keyReleased() {
	if (level1) {
		if (keyCode === 87 || keyCode === 83 || keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
			ship.moveY(0);
		} else if (keyCode != 74) {
			ship.moveX(0);
		}
	}
}


function mouseClicked() {
	//quit button
	if (mouseX > width/2 - 45 && mouseX < width/2 + 45) {
		if (mouseY > 625 && mouseY < 660) {
			if (mainMenu) {
				remove();
			}
		}
	}
	//how-to
	if (mouseX > width/2 - 87.5 && mouseX < width/2 + 87.5) {
		if (mouseY > 575 && mouseY < 610) {
			if (howToP == false) {
				howP = new HowTo();
				howToP = true;
				mainMenu = false;
				howP.show();
			}
		}
	}
	//close how-to
	if (mouseX > width/2 - 52.5 - 225 && mouseX < width/2 + 52.5 - 225) {
		if (mouseY > 572.5 - 20 && mouseY < 572.5 + 20)
			if (howToP) {
				console.log('congratulations');
				howP.goAway();
				howToP = false;
				mainMenu = true;
			}
	}
	//play
	if (mouseX > width/2 - 45 && mouseX < width/2 + 45) {
		if (mouseY > 525 && mouseY < 560) {
			if (mainMenu) {
				level1 = true;
				failed = false;
				mainMenu = false;
			}
		}
	}
	//start lvl1
	if (dist(mouseX, mouseY, 700, 300) < 75) {
		level1 = true;
		levelsP = false;
	}
	if (failed) {
		if (mouseX > width/2 + 250 - 65 && mouseX < width/2 + 250 + 65) {

				if (randomSol == 1) {
					if (loss.solution.length == 1 && loss.solution[0] == 2) {
						text('CORRECT', width/2, height/2);
					} else {
						text('FALSE', width/2, height/2)
					}
				}

				if (randomSol == 2) {
					if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
						text('CORRECT', width/2, height/2);
					} else {
						text('FALSE', width/2, height/2)
					}
				}

				if (randomSol == 3) {
					if (loss.solution.length == 1 && loss.solution[0] == 1) {
						text('CORRECT', width/2, height/2);
					} else {
						text('FALSE', width/2, height/2)
					}
				}

				if (randomSol == 4) {
					if (loss.solution.length == 2 && loss.solution[0] == 1 && loss.solution[1] == 2) {
						text('CORRECT', width/2, height/2);
					} else {
						text('FALSE', width/2, height/2)
					}
				}

				if (randomSol == 5) {
					if (loss.solution.length == 1 && loss.solution[0] == 2) {
						text('CORRECT', width/2, height/2);
					} else {
						text('FALSE', width/2, height/2)
					}
				}
			}
		}
		if (mouseX > width/2 + 225 - 87.5 && mouseX < width/2 + 225 + 87.5) {
			if (mouseY > 252.5 - 17.5 && mouseY < 252.5 + 17.5) {
				loss.solution.splice(loss.solution.length -1, 1);
			}
		}
}
