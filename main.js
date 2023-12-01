var mDX = 0;  
var mIX = 0; 
var mDY = 0;  
var mIY = 0;
var tX = 0; 
var tY = 0;
var mDis = 0;
palabra = "";
function preload(){
}
function setup(){
    canvas = createCanvas(500, 380);
    canvas.position(580, 220);
    camara = createCapture(VIDEO);
    camara.size(500, 450);
    camara.position(70, 185);
    modelo = ml5.poseNet(camara, Quenohacenada);
    modelo.on("pose", identificar);
}
function draw(){
    background("white");
    fill("blue");
    stroke("black");
    textSize(mDis/5);
    palabra = document.getElementById("palabras").value;
    if (palabra == "") {
        palabra = "ingrese texto";
    }
    document.getElementById("ancho").innerHTML = "El ancho del texto es de:" + mDis/5;
    text(palabra, tX, tY);
    fill("yellow");
    stroke("black");
    circle(mDX, mDY - 100, 25);
    fill("green");
    stroke("black");
    circle(mIX, mIY - 100, 25);
}
function Quenohacenada(){
    console.log('hola');
}
function identificar(resulatados){
    if (resulatados.length > 0) {
        console.log(resulatados);
        tX = resulatados[0].pose.nose.x;
        tY = resulatados[0].pose.nose.y;
        mDX = resulatados[0].pose.rightWrist.x;  
        mDY = resulatados[0].pose.rightWrist.y;
        mIX = resulatados[0].pose.leftWrist.x; 
        mIY = resulatados[0].pose.leftWrist.y;
        mDis = Math.floor(mIX - mDX);
        console.log(mDis);
    }
}