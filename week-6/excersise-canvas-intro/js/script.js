const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

// 1
const drawFillRectangle = () => {
  context.fillStyle = 'purple';
  context.fillRect(300, 220, 40, 40);
};

// 2

const drawStrokeRect = () => {
  context.lineWidth = 5; // optional
  context.strokeStyle = 'pink';

  const strokeCoordinates = {
    x: 55,
    y: 100,
    width: 30,
    height: 30
  };

  context.strokeRect(strokeCoordinates.x, strokeCoordinates.y, strokeCoordinates.width, strokeCoordinates.height);
};

// 3
const drawRectPath = () => {
  context.beginPath();
  context.lineWidth = 10; // optional
  context.strokeStyle = 'green';

  context.moveTo(100, 10); // start
  context.lineTo(300, 10); // final

  //   context.moveTo(295, 10); // start
  context.lineTo(300, 200); // final

  context.lineTo(100, 200); // final

  context.lineTo(100, 10); // final

  context.stroke();
  context.closePath();
};

// 4
const drawBullsEye = () => {
  // bigger circle
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(220, 180, 60, 0, Math.PI * 2);
  context.fill();

  //   context.lineWidth = 20;
  context.stroke();
  context.closePath();

  // smaller circle
  context.beginPath();
  context.arc(220, 180, 30, 0, Math.PI * 2);
  context.fillStyle = 'white';
  context.fill();
  context.stroke();
  context.closePath();
};

// 5

const drawText = () => {
  context.fillStyle = 'blue';
  context.font = '25px monospace';
  context.fillText('Ironhack', 195, 290);

  context.fillStyle = 'rgb(205, 50, 200)';
  context.fillText('PTWD 102020 ♥️', 195, 310);
};
