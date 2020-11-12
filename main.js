function preload(){
  img=loadImage("dog_cat.jpg") 
      
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center()
   
}


function draw(){
    image(img,0,0,500,500);
    fill("yellow")
    text("Dog",50,85)
    text("Cat",400,85)
    text("Cup",200,400)
    textSize(20)
    noFill()
    stroke("#FF0000")
    strokeWeight(3)
    rect(1,20,250,300)
    rect(120,375,260,120)
    rect(250,25,230,300)
}