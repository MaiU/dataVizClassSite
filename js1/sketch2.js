function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 1);
  print ('Setup complete...hello')
}

var maxSize = 25;
var minSize = 5;
function draw(){
    background(100, );
  for (var i=0; i < 10; i++){
    for (var j = 0; j < 10; j++){
      var distanceToMouse = dist(mouseX, mouseY, 30 + 30 * i, 30 + 30 * j);
      if (distanceToMouse > 40){
        fill(0)
        ellipse(30 + 30*i, 30 + 30 * j, maxSize, maxSize);
      }
      else {
        fill(distanceToMouse*255/120)
        ellipse(30 + 30*i, 30 + 30 * j, distanceToMouse/2, distanceToMouse/2);
      }

   }
  }
}
