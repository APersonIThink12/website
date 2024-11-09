document.addEventListener('DOMContentLoaded', () => {
  // Select the buttons
  const homeBtn = document.getElementById('homeBtn');
  const gamesBtn = document.getElementById('gamesBtn');
  const radiantRuinBtn = document.getElementById('radiantRuinBtn');
  const buyBtn = document.getElementById('buyBtn');

  // Event listener for home button
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = '/';  // Navigate to the home page
    });
  }

  // Event listener for games button
  if (gamesBtn) {
    gamesBtn.addEventListener('click', () => {
      window.location.href = '/games';  // Navigate to the games page
    });
  }

  // Event listener for Radiant Ruin game button
  if (radiantRuinBtn) {
    radiantRuinBtn.addEventListener('click', () => {
      window.location.href = '/radiant-ruin';  // Navigate to the Radiant Ruin page
    });
  }

  // Event listener for buy button
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      alert('Purchased!');
    });
  }
});
