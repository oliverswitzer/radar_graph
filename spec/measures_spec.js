'use strict';

const Measures = require('../src/measures');

describe('measures', () => {
  it("requires measure name", () => {
    const lowerBound = 1;
    const upperBound = 5;
    const measures = new Measures(lowerBound, upperBound);

    expect( () => measures.add() ).toThrowError('measure name required');
  })
});
