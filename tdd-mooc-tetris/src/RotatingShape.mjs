export class RotatingShape {
  #grid;

  constructor(value) {
    this.#grid = value.split("\n").map((a) => a.trim().split(""));
  }

  rotateRight() {
    const rotatedRight = this.#grid
      .map((_, i) => this.#grid.map((row) => row[i]).reverse())
      .map((row) => row.join("") + "\n")
      .join("")
      .slice(0, this.#grid.length * (this.#grid.length + 1) - 1);
    return new RotatingShape(rotatedRight);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  toString() {
    return this.#grid.map((row) => row.join("") + "\n").join("");
  }
}
