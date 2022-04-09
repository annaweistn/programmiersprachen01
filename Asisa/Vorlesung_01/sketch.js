function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
drawhouse(100, 100, 200, 200);
 }
  
function drawhouse(houseX, houseY, houseWidth, houseHeight) { 
  
  //rect(houseX, houseY ,houseWidth, houseHeight);
  
  const frontY = houseY + houseHeight * .4;
  const frontHeight = houseHeight * .6;
  
  //front
  fill(255, 255, 153);
  rect(houseX, frontY, houseWidth, frontHeight);
  
  //roof
  fill(139, 69, 19);
  
  triangle(houseX, frontY,
          houseX + houseWidth * .5, houseY,
          houseX + houseWidth, frontY);
  
  //window
  fill(0,0,255);
  
  const windowWidth = houseWidth * .25;
  const windowHeight = frontHeight * .25;
  const windowY = frontY + frontHeight * .15;
  
  const leftWindowX = houseX + houseWidth * .1;
  const rightWindowX = (houseX + houseWidth) - 
                       (houseWidth * .1) - windowWidth;
  
  rect(leftWindowX, windowY, windowWidth, windowHeight);
  rect(rightWindowX, windowY, windowWidth, windowHeight);
  
  //door
  fill(139, 69, 19)
  const doorWidth = houseWidth * .25;
  const doorHeight = frontHeight * .4;
  const doorX = houseX + houseWidth * .5 -
                doorWidth * .5;
  const doorY = houseY + houseHeight - doorHeight;
  
  rect(doorX, doorY, doorWidth, doorHeight);
  
  //doorknob
  fill(0);
  
  const doorKnobX = doorX + doorWidth * .2;
  const doorKnobY = doorY + doorHeight * .5;
  const doorKnobSize = houseWidth * .05;
  
  circle(doorKnobX, doorKnobY, doorKnobSize);
  
  }
  
  
