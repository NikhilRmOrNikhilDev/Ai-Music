song = "";
song2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
score_lw = 0;
status_lw = "";
function preload(){
    song = loadSound("AJR_-_Worlds_Smallest_Violin_Connectloaded.com.mp3");
    song2 = loadSound("Heat Waves.mp3");
}
function setup(){
    canvas = createCanvas(380,380)
    canvas.position();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses)
}
function draw(){
    image(video ,0 ,0 ,380, 380);
    fill("#009dff");
    stroke("#009dff");
    if(results[0].pose.leftWrist)
}
function modelLoaded(){
    console.log("PoseNet Is Working!!!");
}
function gotPoses(results){
    if(results.length > 0){

        score_rw = results[0].pose.keypoints(10).score;
        score_lw = results[0].pose.keypoints(9).score;
        console.log("score lw" + score_lw)
        console.log("score rw" + score_rw)

        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        console.log("Results of lwx -" + lwx + "Results of rwx -" + rwx);
        lwy = results[0].pose.leftWrist.y;
        rwy = results[0].pose.rightWrist.y;
        console.log("Results of lwy -" + lwy + "Results of rwy -" + rwy);

    }
}