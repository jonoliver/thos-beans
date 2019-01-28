import beansAudioFile from './assets/thos-beans.mp3';

export default () => {
  const audio = document.createElement('audio');
  audio.src = beansAudioFile;
  return audio;
}