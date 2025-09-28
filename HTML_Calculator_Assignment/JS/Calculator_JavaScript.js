// simple calculator logic with clean event handling
const display = document.getElementById("display");
const keys = document.getElementById("keys");

let first = null; // first number
let operator = null; // '+', '-', '*', '/'
let reset = false; // should next digit clear the screen?

function cur() { return display.value || "0"; }
function set(v) { display.value = v; }

function typeDigit(d) {
  if (reset) { set(""); reset = false; }
  if (d === "." && cur().includes(".")) return; // only one decimal
  if (cur() === "0" && d !== ".") set(""); // drop leading zero
  set(cur() + d);
}

function setOp(op) {
  if (operator && !reset) equals(); // allow chaining like 2 + 3 * 4
  first = parseFloat(cur());
  operator = op;
  reset = true;
}

function compute(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function equals() {
  if (operator === null) return;
  const second = parseFloat(cur());
  const result = compute(first, second, operator);
  set(String(result));
  first = null; operator = null; reset = true;
}

function clearAll() {
  set("");
  first = null; operator = null; reset = false;
}

// click handling (event delegation)
keys.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.num) typeDigit(btn.dataset.num);
  else if (btn.dataset.dot) typeDigit(".");
  else if (btn.dataset.op) setOp(btn.dataset.op);
  else if (btn.hasAttribute("data-equals")) equals();
  else if (btn.hasAttribute("data-ac")) clearAll();
});

// optional keyboard support (nice bonus, not required)
document.addEventListener("keydown", (e) => {
  if (/\d/.test(e.key)) typeDigit(e.key);
  else if (e.key === ".") typeDigit(".");
  else if (["+", "-", "*", "/"].includes(e.key)) setOp(e.key);
  else if (e.key === "Enter" || e.key === "=") equals();
  else if (e.key.toLowerCase() === "c") clearAll();
});
