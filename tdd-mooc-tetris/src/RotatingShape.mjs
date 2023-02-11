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
    const rotatedLeft = this.grid.map((val, i) =>
      this.grid.map((row) => row[row.length - 1 - i])
    );
    return rotatedLeft.map((row) => row.join("") + "\n").join("");
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
