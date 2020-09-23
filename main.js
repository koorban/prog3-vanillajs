function showAdd() {
    const num1 = document.getElementById('num-one').value;
    const num2 = document.getElementById('num-two').value;
    const res = document.getElementById('result-sum');
    res.innerHTML = `The Sum of ${num1} and ${num2} is:  ` + sum(num1,num2);
};

function showAge() {
    const age = document.getElementById('persons-age').value;
    const res = document.getElementById('result-age');
    res.innerHTML = calculateAge(age);
};

function showMayor() {
    const number1 = document.getElementById('number-one').value;
    const number2 = document.getElementById('number-two').value;
    const number3 = document.getElementById('number-three').value;
    const res = document.getElementById('result-mayor');
    res.innerHTML = mayorNumber(number1, number2, number3);
};

function showFactorial() {
    const num = document.getElementById('number-factorial').value;
    console.log('from show factorial',num)
    const res = document.getElementById('result-factorial');
    res.innerHTML = factorialize(num);
};

function showEven() {
    const number = document.getElementById('numberPar').value;
    const res = document.getElementById('resultEven');
    res.innerHTML = isNumberEven(number)
};


function sum(num1, num2) {
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);
    return (number1 + number2);
};

function calculateAge(age) {
    console.log(age)
    let numberAge = parseInt(age)
    console.log(numberAge)
    if (numberAge >= 18) {
        return "Person is an: Adult"
    } else {
        return "Person is a: Minor"
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

function mayorNumber(num1, num2, num3) {
    let winner = '';
    if (num1 > num2 && num1 > num3) {
        winner = num1;
    } else if (num2 > num1 && num2>num3) {
        winner = num2;
    } else if ( num3> num1 && num3>num1) {
        winner = num3;
    }
    return `The largest number is ${winner}`
};

function factorialize(num) {
    console.log(num);
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    };
    return num;
};
