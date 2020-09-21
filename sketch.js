function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // put setup code here
 angleMode(DEGREES);

 rectMode(CENTER);


}

function draw() {
  // put drawing code here




    noStroke();

    if(frameCount%2==0){

      fill("yellow")

    } else {

      fill("blue");

    }

/*

    if(keyIsPressed==true&&frameCount%2==0){

      background("red");

    }


    if(keyIsPressed==true&&frameCount%2==1){

      background("magenta");

    }

    */

    if(keyIsPressed==false){

      background(lerpColor(color("black"), color("white"), mouseX/1500));

    }


    push();

    translate(width / 2, height / 2);

    rotate(frameCount * 2);

    scale(sin(frameCount));

    rect(0, 0, 500, 500);

    pop();




  }
