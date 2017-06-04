const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('example', 2);
measures.add('example', 2);

const c = document.getElementById('svg-container');

class PointsDrawer {
  constructor(container) {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  draw(measure) {
    this._makeCircle(measure);
    this._makeLabel(measure);
   }

   _makeCircle(measure) {
     const circle = document.createElementNS(this._svgNameSpace, 'circle');
     circle.setAttribute('cx', measure.x);
     circle.setAttribute('cy', measure.y);
     circle.setAttribute('r', 2);
     circle.setAttribute('stroke', '#ff0000');
     circle.setAttribute('transform', `rotate(${measure.angle}, 50, 50)`);
     this._container.appendChild(circle);
   }

   _makeLabel(measure) {
     const text = document.createElementNS(this._svgNameSpace, 'text');
     text.setAttribute('x', measure.x + 10);
     text.setAttribute('y', measure.y);
     text.setAttribute('fill', '#ff0000');
     text.textContent = measure.name;
     this._container.appendChild(text);
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
    this._container.appendChild(path);
   }
}

measures.draw('points', new PointsDrawer(c));
measures.draw('lines', new LinesDrawer(c));
