function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    noStroke();
    background('white');
    fill('black');
    rect(100, 50, 100, 200)
    fill('grey');
    circle(150, 100, 40);
    circle(150, 150, 40);
    circle(150, 200, 40);
    
    if ((mouseY < 100)&&(mouseIsPressed === true))
    { fill('red');
     circle(150, 100, 40);
      }  
    else if ((mouseY > 200)&&(mouseIsPressed === true)){ 
          fill('green');
          circle(150, 200, 40);
           }  
    else if (mouseY < 200 && mouseY>100 && (mouseIsPressed === true)) {
          fill('yellow');
          circle(150, 150, 40);      
    }
    
    print(mouseIsPressed);
       
  }