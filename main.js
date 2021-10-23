difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}


function modelLoaded() {
    console.log('posenet is intialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightwrist.x;
        leftWristX = results[0].pose.leftwrise.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400);
}