song="";
song1="";
song2="";
song3="";

function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("darkside.mp3");
    song2=loadSound("dreams.mp3");
    song3=loadSound("ignite.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song1.stop();
    song2.stop();
    song3.stop();
}

function play1(){
    song1.play();
    song.stop();
    song2.stop();
    song3.stop();
}

function play2(){
    song2.play();
    song.stop();
    song1.stop();
    song3.stop();
}

function play3(){
    song3.play();
    song.stop();
    song1.stop();
    song2.stop();
}

function stop(){
    song.stop();
    song1.stop();
    song2.stop();
    song3.stop();
}