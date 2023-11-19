// Example test suite
const testContainer = document.createElement('div');
testContainer.id = 'test-container';

// Test 1: Check if calculator container exists
const test1 = document.createElement('p');
test1.textContent = `Test 1: Calculator container should exist`;
test1.style.color = document.querySelector('.calculator') ? 'green' : 'red';

// Test 2: Check if buttons are created correctly
const buttonsContainer = document.getElementById('buttons-container');
const test2 = document.createElement('p');
test2.textContent = `Test 2: Buttons should be created`;
test2.style.color = buttonsContainer && buttonsContainer.children.length === 20 ? 'green' : 'red';

// Append tests to the test container
testContainer.appendChild(test1);
testContainer.appendChild(test2);

// Append the test container to the body
document.body.appendChild(testContainer);
