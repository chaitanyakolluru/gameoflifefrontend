export class Cell {
  alive: boolean;
  x: number;
  y: number;
  constructor(alive: boolean, x: number, y: number) {
    this.alive = alive;
    this.x = x;
    this.y = y;
  }

  static createCell(alive: boolean, x: number, y: number): Cell {
    return new Cell(alive, x, y);
  }
}
