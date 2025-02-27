// Get the toggle and status elements
let statsToggle = document.getElementById('performance-stats-toggle');
let statusText = document.getElementById('performance-status');

// Check if performance stats are enabled in localStorage (if previously set)
if (localStorage.getItem('performance-stats-enabled') === 'true') {
    statsToggle.checked = true;
    statusText.textContent = 'Enabled';
    injectPerformanceStats();  // Inject the script if it's enabled
}

// Event listener for toggle
statsToggle.addEventListener('change', () => {
    if (statsToggle.checked) {
        localStorage.setItem('performance-stats-enabled', 'true');
        statusText.textContent = 'Enabled';
        injectPerformanceStats();
    } else {
        localStorage.setItem('performance-stats-enabled', 'false');
        statusText.textContent = 'Disabled';
        removePerformanceStats();
    }
});

// Function to inject the performance stats script
function injectPerformanceStats() {
    if (document.getElementById('stats-script')) return;  // Avoid injecting multiple times

    let script = document.createElement('script');
    script.id = 'stats-script';  // Unique ID to check later
    script.onload = function() {
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop);
        });
    };
    script.src = 'https://mrdoob.github.io/stats.js/build/stats.min.js';
    document.head.appendChild(script);
}

// Function to remove the performance stats (if needed)
function removePerformanceStats() {
    let statsScript = document.getElementById('stats-script');
    if (statsScript) {
        statsScript.remove();
    }

    // Remove stats DOM element
    let statsDom = document.querySelector('.stats-panel');
    if (statsDom) {
        statsDom.remove();
    }
}
