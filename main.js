Status = "";


function setup() {
    canvas = createCanvas (700,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(700,400);


}

function draw () {
    image(video,0,0,700,400);
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