//setup - run once when the code is first starts
function setup() {
  createCanvas(1080, 720); // this sets the size of the area in which we can draw things. We call it a canvas
  textSize(32); // sets the size of the textAscent()

}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  clear(); // resets all elements on screen
  background(170); // this makes the whole canvas the screen grey
  text("x pos is " + mouseX, 50, 50); // displays text, including a P5.js variable which tracks the mouse position
  text("y pos is " + mouseY, 50, 80);

  ellipse(mouseX, mouseY, 20, 20); // draws a circle 20 pixels accross at location of the mouse pointer
  line(mouseX, mouseY, pmouseX, pmouseY); // draws a line from the mouse pointer, to where the mouse pointer previously was

}function setup() {
  createCanvas(200, 200);
  background(100,20,20);
}

function draw() {
  background(230,230,270); // 

 
  fill('yellow'); // yellow 
  arc(100, 100, 50, 50, 0, PI);
  fill('blue'); // blue
  arc(125, 100, 50, 50, PI, 0);

  stroke(0); // black for lines
  
  line(200, 100, 95, 150);
  
  stroke(0); // black for lines
 
  line(95, 100, 95, 150); // free
 
  line(130, 130, 150, 130); // free
}



