export class RotatingShape {
  #grid;

  constructor(value) {
    this.#grid = value.split("\n").map((a) => a.trim().split(""));
  }

  rotateRight() {
    const rotatedRight = this.#grid
      .map((_, i) => this.#grid.map((row) => row[i]).reverse())
      .map((row) => row.join("") + "\n")
      .join("");
    return new RotatingShape(rotatedRight.slice(0, rotatedRight.length - 1));
  }

  rotateLeft() {
    const rotatedLeft = this.#grid
      .map((_, i) => this.#grid.map((row) => row[row.length - 1 - i]))
      .map((row) => row.join("") + "\n")
      .join("");
    return new RotatingShape(rotatedLeft.slice(0, rotatedLeft.length - 1));
  }

  toString() {
    return this.#grid.map((row) => row.join("") + "\n").join("");
  }
}
