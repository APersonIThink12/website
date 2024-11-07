// Select the buttons
const homeBtn = document.querySelector('.homeBtn button');
const gamesBtn = document.querySelector('.gamesBtn button');
const radiantRuinBtn = document.querySelector('.game button');

// Event listener for home button
homeBtn.addEventListener('click', () => {
  window.location.href = '/';  // Navigate to the home page
});

// Event listener for games button
gamesBtn.addEventListener('click', () => {
  window.location.href = '/games';  // Navigate to the games page
});

// Event listener for Radiant Ruin game button
radiantRuinBtn.addEventListener('click', () => {
  window.location.href = '/radiant-ruin';  // Navigate to the Radiant Ruin page
});
