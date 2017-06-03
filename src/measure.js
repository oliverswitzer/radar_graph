class Measure {
  constructor(name, value) {
    this._name = name;
    this._value = value;
  }

  render() {
    return { x: 0, y: this._value, name: this._name };
  }
}

module.exports = Measure;
