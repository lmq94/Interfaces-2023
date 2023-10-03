const userIcon = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');
const menuIcon = document.getElementById("menu-icon");
const menuDropdown = document.getElementById("menu-dropdown");

userIcon.addEventListener('click', function () {
    if (userDropdown.style.display === 'block') {
        userDropdown.style.display = 'none';
    } else {
        userDropdown.style.display = 'block';
    }
});


document.addEventListener('click', function (event) {
    if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.style.display = 'none';
    }
});

menuIcon.addEventListener("click", () => {
    // Alterna la visibilidad del menú al hacer clic en el icono
    if (menuDropdown.style.display === "block") {
        menuDropdown.style.display = "none";
    } else {
        menuDropdown.style.display = "block";
    }
});

// Agrega un event listener para ocultar el menú si se hace clic en cualquier otro lugar del documento
document.addEventListener("click", (event) => {
    if (event.target !== menuIcon && event.target !== menuDropdown) {
        menuDropdown.style.display = "none";
    }
});