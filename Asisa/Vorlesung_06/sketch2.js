let counter = 0
function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
  colorMode(HSB, 100);
  noLoop();
}

function draw() {
  background(220);
  
  for(let x = 40; x < width; x+= 40){
    for(let y = 40; y < height; y+= 40){
  		
      fill(counter, 100, 100);
      ellipse(x, y, 20, 20);
      counter++;
    }
  }
}

