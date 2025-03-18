let expression = document.querySelector('.expression');
let result = document.querySelector('.result');
let lastButtonWasEqual = false;


//Clear display
function clearDisplay() {
    expression.innerText = '';
    result.innerText = '';
    lastButtonWasEqual = false;
}

//DEL button 
function deleteLast() {
    //if the last button was =, clear the display
    if (lastButtonWasEqual) {
        clearDisplay();
        /*if(['='].includes(value)){
            expression.innerText=result.innertext =;
        }*/
    } else {
        //delete the last vaue in the expression
        expression.innerText = expression.innerText.slice(0, -1);
    }
}

function appendToDisplay(value) {
    //If the last button was =
    if (lastButtonWasEqual) {
        //if the operators (+,-,×,÷) are entered the expression=result+
        if (['+', '-', '*', '/'].includes(value)) {
            expression.innerText = result.innerText + (value === '*' ? '×' : value === '/' ? '÷' : value);

        }
        //If the values (.,(,),number) are entered, the entered value is displayed in the expression section
        else {
            expression.innerText = value;
            result.innerText = '';
        }
        lastButtonWasEqual = false;
    }
    else {
        expression.innerText += (value === '*' ? '×' : value === '/' ? '÷' : value);
    }
}

// Event listener for = button click
function calculate() {
    if (!lastButtonWasEqual) {
        try {
            let evalExpression = expression.innerText.replace(/×/g, '*').replace(/÷/g, '/');
            result.innerText = eval(evalExpression);
            lastButtonWasEqual = true;
        } catch {
            result.innerText = 'Error';
            lastButtonWasEqual = false;
        }
    }
}