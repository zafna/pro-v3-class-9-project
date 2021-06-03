var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(100,100);
  btn_red.mousePressed(redbg);
  
  
  btn_green = createButton("GREEN");
  btn_green.position(200,100);
  btn_green.mousePressed(greenbg);
}

function draw() {
  background(r,g,b);
}

function redbg()
{
  r = 255;
  g = 0;
  b =0;
}

function greenbg()
{
  r = 0;
  g = 255;
  b =0;
}


