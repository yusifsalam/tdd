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

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
