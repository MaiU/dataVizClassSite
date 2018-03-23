
//loading data

function preload(){
  bubbleTable = loadTable("../Data/bubble_prep_final.csv", "csv", "header");
  console.log ("table has been loaded")
}

function setup(){
  createCanvas(1600, 1500);
  text("Roboto");
  print(bubbleTable.getRowCount());
  print(bubbleTable.getColumnCount());
  print(bubbleTable.getColumn('build_num'));
  createNewTable();
  noLoop();
}


var startX = 50;
var endX = 700;
var startY = 400;
var endY = 100;
var startYear = 30;
var endYear = 2020;
var startBld = 0;
var endBld = 2650;
var maxSize = 25;
var minSize = 5;
var buttonLabels = ['All', '<155 buildings', '155-460 buildings', '461-837 buildings', '>838 buildigns'];
var selectedButton = 0;
var textXPos = 1275;
var textYorPos = 200;

var buttonStartX = 1275;
var buttonStartY = 200;
var buttonLength = 120;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;
var buildnumber1 = new p5.Table;
var buildnumber2 = new p5.Table;
var buildnumber3 = new p5.Table;
var buildnumber4 = new p5.Table;


function drawLegend(){
    background(255);
    line (625, 30, 625, 750);
    line(30, 375, 1300, 375);
    fill(192, 192, 192);
    textSize(20);
    text("Inwood", 640, 45);
    text("Downtown", 640, 740);
    text("1900", 600, 770);
    text("2020", 30, 770);
    text("2020", 1250, 770);
    textSize(15);
    text("1900-1917", 1275, 55);
    text("1918-1975", 1275, 95);
    text(">1975", 1275, 135);
    noStroke();
    fill(255, 215, 0);
    ellipse(1475, 50, 25, 25);
    fill(175, 238, 238);
    ellipse(1475, 90, 25, 25);
    fill(255, 105, 180);
    ellipse(1475, 130, 25, 25)
    c = color('hsba(0, 100%, 0%, 0.2)');
    fill(c)
    ellipse(1475, 347, 15, 15);
    ellipse(1475, 340, 30, 30);
    ellipse(1475, 325, 60, 60);
    ellipse(1475, 310, 90, 90);

}


//***Create new table fucntion***//
function createNewTable(){
  buildnumber1.addColumn("build_num");
  buildnumber1.addColumn("x");
  buildnumber2.addColumn("build_num");
  buildnumber2.addColumn("x");
  buildnumber3.addColumn('build_num');
  buildnumber3.addColumn('x');
  buildnumber4.addColumn('build_num');
  buildnumber4.addColumn('x');
  for (var i = 0; i < bubbleTable.getRowCount(); i++){
    var bubble_size = bubbleTable.getNum(i, 'build_num');
    if (bubble_size < 154){
      var newRow1 = buildnumber1.addRow();
      newRow1.setNum('build_num', bubbleTable.getNum(i, 'build_num'));
      newRow1.setNum('x', bubbleTable.getNum(i, 'x'));
    }
    else if (bubble_size >154 && bubble_size < 460){
      var newRow2 =buildnumber2.addRow();
      newRow2.setNum('build_num', bubbleTable.getNum(i, 'build_num'));
      newRow2.setNum('x', bubbleTable.getNum(i, 'x'));
    }
    else if (bubble_size > 461 && bubble_size < 837){
      var newRow3 =buildnumber2.addRow();
      newRow3.setNum('build_num', bubbleTable.getNum(i, 'build_num'));
      newRow3.setNum('x', bubbleTable.getNum(i, 'x'));
    }
    else{
      var newRow4 =buildnumber2.addRow();
      newRow4.setNum('build_num', bubbleTable.getNum(i, 'build_num'));
      newRow4.setNum('x', bubbleTable.getNum(i, 'x'));
    }
    }
    print ("code is stupid");
  }

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(LEFT, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(255);
    }
    else {
      fill(255);
    }
    stroke(255);
    rect(buttonStartX, buttonStartY + i * (buttonHeight + buttonSpacing), buttonLength, buttonHeight);
    fill(192);
    noStroke();
    text(buttonLabels[i], buttonStartX, buttonStartY + i * (buttonHeight + buttonSpacing));
  }
}


/*  textSize(15);
  fill(192, 192, 192);
  text("<154 buildings", 1275, 260);
  text("155<x<460 buildings", 1275, 240);
  text("461<x<837 buildings", 1275, 220);
  text(">838 buildings", 1275, 200);
}*/


//*Bubble chart*//
function drawBubbles(){
    for (var i = 0; i < bubbleTable.getRowCount(); i++){
      var b = bubbleTable.getNum(i, 'build_num');
      var c = bubbleTable.getNum(i, 'clus');
      var northSouth = bubbleTable.getNum(i, 'locNS');
      var westEast = bubbleTable.getNum(i, 'locWE');
      var year = bubbleTable.getNum(i, 'x');
      var year1 = parseInt(year);
      var yearPositionW1 = map(600, 575, 500, 550, 450);
      var yearPositionW2 = map(525, 550, 475, 525, 375);
      var yearPositionW3 = map(450, 475, 400, 450, 300);
      var yearPositionE1 = map(625, 625, 750, 700, 850);
      var yearPositionE2 = map(700, 700, 900, 800, 950);
      var yearPositionE3 = map(775, 775, 975, 875, 1025);
      var locPosition = map(northSouth, 0, 15, 50, 800);
      if ((selectedButton == 0) && (b < 154) && (c == 1) && (westEast == 0)){
                fill(255, 215, 0);
                noStroke();
                ellipse(yearPositionW1-i*0.5, locPosition, 15, 15);
              }
              else if ((selectedButton == 0) && (b < 154) && (c == 2) && (westEast == 0)){
                fill(175, 238, 238);
                noStroke();
                ellipse(yearPositionW2-i*2, locPosition, 15, 15);
              }
              else if ((selectedButton == 0) && (b < 154) && (c == 3) && (westEast == 0)){
                fill(255, 105, 180);
                noStroke();
                ellipse(yearPositionW3-i*4, locPosition, 15, 15);
              }
              else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 1) && (westEast == 0)){
                fill(255, 215, 0);
                noStroke();
                ellipse(yearPositionW1-i*0.5, locPosition, 30, 30);
              }
              else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 2) && (westEast == 0)){
                fill(175, 238, 238);
                noStroke();
                ellipse(yearPositionW2-i*3, locPosition, 30, 30);
              }
              else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 3) && (westEast == 0)){
                fill(255, 105, 180);
                noStroke();
                ellipse(yearPositionW3-i*6, locPosition, 30, 30);
              }
              else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 1) && (westEast == 0)){
                fill(255, 215, 0);
                noStroke();
                ellipse (yearPositionW1-i*0.5, locPosition, 60, 60);
              }
              else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 2) && (westEast == 0)){
                fill(175, 238, 238);
                noStroke();
                ellipse (yearPositionW2-i*4, locPosition, 60, 60);
              }
              else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 3) && (westEast == 0)){
                fill(255, 105, 180);
                noStroke();
                ellipse (yearPositionW3-i*8, locPosition, 60, 60);
              }
              else if((selectedButton == 0) && (b > 837) && (c == 1) && (westEast == 0)){
                fill(255, 215, 0);
                noStroke();
                ellipse(yearPositionW1-i*30, locPosition, 90, 90);
              }
              else if ((selectedButton == 0) && (b < 837) && (c == 2) && (westEast == 0)){
                fill(175, 238, 238);
                noStroke();
                ellipse(yearPositionW2-i*2, locPosition, 90, 90);
              }
              else if ((selectedButton == 0) && (b < 837) && (c == 3) && (westEast == 0)){
                fill(255, 105, 180);
                noStroke();
                ellipse(yearPositionW3-i*3, locPosition, 90, 90);
              }
              else if ((selectedButton == 0) && (b < 154) && (c == 1) && (westEast == 1)){
                  fill(255, 215, 0);
                  noStroke();
                  ellipse(yearPositionE1+i*0.5, locPosition, 15, 15);
              }
                else if ((selectedButton == 0) && (b < 154) && (c == 2) && (westEast == 1)){
                  fill(175, 238, 238);
                  noStroke();
                  ellipse(yearPositionE2+i*2, locPosition, 15, 15);
                }
                else if ((selectedButton == 0) && (b < 154) && (c == 3) && (westEast == 1)){
                  fill(255, 105, 180);
                  noStroke();
                  ellipse(yearPositionE3+i*4, locPosition, 15, 15);
                }
                else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 1) && (westEast == 1)){
                  fill(255, 215, 0);
                  noStroke();
                  ellipse(yearPositionE1+i*0.5, locPosition, 30, 30);
                }
                else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 2) && (westEast == 1)){
                  fill(175, 238, 238);
                  noStroke();
                  ellipse(yearPositionE2+i*3, locPosition, 30, 30);
                }
                else if ((selectedButton == 0) && (b > 154) && (b < 460) && (c == 3) && (westEast == 1)){
                  fill(255, 105, 180);
                  noStroke();
                  ellipse(yearPositionE3+i*6, locPosition, 30, 30);
                }
                  else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 1) && (westEast == 1)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse (yearPositionE1+i*0.5, locPosition, 60, 60);
                  }
                  else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse (yearPositionE2+i*4, locPosition, 60, 60);
                  }
                  else if((selectedButton == 0) && (b > 460) && (b < 837) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse (yearPositionE3+i*8, locPosition, 60, 60);
                  }
                  else if((selectedButton == 0) && (b > 837) && (c == 1) && (westEast == 1)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse(yearPositionE1+i*30, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 0) && (b < 837) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse(yearPositionE2+i*2, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 0) && (b < 837) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse(yearPositionE3+i*3, locPosition, 90, 90);
                  }
            //selection
              else if ((selectedButton == 1) && (b < 154) && (c == 1) && (westEast == 0)){
                  fill(255, 215, 0);
                  noStroke();
                  ellipse(yearPositionW1-i*0.5, locPosition, 15, 15);
                }
                else if ((selectedButton == 1) && (b < 154) && (c == 2) && (westEast == 0)){
                  fill(175, 238, 238);
                  noStroke();
                  ellipse(yearPositionW2-i*2, locPosition, 15, 15);
                }
                else if ((selectedButton == 1) && (b < 154) && (c == 3) && (westEast == 0)){
                  fill(255, 105, 180);
                  noStroke();
                  ellipse(yearPositionW3-i*4, locPosition, 15, 15);
                }
                else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 1) && (westEast == 0)){
                  fill(255, 215, 0);
                  noStroke();
                  ellipse(yearPositionW1-i*0.5, locPosition, 30, 30);
                }
                else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 2) && (westEast == 0)){
                  fill(175, 238, 238);
                  noStroke();
                  ellipse(yearPositionW2-i*3, locPosition, 30, 30);
                }
                else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 3) && (westEast == 0)){
                  fill(255, 105, 180);
                  noStroke();
                  ellipse(yearPositionW3-i*6, locPosition, 30, 30);
                }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 1) && (westEast == 0)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse (yearPositionW1-i*0.5, locPosition, 60, 60);
                  }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 2) && (westEast == 0)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse (yearPositionW2-i*4, locPosition, 60, 60);
                  }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 3) && (westEast == 0)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse (yearPositionW3-i*8, locPosition, 60, 60);
                  }
                  else if((selectedButton == 4) && (b > 837) && (c == 1) && (westEast == 0)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse(yearPositionW1-i*30, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 4) && (b > 837) && (c == 2) && (westEast == 0)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse(yearPositionW2-i*2, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 4) && (b > 837) && (c == 3) && (westEast == 0)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse(yearPositionW3-i*3, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 1) && (b < 154) && (c == 1) && (westEast == 1)){
                      fill(255, 215, 0);
                      noStroke();
                      ellipse(yearPositionE1+i*0.5, locPosition, 15, 15);
                  }
                  else if ((selectedButton == 1) && (b < 154) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse(yearPositionE2+i*2, locPosition, 15, 15);
                  }
                  else if ((selectedButton == 1) && (b < 154) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse(yearPositionE3+i*4, locPosition, 15, 15);
                  }
                  else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 1) && (westEast == 1)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse(yearPositionE1+i*0.5, locPosition, 30, 30);
                  }
                  else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse(yearPositionE2+i*3, locPosition, 30, 30);
                  }
                  else if ((selectedButton == 2) && (b > 154) && (b < 460) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse(yearPositionE3+i*6, locPosition, 30, 30);
                  }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 1) && (westEast == 1)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse (yearPositionE1+i*0.5, locPosition, 60, 60);
                  }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse (yearPositionE2+i*4, locPosition, 60, 60);
                  }
                  else if((selectedButton == 3) && (b > 460) && (b < 837) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse (yearPositionE3+i*8, locPosition, 60, 60);
                  }
                  else if((selectedButton == 4) && (b > 837) && (c == 1) && (westEast == 1)){
                    fill(255, 215, 0);
                    noStroke();
                    ellipse(yearPositionE1+i*30, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 4) && (b > 837) && (c == 2) && (westEast == 1)){
                    fill(175, 238, 238);
                    noStroke();
                    ellipse(yearPositionE2+i*2, locPosition, 90, 90);
                  }
                  else if ((selectedButton == 4) && (b > 837) && (c == 3) && (westEast == 1)){
                    fill(255, 105, 180);
                    noStroke();
                    ellipse(yearPositionE3+i*3, locPosition, 90, 90);
                  }
          }
        }

function draw(){
  drawLegend();
  drawButtons();
  drawBubbles();
}


// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    print("yayyay");
    redraw();
  }
  else if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= (buttonStartY + buttonHeight + buttonSpacing) && mouseY <= (buttonStartY + buttonHeight * 2 + buttonSpacing)){
    selectedButton = 1;
    print("yay");
    redraw();
  }
  else if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= (buttonStartY + buttonHeight + buttonSpacing) && mouseY <= (buttonStartY + buttonHeight * 3 + buttonSpacing * 2)){
    selectedButton = 2;
    print("yay yay yay")
    redraw();
  }
  else if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= (buttonStartY + buttonHeight + buttonSpacing) && mouseY <= (buttonStartY + buttonHeight * 4 + buttonSpacing * 3)){
    selectedButton = 3;
    print("yay yay yay yay")
    redraw();
  }
  else if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= (buttonStartY + buttonHeight + buttonSpacing) && mouseY <= (buttonStartY + buttonHeight * 5 + buttonSpacing * 4)){
    selectedButton = 4;
    print("yay yay yay yay yay")
    redraw();
  }
}
