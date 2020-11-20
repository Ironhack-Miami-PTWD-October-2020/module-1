const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

let score = 0;
let isOver = false;
let lives = 3;

// 1. set the background

const drawBackground = () => {
  context.fillStyle = 'pink';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 1.1 make score visible on the board

  context.fillStyle = 'green';
  context.font = '25px Arial';

  context.fillText(`Score: ${score}`, 800, 50);

  context.fillText(`Lives: ${lives}`, 800, 90);
};

// 2. add images to canvas

const superman = {
  x: 0,
  y: 200,
  width: 150,
  height: 150,
  immunity: false
};

// const { x, y, width, height } = superman;

const supermanImg = new Image();
supermanImg.src = './images/superman.png';

// supermanImg.addEventListener('load', () => {
//   context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);
// });

const fireball = {
  x: 800,
  y: 200,
  width: 70,
  height: 70
};

const fireballImg = new Image();
fireballImg.src = './images/fireball.png';

// fireballImg.addEventListener('load', () => {
//   context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);
// });

const drawEverything = () => {
  context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);
  context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);

  if (didCollide(superman, fireball)) {
    // alert('CRASHHHH');

    if (lives === 0) {
      gameOver();
    }
  }
};

// 3. create some animation

const drawingLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();
  drawEverything();

  fireball.x -= 5;

  // fireball.x < -70
  if (fireball.x < -fireball.width) {
    fireball.x = canvas.width;
    fireball.y = Math.floor(Math.random() * 430);
  }

  if (fireball.x === 0) {
    score++;
  }

  if (isOver === false) {
    requestAnimationFrame(drawingLoop);
  }
};

// player movements

document.addEventListener('keydown', event => {
  switch (event.code) {
    case 'ArrowLeft':
    case 'KeyA':
      if (superman.x >= 3) superman.x -= 10;
      break;
    case 'ArrowRight':
    case 'KeyD':
      if (superman.x <= canvas.width - superman.width - 10) superman.x += 10;
      break;
    case 'ArrowUp':
    case 'KeyW':
      superman.y -= 10;
      break;
    case 'ArrowDown':
    case 'KeyS':
      superman.y += 10;
      break;
    default:
      console.log('You can use only arrows and ASDW!');
  }
});

const switchImmunity = () => {
  superman.immunity = true;
  setTimeout(() => {
    superman.immunity = false;
  }, 1000);
};

// collision detection

const didCollide = (superman, fireball) => {
  //   const crossRight = fireball.x <= superman.x + superman.width;
  //   const crossLeft = fireball.x + fireball.width >= superman.x + superman.width;
  //   const crossTop = superman.y <= fireball.y + fireball.height;
  //   const crossBottom = superman.y >= fireball.y;

  //   if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
  //     return true;
  //   }
  if (
    superman.x + superman.width - 15 < fireball.x ||
    superman.x > fireball.x + fireball.width ||
    superman.y > fireball.y + fireball.height ||
    superman.y + superman.height < fireball.y
  ) {
    return false;
  } else {
    if (!superman.immunity) {
      lives -= 1;
      switchImmunity();
    }
    return true;
  }
};

// 4. end the game

const gameOver = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // set the background
  drawBackground();

  // change the image to the tired superman one
  // const tiredSupermanImg = new Image();
  // tiredSupermanImg.src = './images/tired-superman.png';

  const tiredSuperman = {
    x: 400,
    y: 300,
    width: 150,
    height: 150,
    img: undefined
  };

  tiredSuperman.img = new Image();
  tiredSuperman.img.src = './images/tired-superman.png';

  tiredSuperman.img.addEventListener('load', () => {
    context.drawImage(tiredSuperman.img, tiredSuperman.x, tiredSuperman.y, tiredSuperman.width, tiredSuperman.height);
  });

  // in a moment of a collision, update the state from false to true
  isOver = true;

  // put some text - GAME OVER
  context.fillStyle = 'red';
  context.font = '70px Arial';

  context.fillText('GAME OVER!', 300, 200);
};

drawingLoop();
