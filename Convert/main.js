function fromRub(summ, course) {
    let result = 0;
    while (summ > course) {
        result += 1;
        summ -= values[0];
    }
    return result
}




let values = [];

fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
.then((response) => {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
})
.then((json) => {
    // Текущий курс доллара ЦБРФ
    
    values.push(json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_USD_LAST')]);
    values.push(json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_EUR_LAST')]);
})
.catch((error) => {
    
    console.error(error);
    
});


let button = document.getElementById('convert');
console.log(values)

button.onclick = () => {
    console.log(values)
    let select1 = document.getElementById('input');
    let select2 = document.getElementById('output');
    let form1 = document.getElementById('enterForm');
    let form2 = document.getElementById('result')
    let result = 0;
    let cur = +form1.value;
    console.log(select1.value)
    console.log(select2.value)
    



    if (select1.value == select2.value) {
        form2.value = form1.value;
    } else {
        if (select1.value == 'RUB') {
            if (select2.value == 'USD') {
                form2.value = fromRub(cur, values[0]);
            } else if (select.value == 'EUR') {
                form2.value = fromRub(cur, values[1]);
            }

        } else if (select1.value == 'USD') {

            if (select2.value == 'RUB') {
                form2.value = cur*value[0];
            } else if (select2.value == 'EUR') {
                form2.value = fromRub(cur*values[0], values[1]);
            }

        } else if (select1.value == 'EUR') {
            if (select2.value == 'RUB') {
                form2.value = cur*values[1];
            } else if (select2.value == 'USD') {
                form2.value = fromRub(cur*values[1], values[0])
            }
        }
    }


}

