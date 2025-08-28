// Wait for the chat to load then remove watermark
setTimeout(() => {
    const watermarks = document.querySelectorAll('[class*="watermark"], [class*="powered-by"], .dify-watermark');
    watermarks.forEach(element => element.remove());
}, 2000);

// Or use a mutation observer for dynamic removal
const observer = new MutationObserver(() => {
    const watermark = document.querySelector('.dify-watermark, .powered-by-dify');
    if (watermark) watermark.remove();
});
observer.observe(document.body, { childList: true, subtree: true });