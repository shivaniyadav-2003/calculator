// Select the result input field
const resultInput = document.getElementById('result');

// Function to append a value to the result
function appendValue(value) {
  resultInput.value += value;
}

// Function to clear the result field
function clearResult() {
  resultInput.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    alert('Invalid Expression');
    clearResult();
  }
}
