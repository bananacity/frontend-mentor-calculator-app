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
      calculation = "";
    }
  }
}

function formatWithCommas(str) {
  return str.replace(/\d+(\.\d+)?/g, (match) => Number(match).toLocaleString());
}

function updateDisplay() {
  display.value = formatWithCommas(calculation);
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789".includes(key)) {
    appendToDisplay(key);
  } else if ("+-*/.".includes(key)) {
    appendToDisplay(key);
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    reset();
  }
});
