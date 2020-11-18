const canvas = document.getElementById('example-animation');
const context = canvas.getContext('2d');

let speed1 = 1;
let speed2 = 2;
let speed3 = 3;

const drawCanvas = (x, y, w, h, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
};

const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

const updateCanvas = () => {
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;
  clearCanvas();

  drawCanvas(50, speed1, 50, 50, 'blue');
  drawCanvas(150, speed2, 50, 50, 'green');
  drawCanvas(250, speed3, 50, 50, 'yellow');

  // 1
  // setTimeout(updateCanvas, 30);

  // 2
  requestAnimationFrame(updateCanvas);

  // 3
  // setInterval(updateCanvas, 1400 / 60);
};

updateCanvas();
