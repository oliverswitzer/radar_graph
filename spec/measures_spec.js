'use strict';

const Measures = require('../src/measures');

describe('measures', () => {
  const lowerBound = 1;
  const upperBound = 5;
  const measures = new Measures(lowerBound, upperBound);

  describe('construction', () => {
    it('requires lowerBound', () => {
      expect(() => new Measures()).toThrowError('lowerBound is required');
    });

    it('requires upperBound', () => {
      expect(() => new Measures(lowerBound) ).toThrowError('upperBound is required');
    });
  });

  describe('adding measure', () => {
    const measureName = 'measure name';

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
});
