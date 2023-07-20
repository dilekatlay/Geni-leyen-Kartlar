const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiver();
        panel.classList.add('active');
    })
})

function removeActiver() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}