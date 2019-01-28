import images from './images';

export default () => {
  const img = document.createElement('img');
  img.src = images.billFoster;
  img.alt = "thos Beans!";
  img.classList = "thos-beans";
  img.style.display = "none";
  img.style.position = "absolute";
  img.style.bottom = "0";
  img.style.right = "0";

  img.onload = function() {
    this.style.transform = `translate(${this.width}px)`;
    img.style.display = "block";
  }
  return img;
}