function startClassification()

{

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/we0p5kuQE/model.json', modelReady);

}

function modelReady(){
    
    classifier.classify( gotResults);

}

function gotResults(error, results){

    if(error) {
        
        console.error(error);

    } else {

        console.log(results);

        random_numer_r = Math.floor(Math.random() * 255) + 1; 
        random_numer_g = Math.floor(Math.random() * 255) + 1; 
        random_numer_b = Math.floor(Math.random() * 255) + 1; 

        document.getElementById("result_label").innerHTML = '🥶Escucho:😳   '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = '🤪Presición:😵'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_numer_r+","+random_numer_g +","+random_numer_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_numer_r+","+random_numer_g+","+random_numer_b+")";
        img = document.getElementById('imagen1') 
        img1 = document.getElementById('imagen2')
        img2 = document.getElementById('imagen3')
        img3 = document.getElementById('imagen4')
    
        if (results[0].label == "waka ") {
          img.src = 'The-Pink-Panther-Transparent-Image.gif';
          img1.src = 'images.jpeg';
          img2.src = 'Pokemon-PNG-HD.png';
          img3.src = 'R (1).png';
        } else if (results[0].label == "gritotes") {
            img.src = 'The-Pink-Panther-Transparent-Image.png';
            img1.src = 'images.gif';
            img2.src = 'Pokemon-PNG-HD.png';
            img3.src = 'R (1).png';
        } else if (results[0].label == "tukutuka") {
            img.src = 'The-Pink-Panther-Transparent-Image.png';
            img1.src = 'images.jpeg';
            img2.src = 'Pokemon-PNG-HD.gif';
            img3.src = 'R (1).png';
        }else{
            img.src = 'The-Pink-Panther-Transparent-Image.png';
            img1.src = 'images.jpeg';
            img2.src = 'Pokemon-PNG-HD.png';
            img3.src = 'R (1).gif';
        }
    }
}
