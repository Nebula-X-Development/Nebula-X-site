const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle search form submission
app.post('/proxy', (req, res) => {
    const targetUrl = req.body.query;
    if (!targetUrl.startsWith('http')) {
        return res.send('Invalid URL. Please enter a valid web address.');
    }
    res.redirect(`/browse?url=${encodeURIComponent(targetUrl)}`);
});

// Proxy route to handle browsing
app.use('/browse', createProxyMiddleware({
    target: '', // Placeholder (will be dynamically set per request)
    changeOrigin: true,
    router: (req) => req.query.url, // Dynamically set proxy target
    onProxyReq: (proxyReq, req) => {
        console.log(`Proxying request to: ${req.query.url}`);
    }
}));

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
