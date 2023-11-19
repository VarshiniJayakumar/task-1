document.addEventListener('DOMContentLoaded', function () {
    const buttonsContainer = document.getElementById('buttons-container');
    const resultInput = document.getElementById('result');

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', '%'
    ];

    buttons.forEach(buttonValue => {
        const button = document.createElement('div');
        button.textContent = buttonValue;
        button.classList.add('button');
        button.addEventListener('click', function () {
            handleButtonClick(buttonValue);
        });
        buttonsContainer.appendChild(button);
    });

    document.addEventListener('keydown', function (event) {
        const keyPressed = event.key;
        if (!isNaN(keyPressed) || ['+', '-', '*', '/', '.', '%', 'Enter', 'c'].includes(keyPressed.toLowerCase())) {
            handleButtonClick(keyPressed);
        } else {
            alert('Only numbers and operators are allowed');
        }
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            resultInput.value = '';
        } else if (value === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                alert('Invalid expression');
            }
        } else {
            resultInput.value += value;
        }
    }
});

