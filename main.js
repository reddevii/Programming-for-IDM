const RATES = {
  "USD_EUR": 0.86721467,
  "EUR_USD": 1.15312,
  "USD_JPY": 157.167,
  "JPY_USD": 0.00636266,
  "EUR_JPY": 180.0,
  "JPY_EUR": 1 / 180.0
};

function convertCurrency(amount, from, to) {
  if (from === to) return amount;

  const key = `${from}_${to}`;
  const rate = RATES[key];

  if (!rate) return NaN;
  return amount * rate;
}

const amountInput = document.getElementById("amount");
const fromSelect  = document.getElementById("fromCurrency");
const toSelect    = document.getElementById("toCurrency");
const convertBtn  = document.getElementById("convertBtn");
const resultDiv   = document.getElementById("resultDisplay");

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }

  const result = convertCurrency(amount, from, to);

  if (isNaN(result)) {
    resultDiv.innerHTML = "<p>Conversion not supported.</p>";
    return;
  }

  resultDiv.innerHTML = `
    <h2>${amount} ${from} = ${result.toFixed(6)} ${to}</h2>
  `;
});
