const Measures = require('./measures');
const TransformDrawer = require('./transform_drawer');
const PointsDrawer = require('./points_drawer');
const LabelsDrawer = require('./labels_drawer');
const LinesDrawer = require('./lines_drawer');
const PointsPathDrawer = require('./points_path_drawer');

var box = { width: 300, height: 300, center: { x: 150, y: 150 } }
var measures = new Measures(1, 5, box, 20);
measures.add('feedback', 3);
measures.add('courage', 4);
measures.add('communication', 2.5);
measures.add('respect', 5);
measures.add('simplicity', 1);

const c = document.getElementById('svg-container');

measures.draw('lines', new LinesDrawer(box, c));
measures.draw('points', new TransformDrawer(box, c, [new PointsDrawer(), new LabelsDrawer()]));
(new PointsPathDrawer()).draw(c);
