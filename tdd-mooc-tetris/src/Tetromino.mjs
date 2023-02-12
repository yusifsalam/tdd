import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  orientationIndex = 0;
  orientations = [];

  constructor(orientationIndex, orientations) {
    if (orientationIndex < 0) {
      this.orientationIndex = orientations.length - 1;
    } else if (orientationIndex > orientations.length - 1) {
      this.orientationIndex = 0;
    } else {
      this.orientationIndex = orientationIndex;
    }
    this.orientations = orientations;
  }

  rotateRight() {
    return new Tetromino(this.orientationIndex + 1, this.orientations);
  }

  rotateLeft() {
    return new Tetromino(this.orientationIndex - 1, this.orientations);
  }

  toString() {
    return this.orientations[this.orientationIndex].toString();
  }

  static T_SHAPE(initialOrientation = 0) {
    return new Tetromino(initialOrientation, [
      new RotatingShape(".T.\nTTT\n..."),
      new RotatingShape(".T.\n.TT\n.T."),
      new RotatingShape("...\nTTT\n.T."),
      new RotatingShape(".T.\nTT.\n.T."),
    ]);
  }
  static I_SHAPE(initialOrientation = 0) {
    return new Tetromino(initialOrientation, [
      new RotatingShape(".....\n.....\nIIII.\n.....\n....."),
      new RotatingShape("..I..\n..I..\n..I..\n..I..\n....."),
    ]);
  }
}
