// Add event listeners for toggle buttons
document.querySelectorAll('.toggle-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-target');
        var section = document.getElementById(targetId);
        if (section) {
            section.classList.toggle('hidden');
        }
    });
});
