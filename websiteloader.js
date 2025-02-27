// Create a new blank tab
let newWindow = window.open('about:blank', '_blank');

// Fetch the HTML content from the URL
fetch('https://raw.githubusercontent.com/hellomynameisgithubuser/HTMLrepo/refs/heads/main/index.html')
  .then(response => response.text())
  .then(html => {
    // Check if HTML is received
    if (html) {
      newWindow.document.open();
      newWindow.document.write(html);  // Write the raw HTML to the new tab
      newWindow.document.close();
    } else {
      throw new Error("Failed to load HTML content");
    }
  })
  .catch(error => {
    console.error('Error loading the HTML:', error);
    newWindow.document.write(`<p>Error: ${error.message}</p>`);
    newWindow.document.close();
  });
