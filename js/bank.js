function getInputField(inputId){
    const InputField = document.getElementById(inputId);
    const inputFieldText = InputField.value;
    const inputAmount = parseFloat (inputFieldText);
    //clean the deposit input 
    InputField.value = '';
    return inputAmount;
}

function updateField(updateValue, inputAmount){
    const balanceField = document.getElementById(updateValue);
    const balanceFieldText = balanceField.innerText;
    const balanceFieldAmount = parseFloat(balanceFieldText);
    balanceField.innerText = balanceFieldAmount + inputAmount;
}

function getTotalValue(inputAmount, isAdd){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    if(isAdd == true){
        totalBalance.innerText = totalBalanceAmount + inputAmount;
    }
    else{
        totalBalance.innerText = totalBalanceAmount - inputAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){

    const inputAmount = getInputField('deposit-input');
    if(inputAmount > 0){
        updateField('deposit-balance', inputAmount);
        getTotalValue(inputAmount, true);
    }

});

//withdraw btn event handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInputAmount = getInputField('withdraw-input');
    updateField('withdraw-balance', withdrawInputAmount);
    getTotalValue(withdrawInputAmount, false);

})