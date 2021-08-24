lipX=0;
lipY=0;

function preload() {
    lipstick = loadImage('https://i.postimg.cc/X7FQ8rs1/l1.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(lipstick, lipX, lipY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x -10;
        lipY = results[0].pose.nose.y + 10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
