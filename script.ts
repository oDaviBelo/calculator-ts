let input1 = document.querySelector(`.num1`) as HTMLInputElement;
let input2 = document.querySelector(`.num2`) as HTMLInputElement;
let buttonsum = document.querySelector(`#sum`) as HTMLButtonElement;
let buttonsub = document.querySelector(`#sub`) as HTMLButtonElement;
let buttonmult = document.querySelector(`#mult`) as HTMLButtonElement;
let buttondiv = document.querySelector(`#div`) as HTMLButtonElement;
let buttoncls = document.querySelector(`#cls`) as HTMLButtonElement;

let display = document.querySelector(`.display`) as HTMLParagraphElement;

buttonsum.addEventListener("click", ()=>{
    let value1 = +input1.value;
    let value2 = +input2.value;
    
    if(isNaN(value1) || isNaN(value2)){
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    } else{
        const resul = value1 + value2;
        const show = resul.toString()
        display.innerHTML = show;
    }

    
})

buttonsub.addEventListener("click", ()=>{
    let value1 = +input1.value;
    let value2 = +input2.value;
    
    if(isNaN(value1) || isNaN(value2)){
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    } else{
        const resul = value1 - value2;
        const show = resul.toString()
        display.innerHTML = show;
        
    }
    

    
})

buttonmult.addEventListener("click", ()=>{
    let value1 = +input1.value;
    let value2 = +input2.value;
    
    if(isNaN(value1) || isNaN(value2)){
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    } else{
        const resul = value1 * value2;
        const show = resul.toString()
        display.innerHTML = show;
    }

    
})

buttondiv.addEventListener("click", ()=>{
    let value1 = +input1.value;
    let value2 = +input2.value;
    
    if(isNaN(value1) || isNaN(value2)){
        alert("TYPE A NUMBER");
        display.innerHTML = '';
        input1.value = '';
        input2.value = '';
    } else{
        const resul = value1 / value2;
        const show = resul.toString()
        display.innerHTML = show;
    }

    
})


buttoncls.addEventListener('click',()=>{
    display.innerHTML = '';
    input1.value = '';
    input2.value = '';

})