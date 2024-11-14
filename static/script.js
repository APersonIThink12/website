document.addEventListener('DOMContentLoaded', () => {
  // Select the buttons
  const homeBtn = document.getElementById('homeBtn');
  const gamesBtn = document.getElementById('gamesBtn');
  const radiantRuinBtn = document.getElementById('radiantRuinBtn');
  const buyBtn = document.getElementById('buyBtn');
  const purchased = false;

  // Event listener for home button
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = '/';
    });
  }

  // Event listener for games button
  if (gamesBtn) {
    gamesBtn.addEventListener('click', () => {
      window.location.href = '/games';
    });
  }

  // Event listener for Radiant Ruin game button
  if (radiantRuinBtn) {
    radiantRuinBtn.addEventListener('click', () => {
      window.location.href = '/radiant-ruin';
    });
  }

  // Event listener for buy button
  if (buyBtn && purchased) {
    buyBtn.addEventListener('click', () => {
      alert('Purchased!');
      purchased = true;
    });
  }
});
