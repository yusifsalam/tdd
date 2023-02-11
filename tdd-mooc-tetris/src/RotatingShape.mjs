export class RotatingShape {
  value;

  constructor(value) {
    this.value = value
      .split("\n")
      .map((a) => a.trim())
      .join("\n")
      .concat("\n");
  }

  toString() {
    return this.value.toString();
  }
}
