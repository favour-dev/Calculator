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
        buttonSection.style.backgroundColor = "hsl(268, 71%, 12%)"
        deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)"
        resetButton.style.backgroundColor = "hsl(281, 89%, 26%)"
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
        buttonSection.style.backgroundColor = "hsl(0, 5%, 81%)"
        deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)"
        resetButton.style.backgroundColor = "hsl(185, 42%, 37%)"
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
        buttonSection.style.backgroundColor = "hsl(224, 36%, 15%)"
        deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)"
        resetButton.style.backgroundColor = "hsl(225, 21%, 49%)"
        equalButton.style.backgroundColor = "hsl(6, 63%, 50%)"
        toggleBackground.style.backgroundColor = "hsl(223, 31%, 20%)"
    }
}