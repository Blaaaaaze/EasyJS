function addToFotm(value) {
    let form = document.getElementById('enterForm');
    if (value == '=') {
        let n1 = '';
        let n2 = '';
        let cntMath = 0;
        let mathOper = ''
        let formStr = form.value;
        for (let i = 0; i < formStr.length; i++) {
            if (formStr.slice(i, i+1) == '+' || formStr.slice(i, i+1) == '-' || formStr.slice(i, i+1) == '*' || formStr.slice(i, i+1) == '/') {
                cntMath+=1;
                if (cntMath > 1) {
                    form.value = 'ОШИБКА';
                    break;
                }
                mathOper = formStr.slice(i, i+1)
            }
            if (formStr.slice(i, i+1) == +formStr.slice(i, i+1) && cntMath == 0) n1 += formStr.slice(i, i+1);
            if (formStr.slice(i, i+1) == +formStr.slice(i, i+1) && cntMath == 1) n2 += formStr.slice(i, i+1);
        }
        if (cntMath <= 1) {
        switch (mathOper) {
            case '+': form.value = +n1 + +n2;
            break;

            case '-': form.value = +n1 - +n2;
            break;

            case '*': form.value = +n1 * +n2;
            break;

            case '/': 
            if (+n2 == 0) {
                form.value = 'ОШИБКА';
                break
            }
            form.value = +n1 / +n2;
            break;
        }
    } else {
        form.value = 'ОШИБКА'
    }
    } else if (value == 'C') {
        form.value = ''
    } else {
        form.value += value
    }
    
}

document.getElementById("btn1").onclick = () => {
    addToFotm(1)
}

document.getElementById("btn2").onclick = () => {
    addToFotm(2)
}

document.getElementById("btn3").onclick = () => {
    addToFotm(3)
}

document.getElementById("btn4").onclick = () => {
    addToFotm(4)
}

document.getElementById("btn5").onclick = () => {
    addToFotm(5)
}

document.getElementById("btn6").onclick = () => {
    addToFotm(6)
}

document.getElementById("btn7").onclick = () => {
    addToFotm(7)
}

document.getElementById("btn8").onclick = () => {
    addToFotm(8)
}

document.getElementById("btn9").onclick = () => {
    addToFotm(9)
}

document.getElementById("btn0").onclick = () => {
    addToFotm(0)
}

document.getElementById("btnPlus").onclick = () => {
    addToFotm('+')
}

document.getElementById("btnMinus").onclick = () => {
    addToFotm('-')
}

document.getElementById("btnMulty").onclick = () => {
    addToFotm('*')
}

document.getElementById("btnDel").onclick = () => {
    addToFotm('/')
}

document.getElementById("btnClear").onclick = () => {
    addToFotm('C')
}

document.getElementById("btnEqual").onclick = () => {
    addToFotm('=')
}