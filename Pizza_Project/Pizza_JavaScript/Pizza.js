// prices + simple business rules
const PRICES = {
  size: { small: 8, medium: 10, large: 12, xl: 14 },
  crust: { regular: 0, thin: 0, stuffed: 3, gf: 2 },
  cheeseExtra: { vegan: 2 }, // other cheeses included
  toppingExtraAfter: 1 // after first 3 toppings
};

// set your local tax (teacher can change easily)
const TAX_RATE = 0.13; // 13% HST (Ontario)

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));

const form = $("#pizzaForm");
const summary = $("#summary");
$("#year").textContent = new Date().getFullYear();

// build an order object from form controls
function readOrder() {
  const size = form.size.value;
  const crust = $("#crust").value;
  const sauce = form.sauce.value;

  const cheeses = $$('input[name="cheese"]:checked').map(c => c.value);
  const toppings = $$('input[name="toppings"]:checked').map(t => t.value);

  const qty = Math.max(1, parseInt($("#qty").value || "1", 10));
  const name = ($("#customer").value || "Guest").trim();

  return { size, crust, sauce, cheeses, toppings, qty, name };
}

function calculate(order) {
  const base = PRICES.size[order.size];
  const crust = PRICES.crust[order.crust];

  // cheese surcharge only if vegan is chosen
  const cheeseUp = order.cheeses.includes("vegan") ? PRICES.cheeseExtra.vegan : 0;

  // first 3 toppings included, extras +$1 each
  const extrasCount = Math.max(0, order.toppings.length - 3);
  const toppingExtra = extrasCount * PRICES.toppingExtraAfter;

  const unit = base + crust + cheeseUp + toppingExtra;
  const subtotal = unit * order.qty;
  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return { unit, subtotal, tax, total, extrasCount };
}

function formatReceipt(order, price) {
  const lines = [];
  lines.push(`Order for: ${order.name}`);
  lines.push(`Size: ${cap(order.size)} Crust: ${cap(order.crust)} Sauce: ${cap(order.sauce)}`);
  lines.push(`Cheeses: ${order.cheeses.length ? order.cheeses.map(cap).join(", ") : "none"}`);
  lines.push(`Toppings: ${order.toppings.length ? order.toppings.map(cap).join(", ") : "none"}`);
  if (price.extrasCount > 0) lines.push(`(Includes ${price.extrasCount} extra topping(s) @ $${PRICES.toppingExtraAfter}/ea)`);
  lines.push(`Qty: ${order.qty}`);
  lines.push(`-----------------------------`);
  lines.push(`Unit Price: $${price.unit.toFixed(2)}`);
  lines.push(`Subtotal: $${price.subtotal.toFixed(2)}`);
  lines.push(`Tax (${(TAX_RATE*100).toFixed(0)}%): $${price.tax.toFixed(2)}`);
  lines.push(`TOTAL: $${price.total.toFixed(2)}`);
  lines.push(`\nThank you! Your pizza will be ready soon 🍕`);
  return lines.join("\n");
}

function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

// Buttons
$("#btnPrice").addEventListener("click", () => {
  const order = readOrder();
  const price = calculate(order);
  summary.textContent = formatReceipt(order, price);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const order = readOrder();
  const price = calculate(order);
  summary.textContent = formatReceipt(order, price);
  alert(`Thanks ${order.name}! Your total is $${price.total.toFixed(2)}.`);
});