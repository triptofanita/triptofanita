class Calculator {
    constructor(firstEntryEl, currentValueEl) {
      this.firstEntryEl = firstEntryEl;
      this.currentValueEl = currentValueEl;
      this.clear();
    }
  
    clear() {
      this.currentValue = 0;
      this.firstEntry = '';
      this.operation = undefined;
    }
  
    delete() {
      this.currentValue = this.currentValue.toString().slice(0, -1);
    }
  
    addNumber(number) {
      if (number === '.' && this.currentValue.includes('.')) return;
      this.currentValue = this.currentValue.toString() + number.toString();
    }
  
    handleOperation(operation) {
      if (this.currentValue === '') return;
      if (this.firstEntry !== '') {
        this.calculate();
      }
      this.operation = operation;
      this.firstEntry = this.currentValue;
      this.currentValue = '';
    }
  
    calculate() {
      let calculating;
      const firstDigit = parseFloat(this.firstEntry);
      const secondDigit = parseFloat(this.currentValue);
      if (isNaN(firstDigit) || isNaN (secondDigit)) return;
      if (this.operation === '+') calculating = firstDigit + secondDigit; 
      else if (this.operation === '-') calculating = firstDigit - secondDigit; 
      else if (this.operation === '*') calculating = firstDigit * secondDigit; 
      else if (this.operation === '/') calculating = firstDigit / secondDigit; 
      else return;
      this.currentValue = calculating;
      this.operation = undefined;
      this.firstEntry = '';
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }
  
    updateDisplay() {
      this.currentValueEl.innerText =
        this.getDisplayNumber(this.currentValue);
      if (this.operation != null) {
        this.firstEntryEl.innerText =
          `${this.getDisplayNumber(this.firstEntry)} ${this.operation}`;
      } else {
        this.firstEntryEl.innerText = '';
      }
    }
  }
  