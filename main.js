/*
    
*/

function showSavedUser() {
   let nome = document.getElementById('txt-nome').value; 
   let email = document.getElementById('txt-email').value; 
   alert(nome+' <'+email+'>');
}

function limpar() {
    $('#txt-nome').val('').rer;
    $('#txt-email').val('');
    alert('Limpado nome e email');
}
