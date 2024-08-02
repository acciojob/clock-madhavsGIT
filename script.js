//your JS code here. If required.
function updateTime() {
  const timerElement = document.getElementById('timer');
  const now = new Date();

  const options = {
    hour12: true,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const formattedTime = now.toLocaleString('en-US', options);

  timerElement.textContent = formattedTime;
}

// Update the time immediately on load
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
