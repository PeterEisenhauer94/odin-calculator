//global vars
let calcDisplay = document.querySelector('#display-number');
let num1 = 0;
let num2 = '';

//functions
function add(num1,num2){
    let result = num1+num2;
    return result;
}

function subtract(num1,num2){
    let result = num1-num2;
    return result;
}

function multiply(num1,num2){
    let result = num1*num2;
    return result;
}
function divide(num1,num2){
    let result = num1/num2;
    return result;
}

function operate(operator,num1,num2){
}

function updateDisplay(num){
    calcDisplay.textContent = num;
}

//button actions
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='1';
        updateDisplay(num2);
    } else {
        num2+='1';
        updateDisplay(num2);
    };
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='2';
        updateDisplay(num2);
    } else {
        num2+='2';
        updateDisplay(num2);
    };
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='3';
        updateDisplay(num2);
    } else {
        num2+='3';
        updateDisplay(num2);
    };
});

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='4';
        updateDisplay(num2);
    } else {
        num2+='4';
        updateDisplay(num2);
    };
});

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='5';
        updateDisplay(num2);
    } else {
        num2+='5';
        updateDisplay(num2);
    };
});

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='6';
        updateDisplay(num2);
    } else {
        num2+='6';
        updateDisplay(num2);
    };
});

let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='7';
        updateDisplay(num2);
    } else {
        num2+='7';
        updateDisplay(num2);
    };
});

let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='8';
        updateDisplay(num2);
    } else {
        num2+='8';
        updateDisplay(num2);
    };
});

let btn9 = document.querySelector('#btn9');
btn9.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        num2='9';
        updateDisplay(num2);
    } else {
        num2+='9';
        updateDisplay(num2);
    };
});

let btn0 = document.querySelector('#btn0');
btn0.addEventListener('click',()=>{
    if(calcDisplay.textContent=='0'){
        return;
    } else {
        num2+='0';
        updateDisplay(num2);
    }
});

let btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', ()=>{
    num1=0
    num2=0;
    updateDisplay('0');
});