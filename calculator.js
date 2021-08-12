let nameColor = document.querySelectorAll(".the-color");
let buttonDigits = document.querySelectorAll(".digits")
let displayBox = document.getElementById("user-input");
let buttonSection = document.getElementById("button-container");
let deleteButton = document.getElementById('delete');
let resetButton = document.getElementById('reset-button') ;
let equalButton = document.querySelector('.equal');
let toggleBackground = document.querySelector('.tw-toggle')
function toggle(state){
    if(state === 3){
        nameColor.forEach(element => {
            element.style.color = "hsl(52, 100%, 62%)";  
        });
        buttonDigits.forEach(element => {
            element.style.backgroundColor = "hsl(268, 47%, 21%)"
            element.style.color = "hsl(52, 100%, 62%)"
        });
        document.querySelector('body').style.backgroundColor = "hsl(268, 71%, 12%)"; 
        document.querySelector('.container').style.backgroundColor = "hsl(268, 75%, 9%)"; 
        displayBox.style.backgroundColor = "hsl(268, 71%, 12%)";
        displayBox.style.color = "hsl(52, 100%, 62%)";
        buttonSection.style.backgroundColor = "hsl(268, 71%, 12%)"
        deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)"
        resetButton.style.backgroundColor = "hsl(281, 89%, 26%)"
        resetButton.style.color = "hsl(52, 100%, 62%)"
        equalButton.style.backgroundColor = "hsl(176, 100%, 44%)"
        toggleBackground.style.backgroundColor = "hsl(268, 71%, 12%)"
    
    }else if(state === 2){
        nameColor.forEach(element => {
            element.style.color = " hsl(60, 10%, 19%)";  
        });
        buttonDigits.forEach(element => {
            element.style.backgroundColor = "hsl(45, 7%, 89%)"
            element.style.color = "hsl(60, 10%, 19%)"
        });
        document.querySelector('body').style.backgroundColor = "hsl(0, 5%, 81%)"; 
        document.querySelector('.container').style.backgroundColor = "hsl(0, 0%, 90%)";
        displayBox.style.backgroundColor = "hsl(0, 0%, 93%)"
        displayBox.style.color = "black";
        buttonSection.style.backgroundColor = "hsl(0, 5%, 81%)"
        deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)"
        resetButton.style.backgroundColor = "hsl(185, 42%, 37%)"
        resetButton.style.color = "black"
        equalButton.style.backgroundColor = "hsl(25, 98%, 40%)"
        toggleBackground.style.backgroundColor = "hsl(0, 5%, 81%)"
    
    }else if(state === 1){
        nameColor.forEach(element => {
            element.style.color = "white";  
        });
        buttonDigits.forEach(element => {
            element.style.backgroundColor = "hsl(30, 25%, 89%)"
            element.style.color = "hsl(221, 14%, 31%)"
        });
        document.querySelector('body').style.backgroundColor = "hsl(224, 36%, 15%)"; 
        document.querySelector('.container').style.backgroundColor = "hsl(222, 26%, 31%)"; 
        displayBox.style.backgroundColor = "hsl(224, 36%, 15%)"
        displayBox.style.color = "white";
        buttonSection.style.backgroundColor = "hsl(224, 36%, 15%)"
        deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)"
        resetButton.style.backgroundColor = "hsl(225, 21%, 49%)"
        resetButton.style.color = "black"
        equalButton.style.backgroundColor = "hsl(6, 63%, 50%)"
        toggleBackground.style.backgroundColor = "hsl(223, 31%, 20%)"
    }
}

let firstInput = "";
let secondInput = ""
document.getElementById("one").addEventListener('click', () => {
    if(operator){
        pressedInput = 2;
        secondInput += "1"
        displayBox.value = secondInput;
    }else{
        firstInput += '1'; 
        displayBox.value = firstInput
    }
})
document.getElementById("two").addEventListener('click', () => {
    if(operator){
        secondInput += "2"
        displayBox.value = secondInput;
    }else{
        firstInput += '2'; 
        displayBox.value = firstInput
    }
})
document.getElementById("three").addEventListener('click', () => {
    if(operator){
        secondInput += "3"
        displayBox.value = secondInput;  
    }else{
        firstInput += '3'; 
        displayBox.value = firstInput
    }
})
document.getElementById("four").addEventListener('click', () => {
    if(operator){
        secondInput += "4"
        displayBox.value = secondInput;  
    }else{
        firstInput += '4';
        displayBox.value = firstInput
    }
})
document.getElementById("five").addEventListener('click', () => {
    if(operator){
        secondInput += "5"
        displayBox.value = secondInput;
    }else{
        firstInput += '5'; 
        displayBox.value = firstInput
    }
})
document.getElementById("six").addEventListener('click', () => {
    if(operator){
        secondInput += "6"
        displayBox.value = secondInput;
    }else{
        firstInput += '6'; 
        displayBox.value = firstInput
    }
})
document.getElementById("seven").addEventListener('click', () => {
    if(operator){
        secondInput += "7"
        displayBox.value = secondInput;
    }else{
        firstInput += '7'; 
        displayBox.value = firstInput
    }
})
document.getElementById("eight").addEventListener('click', () => {
    if(operator){
        secondInput += "8"
        displayBox.value = secondInput;
    }else{
        firstInput += '8';
        displayBox.value = firstInput
    }
})
document.getElementById("nine").addEventListener('click', () => {
    if(operator){
        secondInput += "9"
        displayBox.value = secondInput;
    }else{
        firstInput += '9'; 
        displayBox.value = firstInput
    }
})
document.getElementById("zero").addEventListener('click', () => {
    if(operator){
        secondInput += "0"
        displayBox.value = secondInput;  
    }else{
        firstInput += '0'; 
        displayBox.value = firstInput
    }
})


let result = "";
let operator = "";
let pressedInput  = 1
displayBox.value = firstInput

resetButton.addEventListener('click', resetKey)
    function resetKey(){
        pressedInput = 1
        operator = ""
        firstInput = ""
        secondInput = ""
        result = "";
        displayBox.value = firstInput

    }

equalButton.addEventListener('click', equalKey)
    function equalKey(){
    if(operator === "+"){
        result = Number(firstInput) + Number(secondInput);
        displayBox.value = result;
    }else if(operator === "-"){
        result = Number(firstInput) - Number(secondInput);
        displayBox.value = result;
    }else if(operator === "*"){
        result = Number(firstInput) * Number(secondInput);
        displayBox.value = result;
    }else if(operator === "/"){
        result = Number(firstInput) / Number(secondInput);
        displayBox.value = result;
    }
    }

deleteButton.addEventListener('click', deleteKey)
    function deleteKey(){
        if(pressedInput === 1){
            firstInput = firstInput.slice(0,-1);
            displayBox.value = firstInput;
        }else{
           secondInput = secondInput.slice(0,-1);
           displayBox.value = secondInput;
        }
        
    }


document.getElementById("plus").addEventListener('click', addition)
    function addition(a,b){
        operator = "+"
    }
document.getElementById("times").addEventListener('click', multiply)
    function multiply(a,b){
        operator = "*"
    }
document.getElementById("slash").addEventListener('click', divide)
    function divide(a,b){
        operator = "/" 
    }
document.getElementById("minus").addEventListener('click', subtract)
    function subtract(a,b){
        operator = "-" 
     }

