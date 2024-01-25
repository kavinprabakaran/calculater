let display = document.getElementById('display');

function handleButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.innerText;
        handleInput(buttonValue);
    }
}

function handleInput(value) {
    switch (value) {
        case '=':
            calculateResult();
            break;
        case 'C':
            clearDisplay();
            break;
        default:
            appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Handle keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'c', 'C'];

    if (allowedKeys.includes(key)) {
        event.preventDefault();
        handleInput(key === 'Enter' ? '=' : key);
    }
});
