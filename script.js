//pin generator section

function pinGenerate() {
      let randomNumber = Math.round(Math.random() * 10000);
    if (randomNumber < 1000) {
        return(randomNumber*10);
    } else {
        return(randomNumber);
    }
}
let generatePin = document.querySelector('.generate-btn');
generatePin.addEventListener('click', function generate(event) {
     
    document.querySelector('.form-control').value = pinGenerate();
});


//keypad script part

var submit = document.querySelector('.submit-btn');
submit.addEventListener('click', function (event) {
    var inputNumber = document.getElementById('input-screen').value;
    var generatePinOutput = document.querySelector('.form-control').value;

    if (generatePinOutput==="") {
        document.getElementById('empty').style.display = 'block';

    } else if (inputNumber === generatePinOutput) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('input-screen').value = "";
        document.querySelector('.form-control').value= "";
    }
    
    else {
        document.getElementById('missed').style.display = 'block';
        document.getElementById('input-screen').value = "";
    }
    
    
})
