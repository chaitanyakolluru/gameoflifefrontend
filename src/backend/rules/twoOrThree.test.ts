import { twoOrThree } from './twoOrThree';
import { Cell } from '../Cell';

describe('two or three', () => {
  it('should exist', () => {
    expect(
      twoOrThree([Cell.createCell(true, 0, 0)], Cell.createCell(true, 0, 0))
    ).toBeDefined;
  });

  it('should say living when cell is (1,1) and cells (0,1)(1,0) are alive and the rest dead', () => {
    expect(
      twoOrThree(
        [
          Cell.createCell(false, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 1, 1)
      )
    ).toBe(true);
  });

  it('should say living when cell is (1,1) and cells (0,1)(1,0)(2,1) are alive and the rest dead', () => {
    expect(
      twoOrThree(
        [
          Cell.createCell(false, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(true, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 1, 1)
      )
    ).toBe(true);
  });

  it('should say died when cell is (1,1) and cells (0,1)(1,0)(2,1)(1,2) are alive and the rest dead', () => {
    expect(
      twoOrThree(
        [
          Cell.createCell(false, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
          Cell.createCell(true, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(true, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 1, 1)
      )
    ).toBe(false);
  });
});
