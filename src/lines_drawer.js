class LinesDrawer {
  constructor(box, container) {
    this._box = box;
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  draw(line) {
    const path = document.createElementNS(this._svgNameSpace, 'path');
    path.setAttribute('d', line.d);
    path.setAttribute('stroke', '#dedede');
    path.setAttribute('transform', `rotate(${line.angle}, ${this._box.center.x}, ${this._box.center.y})`);
    this._container.appendChild(path);
   }
}

module.exports = LinesDrawer;
