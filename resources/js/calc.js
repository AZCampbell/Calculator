
let newValue = '';
let firstInt ='0';
let secondInt ='0';
let curVal = document.getElementsByClassName('answer')[0].innerHTML;
let operator;

let buttons = document.getElementsByClassName('num');
Array.from(buttons).forEach(b => {
    b.addEventListener("click", function() {
        curVal = document.getElementsByClassName('answer')[0].innerHTML;
        let value = b.innerHTML;
        if (curVal === '0') {
             newValue = value;
             
        } else {
         newValue = curVal + value;
    }
        document.getElementsByClassName("answer")[0].innerHTML = newValue;
        return newValue;
    })
})

let operators = document.getElementsByClassName('op');
Array.from(operators).forEach(o => {
    o.addEventListener("click", function() {
        operator = o.innerHTML;
        firstInt = newValue;
        newValue = '';
        document.getElementsByClassName("answer")[0].innerHTML = newValue;
        return newValue;
    })
})
function getResult () {
    if (firstInt != '0' && secondInt != '0') {
        finalAnswer = parseInt(firstInt) + parseInt(secondInt);
        document.getElementsByClassName("answer")[0].innerHTML = finalAnswer;
    } else if (secondInt === '0') {
        secondInt = document.getElementsByClassName("answer")[0].innerHTML;
        finalAnswer = parseInt(firstInt) + parseInt(secondInt);
        document.getElementsByClassName("answer")[0].innerHTML = finalAnswer;
    } else {
        document.getElementsByClassName("answer")[0].innerHTML = firstInt;
    }
}
document.getElementsByClassName('eq')[0].addEventListener("click", getResult);

function clearAll() {
    
    firstInt = '0';
    secondInt = '0';
    
    document.getElementsByClassName("answer")[0].innerHTML = '0';
}
document.getElementsByClassName('clear')[0].addEventListener("click", clearAll);