function preload() {

}

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}

function modelLoaded() {
    console.log("model has been loaded");
}

rightwristX = 0;
leftwristX = 0;
difference=0;

function gotposes(results) {
    if(results.length>0) {
        console.log(results);
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}

function draw() {
    background("#808080");
    textSize(difference);
    text("Hanshal",50,400);
    fill("#0000FF");
    document.getElementById("font_size").innerHTML = "font size of ur wrist is " + difference + " pixel";
}