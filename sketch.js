const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var backgroundImg ;

function preload() {
    backgroundImg = loadImage("sunrise1.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   
    background(backgroundImg);
    Engine.update(engine);

    


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    console.log(response);
    var responsejson = await response.json();
    var dt = responsejson.datetime;
    var hr = dt.slice(11,13);
    if(hr>=04 && hr<=6){
        bg="sunrise1.png";
    }
    else if(hr>=06 && hr<=8){
        bg="sunrise2.png";
    }
    else if(hr>=23 && hr==0){
        bg="sunset10.png";
    }
    else if(hr==0 && hr<=3){
        bg="sunset11.png";
    }
    else{
        bg="sunset12.png";
    }
    backgroundImg=loadImage(bg);
}
