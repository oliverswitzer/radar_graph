const Measures = require('./measures');
var measures = new Measures(1, 5);
measures.add('example', 2);

class Drawer {
  draw(measure) { console.log(measure) }
}

measures.draw(new Drawer());
