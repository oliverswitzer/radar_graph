const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('example', 2);

const container = document.getElementById('svg-container');

class Drawer {
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
     container.appendChild(circle);
   }

   _makeLabel(measure) {
     const text = document.createElementNS(this._svgNameSpace, 'text');
     text.setAttribute('x', measure.x + 20);
     text.setAttribute('y', measure.y);
     text.setAttribute('fill', '#ff0000');
     text.textContent = measure.name;
     container.appendChild(text);
   }
}

measures.draw(new Drawer());
