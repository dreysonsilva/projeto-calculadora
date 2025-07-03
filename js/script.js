function appendValue(value) {
  const display = document.getElementById('display');
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];

  if (operators.includes(value)) {
    if (operators.includes(lastChar) || display.value === '') {
      return;
    }
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
    try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Expressão inválida!');
  }
}
