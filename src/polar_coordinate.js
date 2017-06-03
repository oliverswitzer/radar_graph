class PolarCoordinate {
  constructor(r, theta) {
    this._r = r;
    this._theta = theta;
  }

  toCartesian() {
    return {x: this._r * Math.cos(this._theta), y: this._r * Math.sin(this._theta)};
  }
}

module.exports = PolarCoordinate;
