const Measures = require('./measures');
var box = { width: 200, height: 200, center: { x: 100, y: 100 } }
var measures = new Measures(1, 5, box, 20);
measures.add('feedback', 3);
measures.add('courage', 4);
measures.add('communication', 2.5);
measures.add('respect', 5);
measures.add('simplicity', 1);

const c = document.getElementById('svg-container');
class TransformDrawer {
  constructor(container, drawers) {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
    this._drawers = drawers;
  }

  draw(measure) {
    const wrapper = document.createElementNS(this._svgNameSpace, 'g');
    this._container.appendChild(wrapper);

    this._drawers.forEach((d) => d.draw(wrapper, measure));

    wrapper.setAttribute('transform', `rotate(${measure.angle}, ${box.center.x}, ${box.center.y})`);
   }
}

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
    path.setAttribute('transform', `rotate(${line.angle}, ${box.center.x}, ${box.center.y})`);
    this._container.appendChild(path);
   }
}



   //
  //  _drawPathBetweenPoints() {
  //    const p = document.createElementNS(this._svgNameSpace, 'path');
  //    p.setAttribute('d', this._path());
  //    p.setAttribute('fill', 'rgba(255, 0, 0, .60)');
  //    c.appendChild(p);
  //  }
   //
  //  _path() {
  //    const bounding = document.getElementById('svg-container').getBoundingClientRect();
  //    const listOfCircles = this._getCircles();
  //    return listOfCircles.map((circle, i) => {
  //      const rect = circle.getBoundingClientRect();
  //      const radius = parseInt(circle.getAttribute('r'));
  //      return `${this._getCommand(i)} ${rect.left - bounding.left + radius} ${rect.top - bounding.top + radius}`
  //    }).join(' ');
  //  }
   //
  //   _getCommand(i) {
  //    if (i === 0) {
  //      return 'M';
  //    } else {
  //      return 'L';
  //    }
  //  }
   //
  //  _getCircles() {
  //    const circleElements = document.getElementsByTagName('circle');
  //    let array = []
  //    for (var i = 0; i < circleElements.length; i++) {
  //      array.push(circleElements[i]);
  //    }
  //    return array;
  //  }
measures.draw('lines', new LinesDrawer(c));
measures.draw('points', new TransformDrawer(c, [new PointsDrawer(), new LabelsDrawer()]));
