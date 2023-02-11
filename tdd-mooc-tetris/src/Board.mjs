export class Board {
  width;
  height;
  grid;
  history;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    this.history = [this.grid];
  }

  hasFalling() {
    const allButBottomRowHaveFalling = this.grid
      .slice(0, 2)
      .flatMap((a) => a)
      .some((e) => e !== ".");
    const bottomRowHasFalling =
      this.history[this.history.length - 2][this.grid.length - 1].join("") !==
      this.grid[this.grid.length - 1].join("");
    return allButBottomRowHaveFalling || bottomRowHasFalling;
  }

  drop(block) {
    if (this.grid[0][1] !== ".") throw new Error("already falling");
    this.grid[0][1] = block.color;
  }

  tick() {
    for (let i = this.grid.length - 1; i >= 0; i--) {
      for (let j = 0; j < this.grid[i].length; j++) {
        let cell = this.grid[i][j];
        if (cell !== "." && i < this.grid.length - 1) {
          this.grid[i + 1][j] = this.grid[i][j];
          this.grid[i][j] = ".";
        }
      }
    }
    this.history.push(structuredClone(this.grid));
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
