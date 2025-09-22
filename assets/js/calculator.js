let calculation = "";

function appendToDisplay(character) {
  calculation += character;
  updateDisplay();
}

function deleteChar() {
  calculation = calculation.slice(0, -1);
  updateDisplay();
}

function reset() {
  calculation = "";
  updateDisplay();
}

function calculate() {
  if (calculation) {
    calculation = String(eval(calculation));
    updateDisplay();
  }
}

function formatWithCommas(str) {
  return str.replace(/\d+(\.\d+)?/g, (match) => Number(match).toLocaleString());
}

function updateDisplay() {
  const display = document.getElementById("calc-display");
  display.value = formatWithCommas(calculation);
}
