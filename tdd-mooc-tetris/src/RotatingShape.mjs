export class RotatingShape {
  grid;

  constructor(value) {
    this.grid = value.split("\n").map((a) => a.trim().split(""));
  }

  rotateRight() {
    this.grid = this.grid.map((val, i) =>
      this.grid.map((row) => row[i]).reverse()
    );
    return this.toString();
  }

  toString() {
    return this.grid.map((row) => row.join("") + "\n").join("");
  }
}
