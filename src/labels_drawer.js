class LabelsDrawer {
  constructor() {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  draw(container, measure) {
    const text = document.createElementNS(this._svgNameSpace, 'text');
    const circleElement = document.querySelector(`[data-name='${measure.name}']`);
    const rect = circleElement.getBoundingClientRect();

    text.setAttribute('x', measure.x);
    text.setAttribute('y', measure.y);
    text.setAttribute('fill', '#000000');
    text.setAttribute('transform', `rotate(${measure.angle * -1}, ${rect.left}, ${rect.top})`);
    text.textContent = `${measure.name} (${measure.value})`;
    container.appendChild(text);
  }
}

module.exports = LabelsDrawer;
