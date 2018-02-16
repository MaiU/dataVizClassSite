console.log("hello");

function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 1);
  print ('Setup complete...hello')
}

function draw(){
  noStroke();
colorMode(HSB, 100);
for (var i = 0; i < 1000; i++) {
  for (var j = 0; j < 1000; j++) {
    fill(i, j, 100);
    rect(i*10, j*10, 10, 10);
  }
}
}
