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

  it('requires measure name', () => {
    expect( () => measures.add() ).toThrowError('measure name required');
  });

  it('requires measure value', () => {
    expect( () => measures.add('measure name') ).toThrowError('measure value required');
  });

  it('requires measure value to be in range', () => {
    expect( () => measures.add('measure name', 0) ).toThrowError('measure value must be larger than lowerBound');
    expect( () => measures.add('measure name', 6) ).toThrowError('measure value must be less than upperBound');
  });
});
