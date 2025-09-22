let calculation = "";

const display = document.getElementById("calc-display");

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
    try {
      calculation = String(eval(calculation));
      updateDisplay();
    } catch (error) {
      display.value = "Error";
    }
  }
}

function formatWithCommas(str) {
  return str.replace(/\d+(\.\d+)?/g, (match) => Number(match).toLocaleString());
}

function updateDisplay() {
  display.value = formatWithCommas(calculation);
}
