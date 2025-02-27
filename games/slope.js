document.getElementById("slopeBtn").addEventListener("click", () => {
    var newTab = window.open('about:blank', '_blank');  // Use 'var' instead of 'const'
    newTab.document.write(`
        <iframe id="innerFrame" name="innerFrame" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads" frameborder="0" allowfullscreen="" src="https://pbiscul.github.io/Slope-Gameyes/" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
</iframe>
    `);
});
