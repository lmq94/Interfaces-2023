"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('register'); // Obtén el formulario

    signUpButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe (si es un formulario)

        // Realiza la validación de los campos requeridos
        if (form.checkValidity()) {
            // Muestra el mensaje de registro exitoso y el enlace
            successMessage.style.display = 'block';

            // Oculta el mensaje después de 5 segundos (5000 milisegundos)
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Si no se cumple la validación, muestra un mensaje de error o realiza alguna otra acción
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
});    