class Component {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }

  drawComponent(imageSource) {
    // console.log('------> ', this.img);
    this.img.src = imageSource;
    this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  didCollide(otherComponent) {
    if (
      otherComponent.x + otherComponent.width - 15 < this.x ||
      otherComponent.x > this.x + this.width ||
      otherComponent.y > this.y + this.height ||
      otherComponent.y + otherComponent.height < this.y
    ) {
      return false;
    } else {
      // if (!superman.immunity) {
      //   lives -= 1;
      //   switchImmunity();
      // }
      return true;
    }
  }
}
