 <script>
 document.addEventListener('DOMContentLoaded', () => {
        // Check for saved tab cloaking settings in localStorage
        const savedTabCloak = localStorage.getItem('tabCloak');
        if (savedTabCloak) {
            const { title, icon } = JSON.parse(savedTabCloak);
            // Apply the saved tab cloaking settings globally (for all pages)
            updateTabInfo(title, icon);
        }

        // Function to update the tab title and icon
        function updateTabInfo(title, icon) {
            document.title = title;
            const iconLink = document.querySelector("link[rel='icon']") || document.createElement("link");
            iconLink.rel = "icon";
            iconLink.href = icon;
            document.head.appendChild(iconLink);
        }
    });
</script>