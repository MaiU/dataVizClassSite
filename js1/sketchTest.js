//Global Variables for balls
var numBalls = 70;
var spring = 0.03;
var gravity = 0.5;
var friction = -0.95;
var balls = [];

//Global variables for weather
var apikey ='753749779eb2ee5fac8531930414c72d';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var city;
var button
var temperature = [];
var temperatureF = [];
var tempDisplay = [];



function setup() {
    createCanvas(700, 600);
    for (var i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(width), random(height), random(30, 70), i, balls);
    }
    noStroke();
    button = select('#submit'); //button in html
    city = select ('#city');
    button.mousePressed(queryAPI);
  }


function queryAPI(){
  var request = baseURL + city.value() + '&apikey=' + apikey; //&apikey= is telling that the follwoing is my api
  loadJSON(request, getWeatherData); //call-back function, the response gets pased on to getWeatherData
}

function getWeatherData(apiResponse){
  weatherData = apiResponse;
  var description = weatherData.weather[0].main;
  var temprature = weatherData.main.temp;
  var tempDisplay = Math.round((weatherData.main.temp * (9/5)) - 459.67);
  var wind = weatherData.wind.speed;
  print(weatherData);
  redraw();
}

function draw() {
  //var temprature = weatherData.main.temp;
  //var tempDisplay = Math.round((temprature * (9/5)) - 459.67);
  background(255)
    if (weatherData){
      var description = weatherData.weather[0].main;
      var tempDisplay = Math.round((weatherData.main.temp * (9/5)) - 459.67);
      var wind = weatherData.wind.speed;
      textSize(30);
      text (city.value(), 250, 140);
      text(description.charAt(0).toUpperCase()+description.substr(1), 250, 180);
      text('Tempurature'+' ' + tempDisplay + 'F', 250, 220);
      text ('Wind' + ' ' + wind + 'mph', 250, 260)
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].collide();
        balls[i].move();
        balls[i].display();
    }
    if (tempDisplay > 70){
      fill (255, 105, 180, 126);
    }
    if ((tempDisplay < 70) && (tempDisplay >50)){
      fill (252, 226, 5, 126);
    }
    if (tempDisplay < 50){
      fill (0, 191, 255, 126);
    }
}

function Ball(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.diameter = din;
    this.id = idin;
    this.others = oin;

    this.vx = 0;
    this.vy = 0;

    this.collide = function() {
        for (var i = this.id + 1; i < numBalls; i++) {
            var dx = this.others[i].x - this.x;
            var dy = this.others[i].y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var minDist = this.others[i].diameter / 2 + this.diameter / 2;

            if (distance < minDist) {
                var angle = atan2(dy, dx);
                var targetX = this.x + cos(angle) * minDist;
                var targetY = this.y + sin(angle) * minDist;
                var ax = (targetX - this.others[i].x) * spring;
                var ay = (targetY - this.others[i].y) * spring;
                this.vx -= ax;
                this.vy -= ay;
                this.others[i].vx += ax;
                this.others[i].vy += ay;
            }
        }
    }

    this.move = function() {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x + this.diameter / 2 > width) {
            this.x = width - this.diameter / 2;
            this.vx *= friction;
        } else if (this.x - this.diameter / 2 < 0) {
            this.x = this.diameter / 2;
            this.vx *= friction;
        }
        if (this.y + this.diameter / 2 > height) {
            this.y = height - this.diameter / 2;
            this.vy *= friction;
        } else if (this.y - this.diameter / 2 < 0) {
            this.y = this.diameter / 2;
            this.vy *= friction;
        }
    }

    this.display = function() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }

}
