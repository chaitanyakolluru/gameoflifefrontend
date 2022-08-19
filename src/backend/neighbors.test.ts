import { Cell } from './Cell';
import { neighbors } from './neighbors';

describe('neighbors function', () => {
  it('should exist and take in grid and a cell as args', () => {
    expect(
      neighbors([Cell.createCell(true, 0, 0)], Cell.createCell(true, 0, 0))
    ).toBeDefined;
  });

  it('should return an array of none of more cells', () => {
    expect(
      neighbors([Cell.createCell(true, 0, 0)], Cell.createCell(true, 0, 0))
    ).toBeInstanceOf(Array);
  });

  it('should return all cells as neighbors when the grid size is 2x2', () => {
    expect(
      neighbors(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toStrictEqual([
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 1, 0),
      Cell.createCell(true, 1, 1),
    ]);
  });

  it('should return (0,1), (1,0),(1,1) when the input cell is (0,0) and grid is 3x3', () => {
    expect(
      neighbors(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(true, 0, 2),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
          Cell.createCell(true, 1, 2),
          Cell.createCell(true, 2, 0),
          Cell.createCell(true, 2, 1),
          Cell.createCell(true, 2, 2),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toStrictEqual([
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 1, 0),
      Cell.createCell(true, 1, 1),
    ]);
  });
});
