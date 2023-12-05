//your parameter variables go here!

var x = 100;
var y = 150;
var z = 0
let strokeW1 = 2;  
let strokeW2 = 5;  

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(64,224,208); // turquoise

}

function my_symbol() {
  rectMode(CENTER); // center the shapes - help from

strokeWeight(strokeW1)
  // first square
  fill(z,z,139);
  rect(x, x, x);
  
  // second square
  fill(64, 224, 208);
  rect(x, x, 70, 70);
  
  // tird square
  fill(z, z,300)
  rect(x, x, 40, 40);

  fill(400)
  rect(x,x,20,20);

  strokeWeight(strokeW2);
  // first horizontal line
  stroke(255, 160, z); // orange
  line(-90, 50, width, 50);
  
  // second horizontal line
  stroke(128, z, 80); // dark purple
  line(-90, 150, width, y);

  // first vertical line
  stroke(255, 190, 203) // pastel pink
  line(50, -120, 50, height);
  
  // second vertical line
  stroke(255, 215, z); // yellow
  
  line(150, -120, y, height);
  translate(100, 100); // center the diamond - Help from AI 
  stroke('white'); 
  strokeWeight(2); 
  fill(255,z,z);
  beginShape();
  vertex(0, -25); // top point
  vertex(25, 0); // right point
  vertex(0, 25); // bottom point
  vertex(-25, 0); // left point
  endShape(CLOSE);
}
 




