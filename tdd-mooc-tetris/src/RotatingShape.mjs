export class RotatingShape {
  grid;

  constructor(value) {
    this.grid = value.split("\n").map((a) => a.trim().split(""));
  }

  rotateRight() {
    const rotatedRight = this.grid.map((val, i) =>
      this.grid.map((row) => row[i]).reverse()
    );
    return rotatedRight.map((row) => row.join("") + "\n").join("");
  }

  rotateLeft() {
    const clone = structuredClone(this.grid);
    clone[0][0] = this.grid[0][2];
    clone[0][1] = this.grid[1][2];
    clone[0][2] = this.grid[2][2];
    clone[1][0] = this.grid[0][1];
    clone[1][1] = this.grid[1][1];
    clone[1][2] = this.grid[2][1];
    clone[2][0] = this.grid[0][0];
    clone[2][1] = this.grid[1][0];
    clone[2][2] = this.grid[2][0];
    return clone.map((row) => row.join("") + "\n").join("");
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
