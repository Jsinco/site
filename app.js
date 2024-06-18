const colors = [
    '#9b9393',
    '#9FF5CB',
    '#ADF3FD',
    '#9FBDF5',
    '#B29FF5',
    '#F09FF5',
    '#E7EFB0',
    '#F5CE93'
]

function updateGradientPosition(offsetX, offsetY) {
    const center = Math.round(offsetX + offsetY);
    const direction = `-${center}deg`;

    document.documentElement.style.setProperty('--gradient-direction', direction);
}


document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty('--color1', colors.random())
})

document.addEventListener('mousemove', (event) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate offset based on mouse position and screen size
    const offsetX = (mouseX / screenWidth) * 100;
    const offsetY = (mouseY / screenHeight) * 100;

    // Update gradient position (adjust as needed)
    updateGradientPosition(offsetX, offsetY);
});

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}