class TransformDrawer {
  constructor(box, container, drawers) {
    this._box = box;
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
    this._drawers = drawers;
  }

  draw(measure) {
    const wrapper = document.createElementNS(this._svgNameSpace, 'g');
    this._container.appendChild(wrapper);

    this._drawers.forEach((d) => d.draw(wrapper, measure));

    wrapper.setAttribute('transform', `rotate(${measure.angle}, ${this._box.center.x}, ${this._box.center.y})`);
   }
}

module.exports = TransformDrawer;
