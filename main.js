function showAdd() {
    const num1 = document.getElementById('numOne').value;
    console.log(typeof(num1));
    const num2 = document.getElementById('numTwo').value;
    console.log(typeof(num2));
    const res = document.getElementById('resultAddition');
    res.innerHTML = sum(num1,num2);
};

function showFactorial() {
    const numero = document.getElementById('factorial').value;
    const res = document.getElementById('resultFactorial');
    res.innerHTML = factorialize(numero);
};

function showAge() {
    const age = document.getElementById('age').value;
    const res = document.getElementById('resultAge');
    res.innerHTML = calculateAge(age);
};

function showEven() {
    const number = document.getElementById('numberPar').value;
    const res = document.getElementById('resultEven');
    res.innerHTML = isNumberEven(number)
};

function showMayor() {
    const num1 = document.getElementById('numberOne').value;
    const num2 = document.getElementById('numberTwo').value;
    const num3 = document.getElementById('numberThree').value;
    const res = document.getElementById('resultMayor')
    res.innerHTML = mayorNumber(num1, num2, num3)
};

function sum(num1, num2) {
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);
    return (number1 + number2);
};

function factorialize(num) {
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
};

function calculateAge(age) {
    console.log(age)
    let numberAge = parseInt(age)
    console.log(numberAge)
    if (numberAge > 18) {
        return "Person is an Adult"
    } else {
        return "Person is a minor"
    }
};

function isNumberEven(num) {
    let number = parseInt(num)
    if (number % 2 === 0 || number === 0) {
        return "Number is Even"
    } else {
        return "Number is odd"
    }
};

