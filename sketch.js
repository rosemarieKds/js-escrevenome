function setup() {
    createCanvas(600, 600);
      background("pink");
  }
  
  function draw() {
    stroke ("yellow");
    fill ("green");
    
    // console.log(mouseIsPressed);
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 35, 45);
    }
  }