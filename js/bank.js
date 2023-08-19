function getUserInput(id){
    const userData = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = '';
    return userData;
}

function getPreviousTotal(id){
    const previousTotal = parseFloat(document.getElementById(id).innerText);
    return previousTotal;
}

function setElementValueById(id, newAmount){
    document.getElementById(id).innerText = newAmount;
}

// deposit amount get and set
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getUserInput('deposit-amount');
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    const previousDepositAmount = getPreviousTotal('deposit-total');
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    const previousBalanceAmount = getPreviousTotal('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);
    setElementValueById('balance-total', newBalanceTotal);
})

//withdraw amount get and set
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getUserInput('withdraw-amount');
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    const previousWithdrawAmount = getPreviousTotal('withdraw-total');
    const previousBalanceAmount = getPreviousTotal('balance-total');
    if(previousBalanceAmount < newWithdrawAmount){
        alert('eto taka nai');
        return;
    }
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);
    setElementValueById('balance-total', newBalanceTotal);
})