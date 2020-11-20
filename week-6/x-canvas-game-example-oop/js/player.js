class Player extends Component {
  constructor(game, x, y, w, h, immunity) {
    super(game, x, y, w, h);
    this.immunity = immunity;
  }

  move() {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA':
          if (this.x >= 3) this.x -= 10;
          break;
        case 'ArrowRight':
        case 'KeyD':
          if (this.x <= this.game.canvas.width - this.width - 10) this.x += 10;
          break;
        case 'ArrowUp':
        case 'KeyW':
          this.y -= 10;
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.y += 10;
          break;
        default:
          console.log('You can use only arrows and ASDW!');
      }
    });
  }

  switchImmunity() {
    this.immunity = true;
    setTimeout(() => {
      this.immunity = false;
    }, 1000);
  }
}
