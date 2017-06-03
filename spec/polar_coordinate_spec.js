const PolarCoordinate = require('../src/polar_coordinate');
describe('PolarCoordinate', () => {
  it('r of zero and theta of zero', () => {
    const polar = new PolarCoordinate(0, 0);

    expect(polar.toCartesian()).toEqual({x: 0, y: 0});
  });

  it('r of one and theta of zero', () => {
    const polar = new PolarCoordinate(1, 0);

    expect(polar.toCartesian()).toEqual({x: 1, y: 0});
  });

  it('r of one and theta of 90', () => {
    const polar = new PolarCoordinate(30, 1.58);

    expect(polar.toCartesian().x).toBeCloseTo(0, 0);
    expect(polar.toCartesian().y).toBeCloseTo(30, 0);
  });
});
