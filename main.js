Status = "";


function setup() {
    canvas = createCanvas (600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(700,400);
    video.hide();


}

function draw () {
    image(video,0,0,600,400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded Successfully");
    Status = true;
}
