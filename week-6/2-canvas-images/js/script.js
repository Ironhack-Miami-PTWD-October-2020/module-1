const canvas = document.getElementById('example-images');
const context = canvas.getContext('2d');

const natureImg = new Image();
// console.log(natureImg); // <img>

// although we are in the script file,
// we HAVE TO connect the image as if we were in the HTML file
natureImg.src = './images/nature.jpeg';

natureImg.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(natureImg, 10, 30, 260, 160);
});

// all images are rectangles
// chose transparent images
