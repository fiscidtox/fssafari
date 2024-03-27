// Check if the device is in portrait orientation
if (window.innerHeight > window.innerWidth) {
    // Force landscape mode by rotating the screen
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    document.head.appendChild(meta);

    // Prompt the user to rotate the device
    alert('Please rotate your device to landscape mode.');

    // Check if the device has been rotated to landscape orientation
    window.addEventListener('orientationchange', () => {
        if (window.innerHeight < window.innerWidth) {
            // Request fullscreen mode once the device is in landscape orientation
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
        }
    });
} else {
    // Request fullscreen mode if the device is already in landscape orientation
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}
