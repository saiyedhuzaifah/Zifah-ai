
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

function toggleSidebar(e) {
  e.stopPropagation();
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}
function closeSidebar(e) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar.contains(e.target)) {
    sidebar.classList.remove('show');
  }
}

function createAIAgent() {
  const name = document.getElementById('aiName').value.trim();
  const abilities = document.getElementById('aiAbilities').value.trim();
  const responseBox = document.getElementById('responseBox');

  if (!name || !abilities) {
    responseBox.innerText = "Please enter both AI name and abilities.";
    return;
  }

  responseBox.innerText = "Creating AI agent '" + name + "' with abilities: " + abilities + "...
(Feature in simulation: real file generation will happen on backend)";
}
