export class Board {
  width;
  height;
  grid;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
