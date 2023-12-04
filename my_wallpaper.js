//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function setup() {
  createCanvas(600, 600);
  background(240);
}

function draw() {
 // center ?
  x = width / 2;
  y = height / 2;
  
  // diamond size
   d = 100;

  fill(255,0,0);
  beginShape();
  vertex(x, y - d); // top
  vertex(x + d, y); // right ?
  vertex(x, y + d); // bottom ?
  vertex(x - d, y); // left 
  endShape(CLOSE);

  fill(15,7,3);
  rect(200,270,90,30); //first rect
  rect(width - 290,300,90,30); //sec rect
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
}function setup() {
  createCanvas(600, 600);
  background(240);
}

function draw() {
 // center ?
  x = width / 2;
  y = height / 2;
  
  // diamond size
   d = 100;

  fill(255,0,0);
  beginShape();
  vertex(x, y - d); // top
  vertex(x + d, y); // right ?
  vertex(x, y + d); // bottom ?
  vertex(x - d, y); // left 
  endShape(CLOSE);

  fill(15,7,3);
  rect(200,270,90,30); //first rect
  rect(width - 290,300,90,30); //sec rect
}


function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // diamond center
  let x = width / 2;
  let y = height / 2;
  
  // diamond size
  let d = 100;
  
  beginShape();
  vertex(x, y - d); // top point
  vertex(x + d, y); // right point
  vertex(x, y + d); // bottom point
  vertex(x - d, y); // left point
  endShape(CLOSE);
}
