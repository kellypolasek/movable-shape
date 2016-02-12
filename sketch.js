// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myShape = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myShape.drawShape = function () {
	ellipse(250, 400, 350, 100); // draw the car body
  ellipse(100, 450, 50, 50); // draw back wheel
  ellipse(100, 450, 30, 30); // draw back hubcap
  ellipse(400, 450, 50, 50); // draw front wheel
  ellipse(400, 450, 30, 30); // draw back hubcap
  ellipse(431, 397, 10, 20); // draw headlight
  rect(270, 360, 60, 75); // draw front door
  rect(170, 360, 60, 75); // draw back door
  ellipse(391, 351, 5, 45); // draw windshield
	// your code goes here
};

	myShape.speed.x = 1; // You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(100); // refresh the background
  myShape.display(); // display myShape
  myShape.update(); // and then update it
};
