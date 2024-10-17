let currentExpression = '';
let displayValue = '0';

function updateDisplay() {
    document.getElementById('expression').innerText = currentExpression;
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && !isNaN(value)) {
        displayValue = value;
        currentExpression = value;
    } else {
        currentExpression += value;
        displayValue = currentExpression;
    }
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(currentExpression).toString();
        currentExpression = displayValue;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        currentExpression = '';
        updateDisplay();
    }
}

function showAlert() {
    alert("A was pressed!");
}


updateDisplay();