const Measure = require('./measure');
class Measures {
    constructor(lowerBound, upperBound) {
      this._bounds = new Bounds(lowerBound, upperBound);
      this._box = { width: 100, height: 100 }
    }

    add(name, value) {
      this._validateAdd(name, value);
      this._measure = new Measure(this._box, name, value);
    }

    draw(type, drawer) {
      if (type === 'points') {
        var point = this._measure.point(1.58);
        point.angle = 90;
        drawer.draw(point);
      } else if (type === 'lines') {
        drawer.draw(linePresenter(this._measure.line()));
      }
    }

    _validateAdd(name, value) {
      if (name == null) {
        throw new Error('measure name required');
      }
      this._validateValue(value);
    }

    _validateValue(value) {
      if (value == null) {
        throw new Error('measure value required');
      }
      this._bounds.inRange(value);
    }
}

function linePresenter(lines) {
  return {d: lines.map((l) => `${l.type} ${l.x} ${l.y}`).join(' ')};
}

class Bounds {
  constructor(lowerBound, upperBound) {
    if (lowerBound == null) {
      throw new Error('lowerBound is required');
    }
    if (upperBound == null) {
      throw new Error('upperBound is required');
    }

    this._lowerBound = lowerBound;
    this._upperBound = upperBound;
  }

  inRange(value) {
    if (value < this._lowerBound) {
      throw new Error('measure value must be larger than lowerBound');
    }
    if (value > this._upperBound) {
      throw new Error('measure value must be less than upperBound');
    }
  }
}

module.exports = Measures;
