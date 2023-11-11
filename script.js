document.addEventListener('DOMContentLoaded', function () {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountResult = document.getElementById('tipAmount');
    const totalAmountResult = document.getElementById('totalAmount');

    billAmountInput.addEventListener('input', updateResults);
    tipPercentageInput.addEventListener('input', updateResults);

    function updateResults() {
        const billAmount = parseFloat(billAmountInput.value) || 0;
        const tipPercentage = parseFloat(tipPercentageInput.value) || 0;

        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;

        tipAmountResult.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
        totalAmountResult.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }
});
