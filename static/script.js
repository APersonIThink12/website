const homeBtn = document.querySelector('.homeBtn button');
const gamesBtn = document.querySelector('.gamesBtn button');

homeBtn.addEventListener('click', () => {
  window.location.href = '/';
});

gamesBtn.addEventListener('click', () => {
  window.location.href = '/games';
})