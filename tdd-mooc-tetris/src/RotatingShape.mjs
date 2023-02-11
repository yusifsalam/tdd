export class RotatingShape {
  grid;

  constructor(value) {
    this.grid = value.split("\n").map((a) => a.trim().split(""));
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
