var notiNum1 = '';
var notiNum2 = '';
var notiResult = '';

function calc() {
    let calcForm = document.getElementById("calc-form");

    let num1 = calcForm.firstNum.value;
    let num2 = calcForm.secondNum.value;

    let isFloatNum1 = isFloat(num1);
    let isFloatNum2 = isFloat(num2);

    var methods = document.getElementsByName("method");
    let count = 0;
    for (var i = 0; i < methods.length; i++) {
        if (methods[i].checked) {
            count++;
        }
    }
    if (count == 0) {
        notiResult = 'Please pick a calculation!';
    } else {
        notiResult = '';
    }

    if (!isFloatNum1) {
        notiNum1 = 'First number is not a float number!';
    } else {
        notiNum1 = '';
    }
    if (!isFloatNum2) {
        notiNum2 = 'Second number is not a float number!';
    } else {
        notiNum2 = '';
    }

    document.getElementById('notiNum1').innerHTML = notiNum1;
    document.getElementById('notiNum2').innerHTML = notiNum2;
    document.getElementById('notiResult').innerHTML = notiResult;

    if (notiNum1 == '' && notiNum2 == '' && notiResult == '') {
        return true;
    }
    return false;
}

function checkFirstNum() {
    let num = document.getElementById('firstNum').value;
    if (!isFloat(num)) {
        notiNum1 = 'First number is not a float number!';
    } else {
        notiNum1 = '';
    }
    document.getElementById('notiNum1').innerHTML = notiNum1;
}

function checkSecondNum() {
    let num = document.getElementById('secondNum').value;
    if (!isFloat(num)) {
        notiNum2 = 'Second number is not a float number!';
    } else {
        notiNum2 = '';
    }
    document.getElementById('notiNum2').innerHTML = notiNum2;
}

function checkedMethod() {
    notiResult = '';
    document.getElementById('notiResult').innerHTML = notiResult;
}

function isFloat(val) {
    let floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val)) {
        return false;
    }

    val = parseFloat(val);
    if (isNaN(val)) {
        return false;
    }
    return true;
}