// Fake the device being in landscape mode to enable fullscreen in portrait mode on Safari for iOS
const orientationChangeEvent = new Event('orientationchange');

// Override the orientation property to simulate landscape mode
Object.defineProperty(window, 'orientation', { value: 90, writable: false });

// Dispatch the orientationchange event to trigger the change
window.dispatchEvent(orientationChangeEvent);
