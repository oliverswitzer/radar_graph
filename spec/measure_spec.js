const Measure = require('../src/measure');

describe('Measure', () => {
  describe('#point', () => {
    it('returns measure with value of five', () => {
      const center = {width: 100, height: 100};
      const measure = new Measure(center, 'measure name', 5);

      expect(measure.point()).toEqual({x: 50, y: 0, name: 'measure name'});
    });

    it('returns measure with value of one', () => {
      const center = {width: 100, height: 100};
      const measure = new Measure(center, 'measure name', 1);

      expect(measure.point()).toEqual({x: 50, y: 40, name: 'measure name'});
    });
  });
});
