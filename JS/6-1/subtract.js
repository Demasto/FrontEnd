function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = String(first - second);
}