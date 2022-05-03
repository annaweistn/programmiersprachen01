function setup() {
  createCanvas(800, 300);
}
function draw () {
  background(220);
  stroke(0);

  for (let x= 10; x<=800; x += 20) {
      for(let y = 10; y <= 300; y+=20){
          circle(x, y, 20);
          fill(255, 0, 0);
      }
  }
}
