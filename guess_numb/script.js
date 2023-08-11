function check(min=1, max=100) {
    return Math.floor(Math.random() * (max - min) + min)
}


let btn = document.getElementById('btn');
let indicate = document.getElementById('colour');
let form = document.getElementById('input');
const win = +check();
let closeBtn = document.getElementById('close');
let modal = document.getElementById('modal'); 


btn.onclick = () => {
    let testValue = +form.value;
    if (testValue == win) {
        modal.classList.add('is-open')
    } else if (testValue > win) {
        indicate.style.backgroundColor = '#FFF';
        setTimeout(1);
        indicate.style.backgroundColor = '#FF0000';
    } else {
        indicate.style.backgroundColor = '#FFF';
        setTimeout(1);
        indicate.style.backgroundColor = '#42AAFF';
    }
}

