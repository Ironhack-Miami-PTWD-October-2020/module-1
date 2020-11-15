function moveRect(x, y) {
  const canvas = document.getElementById('example');
  const context = canvas.getContext('2d');

  const canvasWidth = canvas.width; // 300
  const canvasHeight = canvas.height; // 300

  //   console.log(canvasWidth, canvasHeight);

  context.clearRect(0, 0, canvasWidth, canvasHeight);

  context.fillStyle = 'olive';

  // fillRect(x, y, width, height)
  context.fillRect(x, y, 50, 50);

  x += 3;

  if (x % 10 === 0) {
    y += 15;
  }

  //   moveRect();
  setTimeout(() => moveRect(x, y), 30);
}
