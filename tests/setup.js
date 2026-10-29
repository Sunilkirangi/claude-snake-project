// Load the HTML and game code before tests run
document.body.innerHTML = require('fs').readFileSync('./index.html', 'utf8');
