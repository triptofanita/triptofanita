const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const firstEntryEl = document.querySelector('[data-previous-operand]');
const currentValueEl = document.querySelector('[data-current-operand]');

const calculator = new Calculator(firstEntryEl, currentValueEl);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.handleOperation(button.innerText);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

equalButton.addEventListener('click', (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});
