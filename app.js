// Initialize output objects
const numOne = document.getElementById('num-one');
const numTwo = document.getElementById('num-two');
const operator = document.getElementById('operator');

// Initialize induvidual keys
const keyClear = document.getElementById('key-clear');
const keyDivide = document.getElementById('key-divide');
const keyMultiply = document.getElementById('key-multiply');
const keySeven = document.getElementById('key-7');
const keyEight = document.getElementById('key-8');
const keyNine = document.getElementById('key-9');
const keySubstract = document.getElementById('key-substract');
const keyFour = document.getElementById('key-4');
const keyFive = document.getElementById('key-5');
const keySix = document.getElementById('key-6');
const keyAdd = document.getElementById('key-add');
const keyOne = document.getElementById('key-1');
const keyTwo = document.getElementById('key-2');
const keyThree = document.getElementById('key-3');
const keyZero = document.getElementById('key-0');
const keyDoubleZero = document.getElementById('key-00');
const keyDot = document.getElementById('key-dot');
const keyEqual = document.getElementById('key-equal');



// Functionality for Clear key
keyClear.addEventListener('click', () => {

    numOne.innerText = ``;
    numTwo.innerText = ``;
    operator.innerText = ``;
});

// Functionality for Divide key
keyDivide.addEventListener('click', () => {

    operator.innerText = `/`;
    
});

// Functionality for Multiply key
keyMultiply.addEventListener('click', () => {

    operator.innerText =  `*`;
    
});

// Functionality for Add key
keyAdd.addEventListener('click', () => {

    operator.innerText = `+`;
    
});

// Functionality for Substract key
keySubstract.addEventListener('click', () => {

    operator.innerText = `-`;
    
});

// Functionality for Dot key
keyDot.addEventListener('click', () => {

    
    if (operator.innerText) {
        numTwo.innerText += '.';
    }else {

        numOne.innerText += '.';
    }
    
    
});

// Functionality for 1 key
keyOne.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 1;
    }else {

        numOne.innerText += 1;
    }

});

// Functionality for 2 key
keyTwo.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 2;
    }else {

        numOne.innerText += 2;
    }
});

// Functionality for 3 key
keyThree.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 3;
    }else {

        numOne.innerText += 3;
    }
});

// Functionality for 4 key
keyFour.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 4;
    }else {

        numOne.innerText += 4;
    }
});

// Functionality for 5 key
keyFive.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 5;
    }else {

        numOne.innerText += 5;
    }
});

// Functionality for 6 key
keySix.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 6;
    }else {

        numOne.innerText += 6;
    }
});

// Functionality for 7 key
keySeven.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 7;
    }else {

        numOne.innerText += 7;
    }
});

// Functionality for 8 key
keyEight.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 8;
    }else {

        numOne.innerText += 8;
    }
});

// Functionality for 9 key
keyNine.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 9;
    }else {

        numOne.innerText += 9;
    }
});

// Functionality for 0 key
keyZero.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += 0;
    }else {

        numOne.innerText += 0;
    }
});

// Functionality for 00 key
keyDoubleZero.addEventListener('click', () => {

    if (operator.innerText) {
        numTwo.innerText += `00`;
    }else {

        numOne.innerText += `00`;
    }
});

// Functionality for Equal key
keyEqual.addEventListener('click', () => {

    let finalResult;

    if (operator.innerText == '/') {
        finalResult = numOne.innerText / numTwo.innerText;
        numOne.innerText = finalResult;
    }

    else if (operator.innerText == '*') {
        finalResult = numOne.innerText * numTwo.innerText;
        numOne.innerText = finalResult;
    }
    
    else if (operator.innerText == '-') {
        finalResult = numOne.innerText - numTwo.innerText;
        numOne.innerText = finalResult;
    }


    else if (operator.innerText == '+') {

        if (numOne.innerText && numTwo.innerText) {

            
            finalResult = parseFloat(numOne.innerText) + parseFloat(numTwo.innerText);
            numOne.innerText = finalResult;
        }
        
        else if (!numOne.innerText && !numTwo.innerText){

            numOne.innerText = 0;
        } 

        else if(!numOne.innerText) {

            
            finalResult = operator.innerText + numTwo.innerText;
            numOne.innerText = finalResult;
        }
        
        else if(!numTwo.innerText){

            
            finalResult = numOne.innerText;
            numOne.innerText = finalResult;

        }
        
    }


    else {

        numOne.innerText = numOne.innerText;
    }

    operator.innerText = '';
    numTwo.innerText = '';


});



