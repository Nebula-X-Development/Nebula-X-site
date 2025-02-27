document.addEventListener('DOMContentLoaded', () => {
    // Check if panic key is set in localStorage
    const storedPanicKey = localStorage.getItem('panicKey');
    if (storedPanicKey) {
        const panicKey = JSON.parse(storedPanicKey);

        // Listen for keydown events on all pages
        document.addEventListener('keydown', (e) => {
            if (e.key === panicKey.key) {
                // Redirect to the panic URL when the key is pressed
                window.location.href = panicKey.url;
            }
        });
    }
});