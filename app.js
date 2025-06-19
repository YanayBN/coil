document.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${(index + 1) * 200}ms`;
    });
});