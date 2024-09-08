// Add event listeners for toggle buttons
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = (button as HTMLButtonElement).getAttribute('data-target');
        const section = document.getElementById(targetId as string);

        if (section) {
            section.classList.toggle('hidden');
        }
    });
});
