class Measure {
  constructor(boundingBox, name, value) {
    this._box = boundingBox;
    this._center = this._calculateCenter(boundingBox);
    this._name = name;
    this._value = value;
  }

  render() {
    return { x: this._center.x, y: this._calculateHeight(), name: this._name };
  }

  _calculateCenter(box) {
    return {x: box.width / 2, y: box.height / 2}
  }

  _calculateHeight() {
    // 10 is the height of each marker in the range
    return (this._box.height / 2) - (10 * this._value);
  }
}

module.exports = Measure;
