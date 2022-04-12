let num;

function setup() {
    num = 1;
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);
    fill(23,34,93);
    textSize(48);

    if (mouseX > 400) {
    text('True right', width/2, height/2);
    } else if (mouseX > 200) {
      fill(237,34,93);
      //textSize(58)
      text('True left', width/2, height/2);
    } else {
      text('False', width/2, height/2);
    }
}