const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('feedback', 3);
measures.add('courage', 4);
measures.add('communication', 2.5);
measures.add('respect', 5);
measures.add('simplicity', 1);

const c = document.getElementById('svg-container');

class PointsDrawer {
  constructor(container) {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  draw(measure) {
    const container = this._container;
    const wrapper = document.createElementNS(this._svgNameSpace, 'g');
    container.appendChild(wrapper);

    this._makeCircle(wrapper, measure);
    this._makeLabel(wrapper, measure);
    wrapper.setAttribute('transform', `rotate(${measure.angle}, 50, 50)`);
   }

   _makeCircle(container, measure) {
     const circle = document.createElementNS(this._svgNameSpace, 'circle');
     circle.setAttribute('cx', measure.x);
     circle.setAttribute('cy', measure.y);
     circle.setAttribute('data-name', measure.name);
     circle.setAttribute('r', 2);
     circle.setAttribute('stroke', '#ff0000');
     container.appendChild(circle);
   }

   _makeLabel(container, measure) {
     const text = document.createElementNS(this._svgNameSpace, 'text');
     const circleElement = document.querySelector(`[data-name='${measure.name}']`);
     const rect = circleElement.getBoundingClientRect();
     text.setAttribute('x', measure.x);
     text.setAttribute('y', measure.y);
     text.setAttribute('fill', '#ff0000');
     text.setAttribute('transform', `rotate(${measure.angle * -1}, ${rect.left}, ${rect.top})`);
     text.textContent = measure.name;
     container.appendChild(text);
   }
}

class LinesDrawer {
  constructor(container) {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  draw(line) {
    const path = document.createElementNS(this._svgNameSpace, 'path');
    path.setAttribute('d', line.d);
    path.setAttribute('stroke', 'grey');
    path.setAttribute('transform', `rotate(${line.angle}, 50, 50)`);
    this._container.appendChild(path);
   }
}

measures.draw('points', new PointsDrawer(c));
measures.draw('lines', new LinesDrawer(c));
