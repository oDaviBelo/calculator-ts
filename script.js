"use strict";
let input1 = document.querySelector(`.num1`);
let input2 = document.querySelector(`.num2`);
let buttonsum = document.querySelector(`#sum`);
let buttonsub = document.querySelector(`#sub`);
let buttonmult = document.querySelector(`#mult`);
let buttondiv = document.querySelector(`#div`);
let buttoncls = document.querySelector(`#cls`);
let display = document.querySelector(`.display`);
buttonsum.addEventListener("click", () => {
    let value1 = +input1.value;
    let value2 = +input2.value;
    if (isNaN(value1) || isNaN(value2)) {
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    }
    else {
        const resul = value1 + value2;
        const show = resul.toString();
        display.innerHTML = show;
    }
});
buttonsub.addEventListener("click", () => {
    let value1 = +input1.value;
    let value2 = +input2.value;
    if (isNaN(value1) || isNaN(value2)) {
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    }
    else {
        const resul = value1 - value2;
        const show = resul.toString();
        display.innerHTML = show;
    }
});
buttonmult.addEventListener("click", () => {
    let value1 = +input1.value;
    let value2 = +input2.value;
    if (isNaN(value1) || isNaN(value2)) {
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    }
    else {
        const resul = value1 * value2;
        const show = resul.toString();
        display.innerHTML = show;
    }
});
buttondiv.addEventListener("click", () => {
    let value1 = +input1.value;
    let value2 = +input2.value;
    if (isNaN(value1) || isNaN(value2)) {
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    }
    else {
        const resul = value1 / value2;
        const show = resul.toString();
        display.innerHTML = show;
    }
});
buttoncls.addEventListener('click', () => {
    display.innerHTML = '';
    input1.value = '';
    input2.value = '';
});
