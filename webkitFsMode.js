// Attempt to bypass restrictions on Safari fullscreen mode
const element = document.documentElement;

// Check if fullscreen mode is supported
if (element.requestFullscreen) {
    // Request fullscreen mode
    element.requestFullscreen();
} else if (element.webkitRequestFullscreen) {
    // Request fullscreen mode for Safari
    element.webkitRequestFullscreen();
}
