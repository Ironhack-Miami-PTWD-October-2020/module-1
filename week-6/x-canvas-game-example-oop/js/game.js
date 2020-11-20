class Game {
  constructor() {
    this.canvas = undefined;
    this.context = undefined;
    this.superman = new Player(this, 0, 200, 150, 150, false);
    this.fireball = new Component(this, 800, 200, 70, 70);
    this.score = 0;
    this.lives = 3;
  }

  init() {
    this.canvas = document.getElementById('my-canvas');
    this.context = this.canvas.getContext('2d');

    // this.drawBackground();
    this.superman.move();

    const interval = setInterval(() => {
      this.clear();
      this.drawBackground();

      this.fireball.x -= 5;

      if (this.fireball.x < -this.fireball.width) {
        this.fireball.x = this.canvas.width;
        this.fireball.y = Math.floor(Math.random() * 430);
      }

      if (this.fireball.x === 0) {
        this.score++;
      }

      this.fireball.drawComponent('./images/fireball.png');
      this.superman.drawComponent('./images/superman.png');

      if (this.fireball.didCollide(this.superman)) {
        if (!this.superman.immunity) {
          this.lives -= 1;
          this.superman.switchImmunity();
        }

        if (this.lives === 0) {
          clearInterval(interval);
          this.gameOver();
        }
        // alert('collided');
      }
    }, 1000 / 60);
  }

  drawBackground() {
    this.context.fillStyle = 'pink';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 1.1 make score visible on the board

    this.context.fillStyle = 'green';
    this.context.font = '25px Arial';

    this.context.fillText(`Score: ${this.score}`, 800, 50);

    this.context.fillText(`Lives: ${this.lives}`, 800, 90);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  gameOver() {
    this.clear();

    this.drawBackground();

    this.context.fillStyle = 'red';
    this.context.font = '70px Arial';

    this.context.fillText('GAME OVER!', 300, 200);
  }
}
