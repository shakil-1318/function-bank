/* 
function doubleIt(num){
    const result = num*2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
    //clean the deposit input value
    depositInput.value = '';

    return depositInputAmount;
}



document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const depositInputAmount = parseFloat(depositInputText);
    const depositInputAmount = getInputValue();

    //get current deposit
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceText = depositBalance.innerText;
    const depositBalanceAmount = parseFloat(depositBalanceText);
    //total deposit amount
    depositBalance.innerText = depositInputAmount + depositBalanceAmount;

    //update total balance with add deposit
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    //update total balance 
    totalBalance.innerText = totalBalanceAmount + depositInputAmount;

    
});

//Withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //withdraw field access
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceText = withdrawBalance.innerText;
    const withdrawBalanceAmount = parseFloat(withdrawBalanceText);
    //total withdraw amount
    withdrawBalance.innerText = withdrawInputAmount + withdrawBalanceAmount;

    //update total balnce after withdraw
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    //update balance after withdraw
    totalBalance.innerText = totalBalanceAmount - withdrawInputAmount;

    //clean the withdraw input value
    withdrawInput.value = '';
});