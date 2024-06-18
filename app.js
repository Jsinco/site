function updateGradientPosition(offsetX, offsetY) {
    const center = Math.round(offsetX+ offsetY );
    const direction = `-${center}deg`;

    document.documentElement.style.setProperty('--gradient-direction', direction);
}

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