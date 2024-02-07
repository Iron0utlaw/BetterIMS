function loadHTMLAndCSS() {
  // Load HTML content
  const htmlFilePath = chrome.extension.getURL('public/home.html');
  const cssFilePath = chrome.extension.getURL('public/home.css');
  fetch(htmlFilePath)
    .then(response => response.text())
    .then(html => {
      const body = document.body;
      body.innerHTML = html;
    });

  // Load CSS styles
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = cssFilePath;
  document.head.appendChild(style);
}

loadHTMLAndCSS();