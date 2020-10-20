


const hint = document.querySelectorAll('.prompt')
const requiredContent = document.querySelectorAll('.required');
const anwser = document.querySelectorAll('input');


function remind (i) {
    hint[i].classList.remove('prompt');
    requiredContent[i].classList.add('red');
    anwser[i].classList.add('red');
}

function check (e) {
    const input1 = document.querySelector('#input-email').value;
    const input2 = document.querySelector('#input-name').value;
    const input31 = document.querySelector('#input-type1').checked;
    const input32 = document.querySelector('#input-type2').checked;
    const input4 = document.querySelector('#input-occupation').value;
    const input5 = document.querySelector('#input-plan').value;
    const input6 = document.querySelector('#input-background').value;
    if (input1 === null || input1 === ''){
        remind(0);
        e.preventDefault();
    }
    else if (input2 === null || input2 === ''){
        remind(1);
        e.preventDefault();
    }
    else if (!input31 && !input32){
        remind(2);
        e.preventDefault();
    }
    else if (input4 === null || input4 === ''){
        remind(3);
        e.preventDefault();
    }
    else if (input5 === null || input5 === ''){
        remind(4);
        e.preventDefault();
    }
    else if (input6 === null || input6 === ''){
        remind(5);
        e.preventDefault();
    }
    else alert('data submitted')
    
}

function submit () {
    document.querySelector('.submit').addEventListener('click', check);
}

submit();