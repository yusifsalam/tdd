export class RotatingShape {
  value;

  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value
      .split("\n")
      .map((a) => a.trim())
      .join("\n")
      .concat("\n");
  }
}
