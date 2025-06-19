const TOTAL_QUOTES = 365;
const audioElement = document.getElementById('audioPlayer');

function getDailyAudioIndex() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const seed = new Date(year, month, day).getTime();
  return (Math.floor(seed / (1000 * 60 * 60 * 24)) % TOTAL_QUOTES) + 1;
}

function playAudio(index) {
  audioElement.src = `audio/${index}.mp3`;
  audioElement.play();
}

document.getElementById('dailyButton').addEventListener('click', () => {
  const index = getDailyAudioIndex();
  playAudio(index);
});

document.getElementById('randomButton').addEventListener('click', () => {
  const index = Math.floor(Math.random() * TOTAL_QUOTES) + 1;
  playAudio(index);
});
