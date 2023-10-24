"use strict";
document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('#register');

    form.addEventListener('submit', validar);

    function validar(e) {
        e.preventDefault();
        let formularioData = new FormData(form);
        let nameInput = formularioData.get('name');
        let ageInput = formularioData.get('age');
        let emailInput = formularioData.get('email');
        let password1Input = formularioData.get('password1');
        let password2Input = formularioData.get('password2');

        console.log(nameInput);
        console.log(ageInput);
        console.log(emailInput);
        console.log(password1Input);
        console.log(password2Input);
    
        if (password1Input!=password2Input){
            let inputp1=document.querySelector('input[name="password1"]');
            let inputp2=document.querySelector('input[name="password2"]');
            inputp1.classList.toggle('error');
            inputp2.classList.toggle('error');
            let error=document.querySelector('input[name="password2"]').nextElementSibling;
            error.innerHTML="Las claves no coinciden";
        }  
        
    }
});