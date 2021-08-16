/* 
function doubleIt(num){
    const result = num*2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);             
 */ 

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amount = parseFloat(inputAmountText);
    //clean the deposit input value
    inputField.value = '';

    return amount;
}

function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalBalanceText = totalField.innerText;
    const balanceAmount = parseFloat(totalBalanceText);
    totalField.innerText = amount + balanceAmount;
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;
}

function updateBalance(amount, isAdd){
    
     const totalBalance = document.getElementById('total-balance');
    /* const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);  */
    const totalBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = totalBalanceAmount + amount;
    }
    else{
        totalBalance.innerText = totalBalanceAmount - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
    // const inputField = document.getElementById('deposit-input');
    // const inputAmountText = inputField.value;
    // const amount = parseFloat(inputAmountText);

    //get and update total deposit
    /* 
    const totalField = document.getElementById('deposit-balance');
    const totalBalanceText = totalField.innerText;
    const balanceAmount = parseFloat(totalBalanceText);
    totalField.innerText = amount + balanceAmount; 
    */


    //update total balance with add deposit
    // const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const totalBalanceAmount = parseFloat(totalBalanceText);
    // totalBalance.innerText = totalBalanceAmount + amount;
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotalField('deposit-balance', amount);
        updateBalance(amount, true);
    }

    
});

//Withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);
    
    //withdraw field access
    // const withdrawBalance = document.getElementById('withdraw-balance');
    // const withdrawBalanceText = withdrawBalance.innerText;
    // const withdrawBalanceAmount = parseFloat(withdrawBalanceText);
    // //total withdraw amount
    // withdrawBalance.innerText = withdrawInputAmount + withdrawBalanceAmount;

    //update total balnce after withdraw
    // const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const totalBalanceAmount = parseFloat(totalBalanceText);
    // totalBalance.innerText = totalBalanceAmount - withdrawInputAmount;
    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputAmount > 0 && withdrawInputAmount < currentBalance){
        updateTotalField('withdraw-balance', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
    if(withdrawInputAmount > currentBalance){
        alert('sorry you can not withdraw more than your total balance');
    }

});