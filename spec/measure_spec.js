const Measure = require('../src/measure');

describe('Measure', () => {
  const stepSize = 10;
  
  describe('#point', () => {
    it('returns measure with value of five', () => {
      const center = {width: 100, height: 100};
      const measure = new Measure(center, 'measure name', 5, stepSize);

      const point = measure.point();
      expect(point.x).toBeCloseTo(50, 0);
      expect(point.y).toBeCloseTo(0, 0);
      expect(point.name).toEqual('measure name');
    });

    it('returns measure with value of one', () => {
      const center = {width: 100, height: 100};
      const measure = new Measure(center, 'measure name', 1, stepSize);

      const point = measure.point();
      expect(point.x).toBeCloseTo(50, 0);
      expect(point.y).toBeCloseTo(40, 0);
      expect(point.name).toEqual('measure name');
    });
  });

  describe('#line', () => {
    it('returns measure with value of five', () => {
      const center = {width: 100, height: 100};
      const measure = new Measure(center, 'measure name', 5, stepSize);

      expect(measure.line()).toEqual([{type: 'M', x:50, y: 0}, {type: 'L', x:50, y: 100}]);
    });
  });
});
