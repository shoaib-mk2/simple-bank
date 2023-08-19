function getInput(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

document.getElementById('btn-submit').addEventListener('click', function () {
    const email = getInput('user-email');
    const pass = getInput('password');
    
    if(email === 'abc@gmail.com' && pass === '22222'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please enter correct EMAIL and Password; email: abc@gmail.com; pass: 22222');
    }
})
