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

  drop(block) {
    if (this.grid[0][1] !== ".") throw new Error("already falling");
    this.grid[0][1] = "X";
  }

  tick() {
    this.grid[0][1] = ".";
    this.grid[1][1] = "X";
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
