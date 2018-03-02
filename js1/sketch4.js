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
var buttonLabels = ['>838 buildigns', '461-837 buildings', '155-460', '<155 buildings'];
var selectedButton = 0;
var textXPos = 1275;
var textYorPos = 200;

var buttonStartX = 1200;
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
    fill(192, 192, 192)
    line (625, 30, 625, 750)
    line(30, 375, 1300, 375)
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
    fill(255, 204, 0);
    ellipse(1475, 50, 25, 25);
    fill(30, 144, 255);
    ellipse(1475, 90, 25, 25);
    fill(255, 20, 147);
    ellipse(1475, 130, 25, 25)
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
    else if (bubble_size >154 && bubble_size <460){
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
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(200);
    }
    else {
      fill(240);
    }
    stroke(100);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
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
      var yearPosition = map(year1, 1900, 2040, 50, 1200);
      var locPosition = map(northSouth, 0, 15, 50, 800);
      if((b < 154) && (c = 1) && (westEast = 1)){
          fill(190, 190, 190);
          ellipse(650-i, locPosition, 15, 15);
        }
        else if ((b >154) && (b < 460) && (c == 1) && (westEast ==1)){
          fill(190, 190, 190);
          ellipse(600-i, locPosition, 30, 30);
        }
          else if((b > 460) && (b < 837) && (c == 1) && (westEast ==1)){
            fill(190, 190, 190);
            ellipse(550-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 1) && (westEast ==1)){
            fill(190, 190, 190);
            ellipse(500-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 2) && (westEast == 1)){
            fill(190, 190, 190);
            ellipse(400-i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 2) && (westEast ==1)) {
            fill(190, 190, 190, );
            ellipse(350-i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 2) && (westEast ==1)) {
            fill(190, 190, 190);
            ellipse(300-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 2) && (westEast == 1)){
            fill(190, 190, 190);
            ellipse(250-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 3) && (westEast == 1)){
            fill(190, 190, 190);
            ellipse(200-i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 3) && (westEast ==1)){
            fill(190, 190, 190);
            ellipse(150-i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 3) && (westEast ==1)) {
            fill(190, 190, 190);
            ellipse(100-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 3) && (westEast == 1)){
            fill(255, 20, 147);
            ellipse(50-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c = 1) && (westEast ==0)){
              fill(190, 190, 190);
              ellipse(700+i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 1) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(750+i, locPosition, 30, 30);
          }
          else if((b > 460) && (b < 837) && (c == 1) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(550-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 1) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(800+i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 2) && (westEast == 0)){
            fill(190, 190, 190);
            ellipse(850+i, locPosition, 15, 15);
          }
          else if ((b >460) && (b < 837) && (c == 2) && (westEast ==0)) {
            fill(190, 190, 190);
            ellipse(900+i, locPosition, 30, 30);
          }
          else if((b>837) && (c == 2) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(950+i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 3) && (westEast == 0)){
            fill(190, 190, 190);
            ellipse(1000+i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 3) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(1050+i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 3) && (westEast ==0)) {
            fill(190, 190, 190);
            ellipse(1100+i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 3) && (westEast ==0)){
            fill(190, 190, 190);
            ellipse(1150+i, locPosition, 90, 90);
         }
          else if ((selectedButton == 0) && (c = 1) && (westEast = 1)){
            fill(255, 204, 0);
            ellipse(650-i, locPosition, 15, 15);
          }
          else if ((selectedButton == 1) && (c == 1) && (westEast ==1)){
            fill(255, 204, 0);
            ellipse(600-i, locPosition, 30, 30);
          }
            else if((selectedButton == 2) && (c == 1) && (westEast ==1)){
              fill(255, 204, 0);
              ellipse(550-i, locPosition, 60, 60);
            }
            else if((selectedButton == 3) && (c == 1) && (westEast ==1)){
              fill(255, 204, 0);
              ellipse(500-i, locPosition, 90, 90);
            }
            else if ((selectedButton == 0) && (c == 2) && (westEast == 1)){
              fill(30, 144, 255);
              ellipse(400-i, locPosition, 15, 15);
            }
            else if ((selectedButton == 1) && (b < 460) && (c == 2) && (westEast ==1)) {
              fill(30, 144, 255);
              ellipse(350-i, locPosition, 30, 30);
            }
            else if ((selectedButton == 2) && (b < 837) && (c == 2) && (westEast ==1)) {
              fill(30, 144, 255);
              ellipse(300-i, locPosition, 60, 60);
            }
            else if((selectedButton == 3) && (c == 2) && (westEast == 1)){
              fill(30, 144, 255);
              ellipse(250-i, locPosition, 90, 90);
            }
            else if ((selectedButton == 0) && (c == 3) && (westEast == 1)){
              fill(255, 20, 147);
              ellipse(200-i, locPosition, 15, 15);
            }
            else if ((selectedButton == 1) && (b < 460) && (c == 3) && (westEast ==1)){
              fill(255, 20, 147);
              ellipse(150-i, locPosition, 30, 30);
            }
            else if ((selectedButton == 2) && (b < 837) && (c == 3) && (westEast ==1)) {
              fill(255, 20, 147);
              ellipse(100-i, locPosition, 60, 60);
            }
            else if((selectedButton == 3) && (c == 3) && (westEast == 1)){
              fill(255, 20, 147);
              ellipse(50-i, locPosition, 90, 90);
            }
            else if ((selectedButton == 0) && (c = 1) && (westEast ==0)){
                fill(255, 204, 0);
                ellipse(700+i, locPosition, 15, 15);
            }
            else if ((selectedButton == 1) && (b < 460) && (c == 1) && (westEast ==0)){
              fill(255, 204, 0);
              ellipse(750+i, locPosition, 30, 30);
            }
            else if((selectedButton == 2) && (b < 837) && (c == 1) && (westEast ==0)){
              fill(255, 204, 0);
              ellipse(550-i, locPosition, 60, 60);
            }
            else if((selectedButton == 3) && (c == 1) && (westEast ==0)){
              fill(255, 204, 0);
              ellipse(800+i, locPosition, 90, 90);
            }
            else if ((selectedButton == 0) && (c == 2) && (westEast == 0)){
              fill(30, 144, 255);
              ellipse(850+i, locPosition, 15, 15);
            }
            else if ((selectedButton == 1) && (c == 2) && (westEast ==0)) {
              fill(30, 144, 255);
              ellipse(900+i, locPosition, 30, 30);
            }
            else if ((selectedButton == 2) && (c == 2) && (westEast ==0)){
              fill(30, 144, 255);
              ellipse(900+i, locPosition, 60, 60);
            }
            else if ((selectedButton == 3) && (c == 2) && (westEast ==0)){
              fill(30, 144, 255);
              ellipse(950+i, locPosition, 90, 90);
            }
            else if ((selectedButton == 0) && (c == 3) && (westEast == 0)){
              fill(255, 20, 147);
              ellipse(1000+i, locPosition, 15, 15);
            }
            else if ((selectedButton == 1) && (b < 460) && (c == 3) && (westEast ==0)){
              fill(255, 20, 147);
              ellipse(1050+i, locPosition, 30, 30);
            }
            else if ((selectedButton == 2) && (c == 3) && (westEast ==0)) {
              fill(255, 20, 147);
              ellipse(1100+i, locPosition, 60, 60);
            }
            else {
              fill(255, 20, 147);
              ellipse(1150+i, locPosition, 90, 90);
            }

          }
          }

function draw(){
  background(255);
  drawLegend();
  drawBubbles();
  drawButtons();
}

// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
}
