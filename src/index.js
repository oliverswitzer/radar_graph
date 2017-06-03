const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('example', 2);

function Drawer() {
}

Drawer.prototype.draw = function(measure) { console.log(measure) }

measures.draw(new Drawer());
