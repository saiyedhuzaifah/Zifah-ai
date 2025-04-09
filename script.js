
function processCommand() {
  const input = document.getElementById('commandInput').value;
  const responseBox = document.getElementById('responseBox');

  fetch('http://localhost:5000/command', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ command: input })
  })
  .then(response => response.json())
  .then(data => {
    responseBox.innerText = data.response || "Zifah replied, but no text was returned.";
  })
  .catch(error => {
    responseBox.innerText = "Error talking to Zifah: " + error;
  });
}
