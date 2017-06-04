// Requires points to have been drawn
class PointsPathDrawer {
  constructor(container) {
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  draw(container) {
   const path = document.createElementNS(this._svgNameSpace, 'path');
   path.setAttribute('d', this._buildPath());
   path.setAttribute('id', 'points-path');
   path.setAttribute('fill', 'rgba(255, 0, 0, .60)');

   var groups = document.getElementsByTagName('g');
   container.insertBefore(path, groups[0]);
 }

 _buildPath() {
   const bounding = document.getElementById('svg-container').getBoundingClientRect();
   const listOfCircles = this._getCircles();;
   return listOfCircles.map((circle, i) => {
     const rect = circle.getBoundingClientRect();
     const radius = parseInt(circle.getAttribute('r'));
     return `${this._getCommand(i)} ${rect.left - bounding.left + radius} ${rect.top - bounding.top + radius}`
   }).join(' ');
 }

  _getCommand(i) {
   if (i === 0) {
     return 'M';
   } else {
     return 'L';
   }
 }

 _getCircles() {
   const circleElements = document.getElementsByTagName('circle');
   let array = []
   for (var i = 0; i < circleElements.length; i++) {
     array.push(circleElements[i]);
   }
   return array;
 }
}

module.exports = PointsPathDrawer;
