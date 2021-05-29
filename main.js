leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song="";
song2="";
songStatus="";
song2Status="";
function preload(){
  song=loadSound('music.mp3');
 song2=loadSound('The score - Fire.mp3');  
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.position();
    video=createCapture(VIDEO);
    video.hide(); 
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 500, 400);
songStatus=false;
fill("#bb860b");
    stroke("#bb860b");
    if(scoreLeftWrist> 0.2){
        circle(leftWristX, leftWristY, 20);
    song2.pause();    
}
if (songStatus=="false") {
    song.play();
    document.getElementById("song-name").innerHTML="Avengers theme song";
}
//--------------------------------rightwrist next
song2Status=false;
fill("#c0c0c0");
    stroke("#c0c0c0");
    if(scoreRightWrist> 0.2){
        circle(rightWristX, rightWristY, 20);
    song.pause();      
}
if (song2Status=="false") {
    
}
}
function d(){
    song.play();
    song.setVolume(1); 
}
function modelLoaded() {
    console.log('model is loaded model is loaded model is loaded model is loaded mod...');       
}
function gotPoses(results) {
   if (results.length>0) {
       /* above just says that if you're out of the camera or the camera hasn't loaded results will stop loading*/
       scoreLeftWrist = results[0].pose.keypoints[9].score;
       scoreRightWrist = results[0].pose.keypoints[10].score;
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       rightWristX = results[0].pose.leftWrist.x;
       rightWristY = results[0].pose.leftWrist.y;
       console.log('leftX='+leftWristX+',Y'+leftWristY+'rightX='+rightWristX+',Y'+rightWristY);
   } 
}