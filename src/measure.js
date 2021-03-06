
class Measure {
  constructor(boundingBox, name, value, size) {
    this._box = boundingBox;
    this._center = this._calculateCenter(boundingBox);
    this._name = name;
    this._value = value;
    this._stepSize = size;
  }

  point() {
    return { x: this._center.x, y: this._calculateHeight(), name: this._name };
  }

  line() {
    const x = this._box.width / 2;
    return [{type: 'M', x: x, y: 0}, {type: 'L', x: x, y: this._box.height}];
  }

  value() {
    return this._value;
  }
  
  _calculateCenter(box) {
    return {x: box.width / 2, y: box.height / 2}
  }

  _calculateHeight() {
    // 10 is the height of each marker in the range
    return (this._box.height / 2) - (this._stepSize * this._value);
  }
}

module.exports = Measure;
