let total = 0;
let buffer = '0';
let previousOperator;


const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
    }
}

function handleNumber() {
    if (buffer === '0') {
        buffer = nu
    }
}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function (event) {
        buttonClick(event.target.innerText);
        console.log('click');
    })
}

init();