document.getElementById('login-submit').addEventListener('click', function(){

    function getUserInformation(information){
        const userInformation = document.getElementById(information);
        const userField = userInformation.value;
        userInformation.value = '';
        return userField;
        
    }
    const userField = getUserInformation('user-email');

    const passwordField = getUserInformation('user-password')
    
    if(userField == 'baper@baank.com' && passwordField == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        alert('sorry, your informtion wrong....please type email ( baper@baank.com ) and password ( secret )...');
    }
});