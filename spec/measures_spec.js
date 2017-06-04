'use strict';

const Measures = require('../src/measures');

describe('measures', () => {
  const lowerBound = 1;
  const measureName = 'measure name';
  const upperBound = 5;
  var measures;

  beforeEach(() => {
    measures = new Measures(lowerBound, upperBound);
  });

  describe('construction', () => {
    it('requires lowerBound', () => {
      expect(() => new Measures()).toThrowError('lowerBound is required');
    });

    it('requires upperBound', () => {
      expect(() => new Measures(lowerBound) ).toThrowError('upperBound is required');
    });
  });

  describe('adding measure', () => {
    it('requires name', () => {
      expect( () => measures.add() ).toThrowError('measure name required');
    });

    it('requires value', () => {
      expect( () => measures.add(measureName) ).toThrowError('measure value required');
    });

    it('requires value to be in range', () => {
      expect( () => measures.add(measureName, lowerBound - 1) ).toThrowError('measure value must be larger than lowerBound');
      expect( () => measures.add(measureName, upperBound + 1) ).toThrowError('measure value must be less than upperBound');
    });
  });

  describe('#draw', () => {
    describe('when there are two points', () => {
      it('calls draw with points', () => {
        const fakeDraw = jasmine.createSpyObj('fakeDraw', ['draw'])

        measures.add(measureName, upperBound);
        measures.add(measureName, upperBound);
        measures.draw('points', fakeDraw);

        expect(fakeDraw.draw).toHaveBeenCalledWith({x: 50, y: 0, name: measureName, angle: 0});
        expect(fakeDraw.draw).toHaveBeenCalledWith({x: 50, y: 0, name: measureName, angle: 90});
      });
    });

    describe('when there are three points', () => {
      it('calls draw with points', () => {
        const fakeDraw = jasmine.createSpyObj('fakeDraw', ['draw'])

        measures.add(measureName, upperBound);
        measures.add(measureName, upperBound);
        measures.add(measureName, upperBound);
        measures.draw('points', fakeDraw);

        expect(fakeDraw.draw).toHaveBeenCalledWith({x: 50, y: 0, name: measureName, angle: -60});
        expect(fakeDraw.draw).toHaveBeenCalledWith({x: 50, y: 0, name: measureName, angle: 60});
        expect(fakeDraw.draw).toHaveBeenCalledWith({x: 50, y: 0, name: measureName, angle: 180});
      });
    });

    it('calls draw with lines', () => {
      const fakeDraw = jasmine.createSpyObj('fakeDraw', ['draw'])

      measures.add(measureName, upperBound);
      measures.draw('lines', fakeDraw);

      expect(fakeDraw.draw).toHaveBeenCalledWith({d: 'M 50 0 L 50 100', angle: 0});
    });
  });
});
