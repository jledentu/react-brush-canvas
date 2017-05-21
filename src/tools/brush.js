export default class Brush {
  constructor(context, options = {}) {
    this.context = context;
    this.options = options;
    this.points = [];
  }

  down(x, y) {
    this.drawing = true;

    this.points = [];
    this.points.push({ x, y });

    this.brush(x, y);
  }

  move(x, y) {
    if (this.drawing) {
      this.points.push({ x, y });
      this.brush(x, y);
    }
  }

  up() {
    this.drawing = false;
    this.points = [];
  }

  brush(x, y) {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.lineWidth = this.options.lineWidth;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    // Canvas context parameters
    this.context.fillStyle = this.options.color;
    this.context.strokeStyle = this.options.color;

    this.context.beginPath();

    if (this.points && this.points.length >= 3) {
      this.context.moveTo(this.points[0].x, this.points[0].y);

      let i = 1;

      for (; i < this.points.length - 2; i++) {
        const c = (this.points[i].x + this.points[i + 1].x) / 2;
        const d = (this.points[i].y + this.points[i + 1].y) / 2;

        this.context.quadraticCurveTo(this.points[i].x, this.points[i].y, c, d);
      }

      this.context.quadraticCurveTo(
      this.points[i].x,
      this.points[i].y,
      this.points[i + 1].x,
      this.points[i + 1].y);

      this.context.stroke();
    } else {
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.arc(x, y, this.options.lineWidth / 2, 0, 2 * Math.PI);
      this.context.fill();
    }
  }
}
