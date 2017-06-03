const Measure = require('../src/measure');

describe('Measure', () => {
  it('renders measure', () => {
    const measure = new Measure('measure name', 5);

    expect(measure.render()).toEqual({x: 0, y: 5, name: 'measure name'});
  });
});
