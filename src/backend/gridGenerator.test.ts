import { gridGenerator } from './gridGenerator';
import { Cell } from './Cell';

describe('grid', () => {
  it('should exist and take an input number', () => {
    expect(gridGenerator(1)).toBeDefined;
  });

  it('should take in an input as a seed and generate a grid with cells whose x and y coordinates sum upto an even number', () => {
    expect(gridGenerator(2)).toStrictEqual([
      [
        // 00 01 10 11
        Cell.createCell(true, 0, 0),
        Cell.createCell(false, 0, 1),
        Cell.createCell(false, 1, 0),
        Cell.createCell(true, 1, 1),
      ],
      2,
    ]);
  });

  it('should take in an input as a seed and generate a grid with cells whose x and y coordinates sum upto an even number', () => {
    expect(gridGenerator(5)).toStrictEqual([
      [
        // 00 01 10 11
        Cell.createCell(true, 0, 0),
        Cell.createCell(false, 0, 1),
        Cell.createCell(true, 0, 2),
        Cell.createCell(false, 0, 3),
        Cell.createCell(true, 0, 4),
        Cell.createCell(false, 1, 0),
        Cell.createCell(true, 1, 1),
        Cell.createCell(false, 1, 2),
        Cell.createCell(true, 1, 3),
        Cell.createCell(false, 1, 4),
        Cell.createCell(true, 2, 0),
        Cell.createCell(false, 2, 1),
        Cell.createCell(true, 2, 2),
        Cell.createCell(false, 2, 3),
        Cell.createCell(true, 2, 4),
        Cell.createCell(false, 3, 0),
        Cell.createCell(true, 3, 1),
        Cell.createCell(false, 3, 2),
        Cell.createCell(true, 3, 3),
        Cell.createCell(false, 3, 4),
        Cell.createCell(true, 4, 0),
        Cell.createCell(false, 4, 1),
        Cell.createCell(true, 4, 2),
        Cell.createCell(false, 4, 3),
        Cell.createCell(true, 4, 4),
      ],
      5,
    ]);
  });
});
