const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('example', 2);

const container = document.getElementById('svg-container');
const svgNameSpace = 'http://www.w3.org/2000/svg';

class Drawer {
  constructor(container) {
    this._container = container;
  }

  draw(measure) {
    this._makeCircle(measure);
    this._makeLabel(measure);
   }

   _makeCircle(measure) {
     const circle = document.createElementNS(svgNameSpace, 'circle');
     circle.setAttribute('cx', measure.x);
     circle.setAttribute('cy', measure.y);
     circle.setAttribute('r', 2);
     circle.setAttribute('stroke', '#ff0000');
     container.appendChild(circle);
   }

   _makeLabel(measure) {
     const text = document.createElementNS(svgNameSpace, 'text');
     text.setAttribute('x', measure.x + 0);
     text.setAttribute('y', measure.y + 100);
     text.setAttribute('fill', '#ff0000');
     text.textContent = measure.name;
     container.appendChild(text);
   }
}

measures.draw(new Drawer());
