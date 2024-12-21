document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let x = parseFloat(document.getElementById('xValue').value);
    let terms = parseInt(document.getElementById('terms').value);

    let result = taylorSeriesExponential(x, terms);

    document.getElementById('result').innerText = `تقریب e^${x} ≈ ${result}`;
});

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function taylorSeriesExponential(x, terms) {
    let sum = 0;
    for (let n = 0; n < terms; n++) {
        sum += Math.pow(x, n) / factorial(n);
    }
    return sum;
}
