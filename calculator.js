window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // console.log('form sbumitted');
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 100000, years: 30, rate: 6.95 };
  const userLnAmnt = document.getElementById('loan-amount');
  userLnAmnt.value = values.amount;
  const userLnYrs = document.getElementById('loan-years');
  userLnYrs.value = values.years;
  const userLnRt = document.getElementById('loan-rate');
  userLnRt.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const userInputs = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(userInputs));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let prn = values.amount;
  // console.log(prn);
  let int = values.rate / 100 / 12;
  // console.log(int);
  let n = values.years * 12;
  // console.log(n);
  let dueMonthly = (int * prn) / (1 - Math.pow(1 + int, -n));
  return Math.floor(dueMonthly * 100) / 100;
}

// Given a string representing the monthly payment value
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPymnt = document.getElementById('monthly-payment');
  monthlyPymnt.textContent = `$${monthly}`;
  // console.log(monthlyPymnt);
}
