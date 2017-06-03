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

  describe('querying drawable measures', () => {
    it('returns drawable measures', () => {
      const fakeDraw = jasmine.createSpyObj('fakeDraw', ['draw'])
      
      measures.add(measureName, upperBound);
      measures.draw(fakeDraw);

      expect(fakeDraw.draw).toHaveBeenCalledWith({x: 0, y: 5, name: measureName});
    });
  });
});
