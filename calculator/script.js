//calculator.js


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = 'Error'; // Display an error for invalid expressions
    }
}
