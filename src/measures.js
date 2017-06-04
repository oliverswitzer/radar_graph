const Measure = require('./measure');
class Measures {
    constructor(lowerBound, upperBound) {
      this._bounds = new Bounds(lowerBound, upperBound);
      this._box = { width: 100, height: 100 }
      this._measures = [];
    }

    add(name, value) {
      this._validateAdd(name, value);
      this._measures.push(new Measure(this._box, name, value));
    }

    draw(type, drawer) {
      this._measures.forEach((measure, i ) => {
        if (type === 'points') {
          var point = measure.point();
          point.angle = this._calculateAngle(i);
          drawer.draw(point);
        } else if (type === 'lines') {
          drawer.draw(linePresenter(measure.line()));
        }
      });
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

    _calculateAngle(index) {
      const angleDiff = 360 / this._measures.length;
      if (this._measures.length > 2 ) {
        return (index * angleDiff) - (angleDiff / 2);
      } else {
        return Math.max(0, (index * angleDiff) - (angleDiff / 2));
      }
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
