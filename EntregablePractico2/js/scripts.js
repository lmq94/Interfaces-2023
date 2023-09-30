const userIcon = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');

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