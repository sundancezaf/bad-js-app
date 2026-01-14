// Vulnerable: Directly inserts user-controlled HTML
const username = getUserInput(); // e.g., '<img src=x onerror=alert("XSS")>'
document.getElementById('welcome').innerHTML = `Hello, ${username}!`;

// Vulnerable: Allows script execution via URL
const maliciousUrl = getUserInput(); // e.g., 'javascript:alert("XSS")'
document.getElementById('myFrame').src = maliciousUrl;

// Vulnerable: Executes arbitrary code
const code = getUserInput(); // e.g., 'alert("XSS")'
eval(code); // Or setTimeout(code, 100);
