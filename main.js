function preload() {
classifier = ml5.imageClassifier('DoodleNet');
}
function setup() {
canvas = createCanvas(350, 350);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function draw(){
    strokeWeight(10);
    stroke('black');
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function clear_canvas() {
    background("white");
}
function classifyCanvas() {
    classifier.classify(canvas, gotResults);
}
function gotResults(error, results) {
if(error) {
    console.error(error);
}
else {
console.log(results);
document.getElementById("label1").innerHTML = "label: " + results[0].label;
document.getElementById("label2").innerHTML = "confidence: " + Math.round(results[0].confidence * 100) + '%';
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}}
