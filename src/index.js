import buildImage from './image';
import buildAudio from './audio';
import images from './images';

let isInit = false;
let img, audio;

const init = () => {
  if (isInit) return;
  img = buildImage();
  audio = buildAudio();
  document.querySelector('body').append(img);
  document.querySelector('body').append(audio);
  isInit = true;
};

const trigger = () => {
  audio.play();
  img.style.transition = "0.5s";
  img.style.transform = `translate(0)`;
  setTimeout(
    () => { img.style.transform = `translate(${img.width}px)` },
    1000
  );
}

const triggerOnKeyCombo = (keyCombo = ["Control", "b"]) => {
  let pressedKeys = [];

  document.addEventListener('keydown', ({ key }) => {
    pressedKeys.push(key);
    if (keyCombo.every((k, i) => k === pressedKeys[i])) {
      trigger();
    }
  });

  document.addEventListener('keyup', ({ key }) => {
    pressedKeys = pressedKeys.filter(k => k !== key);
  });
}

export default () => {
  init();

  return {
    trigger,
    triggerOnKeyCombo,
    img,
    audio,
    images,
  }
}
