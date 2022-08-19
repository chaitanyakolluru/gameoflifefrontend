import { Cell } from './Cell';
import { gridExpander } from './gridExpander';

describe('grid expander', () => {
  it('should exist', () => {
    expect(gridExpander([Cell.createCell(true, 0, 0)], 2)).toBeDefined;
  });

  it('should expand a grid if some of the cells are missing from it - size 2', () => {
    expect(gridExpander([Cell.createCell(true, 0, 0)], 2)).toStrictEqual([
      Cell.createCell(true, 0, 0),
      Cell.createCell(false, 0, 1),
      Cell.createCell(false, 1, 0),
      Cell.createCell(false, 1, 1),
    ]);
  });

  it('should expand a grid and add dead cells if some are missing from it - size 5', () => {
    expect(
      gridExpander(
        [
          Cell.createCell(true, 0, 1),
          Cell.createCell(true, 0, 2),
          Cell.createCell(true, 0, 3),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 4),
          Cell.createCell(true, 2, 0),
          Cell.createCell(true, 2, 4),
          Cell.createCell(true, 3, 0),
          Cell.createCell(true, 3, 4),
          Cell.createCell(true, 4, 1),
          Cell.createCell(true, 4, 2),
          Cell.createCell(true, 4, 3),
        ],
        5
      )
    ).toStrictEqual([
      Cell.createCell(false, 0, 0),
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 0, 2),
      Cell.createCell(true, 0, 3),
      Cell.createCell(false, 0, 4),
      Cell.createCell(true, 1, 0),
      Cell.createCell(false, 1, 1),
      Cell.createCell(false, 1, 2),
      Cell.createCell(false, 1, 3),
      Cell.createCell(true, 1, 4),
      Cell.createCell(true, 2, 0),
      Cell.createCell(false, 2, 1),
      Cell.createCell(false, 2, 2),
      Cell.createCell(false, 2, 3),
      Cell.createCell(true, 2, 4),
      Cell.createCell(true, 3, 0),
      Cell.createCell(false, 3, 1),
      Cell.createCell(false, 3, 2),
      Cell.createCell(false, 3, 3),
      Cell.createCell(true, 3, 4),
      Cell.createCell(false, 4, 0),
      Cell.createCell(true, 4, 1),
      Cell.createCell(true, 4, 2),
      Cell.createCell(true, 4, 3),
      Cell.createCell(false, 4, 4),
    ]);
  });

  it('should"nt change in any way a grid that"s already expanded - size 5', () => {
    expect(
      gridExpander(
        [
          Cell.createCell(false, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(true, 0, 2),
          Cell.createCell(true, 0, 3),
          Cell.createCell(false, 0, 4),
          Cell.createCell(true, 1, 0),
          Cell.createCell(false, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 1, 3),
          Cell.createCell(true, 1, 4),
          Cell.createCell(true, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
          Cell.createCell(false, 2, 3),
          Cell.createCell(true, 2, 4),
          Cell.createCell(true, 3, 0),
          Cell.createCell(false, 3, 1),
          Cell.createCell(false, 3, 2),
          Cell.createCell(false, 3, 3),
          Cell.createCell(true, 3, 4),
          Cell.createCell(false, 4, 0),
          Cell.createCell(true, 4, 1),
          Cell.createCell(true, 4, 2),
          Cell.createCell(true, 4, 3),
          Cell.createCell(false, 4, 4),
        ],
        5
      )
    ).toStrictEqual([
      Cell.createCell(false, 0, 0),
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 0, 2),
      Cell.createCell(true, 0, 3),
      Cell.createCell(false, 0, 4),
      Cell.createCell(true, 1, 0),
      Cell.createCell(false, 1, 1),
      Cell.createCell(false, 1, 2),
      Cell.createCell(false, 1, 3),
      Cell.createCell(true, 1, 4),
      Cell.createCell(true, 2, 0),
      Cell.createCell(false, 2, 1),
      Cell.createCell(false, 2, 2),
      Cell.createCell(false, 2, 3),
      Cell.createCell(true, 2, 4),
      Cell.createCell(true, 3, 0),
      Cell.createCell(false, 3, 1),
      Cell.createCell(false, 3, 2),
      Cell.createCell(false, 3, 3),
      Cell.createCell(true, 3, 4),
      Cell.createCell(false, 4, 0),
      Cell.createCell(true, 4, 1),
      Cell.createCell(true, 4, 2),
      Cell.createCell(true, 4, 3),
      Cell.createCell(false, 4, 4),
    ]);
  });
});
