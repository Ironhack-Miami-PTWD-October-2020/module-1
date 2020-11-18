const canvas = document.getElementById('example-state');
const context = canvas.getContext('2d');

// .save(), .restore()

const drawCanvas = (x, y, w, h, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
};

drawCanvas(10, 20, 30, 30, 'blue');
context.save();

drawCanvas(50, 70, 30, 30, 'orange');
context.save();

drawCanvas(120, 150, 30, 30, 'green');

context.restore();
context.fillRect(200, 70, 30, 30);

context.restore();
drawCanvas(250, 20, 30, 30);
