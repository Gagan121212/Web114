/* 
*@Gagan Lakandri
*11/21/25
*/
const moodDisplay = document.getElementById('moodDisplay');

const moods = {
  happy:     { bg: '#ffeb3b', text: '#795548', message: 'Every sunrise holds more promise, and every sunset holds more peace.' },
  calm:      { bg: '#81d4fa', text: '#01579b', message: 'Today is your chance to be amazing.' },
  excited:   { bg: '#ff1744', text: '#ffffff', message: 'Rise above the storm, and you will find the sunshine.' },
  chill:     { bg: '#a5d6a7', text: '#1b5e20', message: 'Life is better when you’re laughing.' },
  mysterious:{ bg: '#212121', text: '#bdbdbd', message: 'Smile, breathe, and go slowly.' }
};

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('mood-btn')) {
    const mood = event.target.getAttribute('data-mood');
    const config = moods[mood];

    document.body.style.backgroundColor = config.bg;
    document.body.style.color = config.text;
    moodDisplay.textContent = config.message;
  }
});
