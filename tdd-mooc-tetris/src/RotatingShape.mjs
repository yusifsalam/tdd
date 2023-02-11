export class RotatingShape {
  grid;

  constructor(value) {
    this.grid = value.split("\n").map((a) => a.trim().split(""));
  }

  rotateRight() {
    const clone = structuredClone(this.grid);
    this.grid[0][0] = clone[2][0];
    this.grid[0][1] = clone[1][0];
    this.grid[0][2] = clone[0][0];

    this.grid[1][0] = clone[2][1];
    this.grid[1][1] = clone[1][1];
    this.grid[1][2] = clone[0][1];

    this.grid[2][0] = clone[2][2];
    this.grid[2][1] = clone[1][2];
    this.grid[2][2] = clone[0][2];
    return this.toString();
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
