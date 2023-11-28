
document.addEventListener("DOMContentLoaded", loading);

function updatepercentage() {
    let percentage = 10;
    let percentageElement = document.getElementById('porcentaje');

    let interval = setInterval(function() {
        if (percentage < 100) {
            percentage += 10;
            percentageElement.textContent = 'cargando...' + percentage + '%';
        } 
        else {
            clearInterval(interval);
        }
        }, 500); 
}


function loading (e) {
        e.preventDefault();
        updatepercentage();
        setTimeout(function() {
            window.location.href = './index.html';
        }, 5000);

}






