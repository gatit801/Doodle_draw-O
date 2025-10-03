function setup(){
    canvas = createCanvas(200,200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifierCanvas)


}

function draw(){
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function clearCanvas(){
    background('white')
}

function preload(){


    classifier = ml5.imageClassifier('doodleNet')
}

function classifierCanvas(){
    classifier.classify(canvas,gotResult)
}

function gotResult(results,error){
    if (error){
        console.error(error)
    }
        console.log(results[0].label)
        document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

//        document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

        document.getElementById('confidence').innerHTML = 'Confianza: '+ Math.round(results[0].confidence * 100) + "%"




};

