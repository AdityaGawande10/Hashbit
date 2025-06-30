function createDiv(width, height, text) {
  const newDiv = document.createElement('div');
  newDiv.style.width = width + 'px';
  newDiv.style.height = height + 'px';
  newDiv.textContent = text;

  const container = document.getElementById('container');
  container.appendChild(newDiv);
}

// Do not change this code
window.createDiv = createDiv;