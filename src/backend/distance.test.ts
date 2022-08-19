import { Cell } from './Cell';
import { distanceFrom } from './distance';

describe('distance function', () => {
  it('should exist', () => {
    expect(
      distanceFrom(Cell.createCell(true, 0, 0), Cell.createCell(false, 0, 1))
    ).toBeDefined;
  });

  it('should give distance between two points (0,0) and (0,1) as 1', () => {
    expect(
      distanceFrom(Cell.createCell(true, 0, 0), Cell.createCell(false, 0, 1))
    ).toBe(1);
  });

  it('should give distance between two points (0,0) and (0,3) as 3', () => {
    expect(
      distanceFrom(Cell.createCell(true, 0, 0), Cell.createCell(false, 0, 3))
    ).toBe(3);
  });

  it('should give distance between two points (0,2) and (2,0) as 2', () => {
    expect(
      distanceFrom(Cell.createCell(true, 0, 2), Cell.createCell(false, 2, 0))
    ).toBe(2);
  });

  it('should give distance between two points (1,5) and (4,5) as 3', () => {
    expect(
      distanceFrom(Cell.createCell(true, 1, 5), Cell.createCell(false, 4, 5))
    ).toBe(3);
  });

  it('should give distance between two points (4,5) and (1,5) as 3', () => {
    expect(
      distanceFrom(Cell.createCell(true, 4, 5), Cell.createCell(false, 1, 5))
    ).toBe(3);
  });
});
