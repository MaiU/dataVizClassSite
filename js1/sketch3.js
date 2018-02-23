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

function draw(){
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
    textSize(15);
    text("<154 buildings", 1275, 260);
    text("155<x<460 buildings", 1275, 240);
    text("461<x<837 buildings", 1275, 220);
    text(">838 buildings", 1275, 200);
    c = color('hsba(0, 100%, 0%, 0.2)');
    fill(c)
    ellipse(1475, 247, 15, 15);
    ellipse(1475, 240, 30, 30);
    ellipse(1475, 225, 60, 60);
    ellipse(1475, 210, 90, 90);
    fill(255, 204, 0);
    ellipse(1475, 50, 25, 25);
    fill(30, 144, 255);
    ellipse(1475, 90, 25, 25);
    fill(255, 20, 147);
    ellipse(1475, 130, 25, 25);





    for (var i = 0; i < bubbleTable.getRowCount(); i++){
      var b = bubbleTable.getNum(i, 'build_num');
      var c = bubbleTable.getNum(i, 'clus');
      var northSouth = bubbleTable.getNum(i, 'locNS');
      var westEast = bubbleTable.getNum(i, 'locWE');
      var year = bubbleTable.getNum(i, 'x');
      var year1 = parseInt(year);
      var yearPosition = map(year1, 1900, 2040, 50, 1200);
      var locPosition = map(northSouth, 0, 15, 50, 800);
      if ((b < 154) && (c = 1) && (westEast = 1)){
          fill(255, 204, 0);
          ellipse(650-i, locPosition, 15, 15);
        }
        else if ((b >154) && (b < 460) && (c == 1) && (westEast ==1)){
          fill(255, 204, 0);
          ellipse(600-i, locPosition, 30, 30);
        }
          else if((b > 460) && (b < 837) && (c == 1) && (westEast ==1)){
            fill(255, 204, 0);
            ellipse(550-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 1) && (westEast ==1)){
            fill(255, 204, 0);
            ellipse(500-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 2) && (westEast == 1)){
            fill(30, 144, 255);
            ellipse(400-i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 2) && (westEast ==1)) {
            fill(30, 144, 255);
            ellipse(350-i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 2) && (westEast ==1)) {
            fill(30, 144, 255);
            ellipse(300-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 2) && (westEast == 1)){
            fill(30, 144, 255);
            ellipse(250-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 3) && (westEast == 1)){
            fill(255, 20, 147);
            ellipse(200-i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 3) && (westEast ==1)){
            fill(255, 20, 147);
            ellipse(150-i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 3) && (westEast ==1)) {
            fill(255, 20, 147);
            ellipse(100-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 3) && (westEast == 1)){
            fill(255, 20, 147);
            ellipse(50-i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c = 1) && (westEast ==0)){
              fill(255, 204, 0);
              ellipse(700+i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 1) && (westEast ==0)){
            fill(255, 204, 0);
            ellipse(750+i, locPosition, 30, 30);
          }
          else if((b > 460) && (b < 837) && (c == 1) && (westEast ==0)){
            fill(255, 204, 0);
            ellipse(550-i, locPosition, 60, 60);
          }
          else if((b>837) && (c == 1) && (westEast ==0)){
            fill(255, 204, 0);
            ellipse(800+i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 2) && (westEast == 0)){
            fill(30, 144, 255);
            ellipse(850+i, locPosition, 15, 15);
          }
          else if ((b >460) && (b < 837) && (c == 2) && (westEast ==0)) {
            fill(30, 144, 255);
            ellipse(900+i, locPosition, 30, 30);
          }
          else if((b>837) && (c == 2) && (westEast ==0)){
            fill(30, 144, 255);
            ellipse(950+i, locPosition, 90, 90);
          }
          else if ((b < 154) && (c == 3) && (westEast == 0)){
            fill(255, 20, 147);
            ellipse(1000+i, locPosition, 15, 15);
          }
          else if ((b >154) && (b < 460) && (c == 3) && (westEast ==0)){
            fill(255, 20, 147);
            ellipse(1050+i, locPosition, 30, 30);
          }
          else if ((b >460) && (b < 837) && (c == 3) && (westEast ==0)) {
            fill(255, 20, 147);
            ellipse(1100+i, locPosition, 60, 60);
          }
          else{
            fill(255, 20, 147);
            ellipse(1150+i, locPosition, 90, 90);
          }
          }
        }
