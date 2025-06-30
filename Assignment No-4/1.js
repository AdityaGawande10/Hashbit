function swapTheme() {
  
  const app = document.getElementById('app');
  const btn = document.getElementById('swap');

  if (app.classList.contains('day')) {
    app.className = 'night';
    btn.className = 'button_night';
  } else {
    app.className = 'day';
    btn.className = 'button_day';
  }
}