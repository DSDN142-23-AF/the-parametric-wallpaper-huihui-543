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
  background(64,224,208); //

}

function my_symbol() {
  rectMode(CENTER);
var x = 100
  

  // first square
  fill(0,0,139);
  rect(x, x, x);
  
  // second square
  fill(64, 224, 208);
  rect(x, x, 70, 70);
  
  // tird square
  fill(0,0,300)
  rect(x, x, 40, 40);

  fill(400)
  rect(x,x,20,20);

  strokeWeight(5); // 
  
  // first horizontal line
  stroke('orange');
  line(-90, 50, width, 50);
  
  // second horizontal line
  stroke('purple');
  line(-90, 150, width, 150);

  // first vertical line
  stroke('pink')
  line(50, -120, 50, height);
  
  // second vertical line
  stroke('gold')
  line(150, -120, 150, height);
}




