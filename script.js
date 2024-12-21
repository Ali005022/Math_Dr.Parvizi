document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const x = parseFloat(document.getElementById('xValue').value);
    const terms = parseInt(document.getElementById('terms').value);

    if (isNaN(x) || isNaN(terms) || terms <= 0) {
        document.getElementById('result').innerHTML = "لطفاً مقادیر معتبر وارد کنید.";
        return;
    }

    const result = calculateTaylorSeries(x, terms);

    const formattedResult = result.fractions
        .map(frac => `<span>${frac}</span>`)
        .join(' + ');

    document.getElementById('result').innerHTML = `
        تقریب <strong>e^${x}</strong>: <br>
        <div style="margin-top: 10px;">${formattedResult} ≈ ${result.sum.toFixed(6)}</div>
    `;
});

function calculateTaylorSeries(x, terms) {
    let sum = 0;
    const fractions = [];

    for (let n = 0; n < terms; n++) {
        const numerator = Math.pow(x, n);
        const denominator = factorial(n);
        sum += numerator / denominator;

        fractions.push(`<sup>${numerator}</sup>/<sub>${denominator}</sub>`);
    }

    return { sum, fractions };
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
