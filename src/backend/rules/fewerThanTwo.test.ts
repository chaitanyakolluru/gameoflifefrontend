import { fewerThanTwo } from './fewerThanTwo';
import { Cell } from '../Cell';

describe('fewer than 2 neighbors and should take in a grid and a cell as inputs', () => {
  it('should exist', () => {
    expect(
      fewerThanTwo([Cell.createCell(true, 0, 0)], Cell.createCell(true, 0, 0))
    ).toBeDefined;
  });

  it('should say living when cell is (0,0) and it is a 2x2 grid and all are alive', () => {
    expect(
      fewerThanTwo(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(true, 1, 0),
          Cell.createCell(true, 1, 1),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toBe(true);
  });

  it('should say died when cell is (0,0) and it is a 3x3 grid and all except it are dead', () => {
    expect(
      fewerThanTwo(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(false, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(false, 1, 0),
          Cell.createCell(false, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toBe(false);
  });

  it('should say living when cell is (0,0) and it is a 3x3 grid and (0,1) and (1,0) are alive and all the rest are dead', () => {
    expect(
      fewerThanTwo(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(true, 1, 0),
          Cell.createCell(false, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toBe(true);
  });

  it('should say died for aliveness when cell is (0,0) and it is a 3x3 grid and (0,1) is alive and all the rest are dead', () => {
    expect(
      fewerThanTwo(
        [
          Cell.createCell(true, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(false, 1, 0),
          Cell.createCell(false, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 0, 0)
      )
    ).toBe(false);
  });

  it('should say living when cell is (1,1) and cells (0,1)(1,0)(2,1)(1,2) are alive and the rest dead', () => {
    expect(
      fewerThanTwo(
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
    ).toBe(true);
  });

  it('should say living when cell is (1,1) and cells (0,1)(1,0)(2,1) are alive and the rest dead', () => {
    expect(
      fewerThanTwo(
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

  it('should say living when cell is (1,1) and cells (0,1)(1,0) are alive and the rest dead', () => {
    expect(
      fewerThanTwo(
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

  it('should say died for aliveness when cell is (1,1) and cells (0,1) are alive and the rest dead', () => {
    expect(
      fewerThanTwo(
        [
          Cell.createCell(false, 0, 0),
          Cell.createCell(true, 0, 1),
          Cell.createCell(false, 0, 2),
          Cell.createCell(false, 1, 0),
          Cell.createCell(true, 1, 1),
          Cell.createCell(false, 1, 2),
          Cell.createCell(false, 2, 0),
          Cell.createCell(false, 2, 1),
          Cell.createCell(false, 2, 2),
        ],
        Cell.createCell(true, 1, 1)
      )
    ).toBe(false);
  });
});
