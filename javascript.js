//global vars
let calcDisplay = document.querySelector('#display-number');
let displayNum = '0';
let operatorFlag = '';
let num1 = 0;
let num2 = 0;

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
    switch(operator){
        case 'plus':
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            displayNum = add(num1,num2);
            num1 = add(num1,num2);
            updateDisplay(displayNum);
            //reactivate operator buttons
            btnDivide.classList.toggle('inactive');
            btnMultiply.classList.toggle('inactive');
            btnMinus.classList.toggle('inactive');
            break;
        case 'minus':
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            displayNum = subtract(num1,num2);
            num1 = subtract(num1,num2);
            updateDisplay(displayNum);
            //reactivate operator buttons
            btnDivide.classList.toggle('inactive');
            btnMultiply.classList.toggle('inactive');
            btnPlus.classList.toggle('inactive');
            break;
        case 'multiply':
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            displayNum = multiply(num1,num2);
            num1 = multiply(num1,num2);
            updateDisplay(displayNum);
            //reactivate operator buttons
            btnDivide.classList.toggle('inactive');
            btnMinus.classList.toggle('inactive');
            btnPlus.classList.toggle('inactive');
            break;
        case 'divide':
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            displayNum = divide(num1,num2);
            num1 = divide(num1,num2);
            updateDisplay(displayNum);
            //reactivate operator buttons
            btnMultiply.classList.toggle('inactive');
            btnMinus.classList.toggle('inactive');
            btnPlus.classList.toggle('inactive');
            break;
    }
}

function updateDisplay(num){
    calcDisplay.textContent = num;
}

//button actions
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
    if(displayNum =='0'){
        displayNum='1';
        updateDisplay(displayNum);
    } else {
        displayNum+='1';
        updateDisplay(displayNum);
    };
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='2';
        updateDisplay(displayNum);
    } else {
        displayNum+='2';
        updateDisplay(displayNum);
    };
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='3';
        updateDisplay(displayNum);
    } else {
        displayNum+='3';
        updateDisplay(displayNum);
    };
});

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='4';
        updateDisplay(displayNum);
    } else {
        displayNum+='4';
        updateDisplay(displayNum);
    };
});

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='5';
        updateDisplay(displayNum);
    } else {
        displayNum+='5';
        updateDisplay(displayNum);
    };
});

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='6';
        updateDisplay(displayNum);
    } else {
        displayNum+='6';
        updateDisplay(displayNum);
    };
});

let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='7';
        updateDisplay(displayNum);
    } else {
        displayNum+='7';
        updateDisplay(displayNum);
    };
});

let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='8';
        updateDisplay(displayNum);
    } else {
        displayNum+='8';
        updateDisplay(displayNum);
    };
});

let btn9 = document.querySelector('#btn9');
btn9.addEventListener('click',()=>{
    if(displayNum=='0'){
        displayNum='9';
        updateDisplay(displayNum);
    } else {
        displayNum+='9';
        updateDisplay(displayNum);
    };
});

let btn0 = document.querySelector('#btn0');
btn0.addEventListener('click',()=>{
    if(displayNum=='0'){
        return;
    } else {
        displayNum+='0';
        updateDisplay(displayNum);
    }
});

let btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', ()=>{
    num1=0;
    num2=0;
    displayNum = '0';
    updateDisplay(displayNum);
});

let btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click',()=>{
    if(!btnPlus.classList.contains('inactive')){
        num1 = displayNum;
        displayNum = '0';
        updateDisplay(displayNum);
        operatorFlag = 'plus';
        //deactivate other operator buttons
        btnDivide.classList.toggle('inactive');
        btnMultiply.classList.toggle('inactive');
        btnMinus.classList.toggle('inactive');
    }    
});

let btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click',()=>{
    if(!btnMinus.classList.contains('inactive')){
        num1 = displayNum;
        displayNum = '0';
        updateDisplay(displayNum);
        operatorFlag = 'minus';
        //deactivate other operator buttons
        btnDivide.classList.toggle('inactive');
        btnMultiply.classList.toggle('inactive');
        btnPlus.classList.toggle('inactive');
    }
});

let btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click',()=>{
    if(!btnMultiply.classList.contains('inactive')){
        num1 = displayNum;
        displayNum = '0';
        updateDisplay(displayNum);
        operatorFlag = 'multiply';
        //deactivate other operator buttons
        btnDivide.classList.toggle('inactive');
        btnMinus.classList.toggle('inactive');
        btnPlus.classList.toggle('inactive');
    }
});

let btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', ()=>{
    if(!btnDivide.classList.contains('inactive')){
        num1 = displayNum;
        displayNum = '0';
        updateDisplay(displayNum);
        operatorFlag = 'divide';
        //deactivate other operator buttons
        btnMultiply.classList.toggle('inactive');
        btnMinus.classList.toggle('inactive');
        btnPlus.classList.toggle('inactive');
    }
});

let btnEquals = document.querySelector('#btnEquals');
btnEquals.addEventListener('click',()=>{
    num2=displayNum;
    operate(operatorFlag,num1,num2);
});