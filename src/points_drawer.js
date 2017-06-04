class PointsDrawer {
  constructor() {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  draw(container, measure) {
    const circle = document.createElementNS(this._svgNameSpace, 'circle');
    circle.setAttribute('cx', measure.x);
    circle.setAttribute('cy', measure.y);
    circle.setAttribute('data-name', measure.name);
    circle.setAttribute('r', 2);
    circle.setAttribute('stroke', '#ff0000');
    container.appendChild(circle);
  }
}

module.exports = PointsDrawer;
