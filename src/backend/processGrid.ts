import { Cell } from './Cell';
import { gridExpander } from './gridExpander';
import {
  fewerThanTwo,
  twoOrThree,
  moreThanThree,
  comesBackAlive,
} from './rules';

export const processGrid = (grid: Array<Cell>, x: number): Array<Cell> => {
  let res: Array<Cell> = [];

  res = gridExpander(grid, x).filter((c: Cell) => {
    return (
      fewerThanTwo(grid, c) &&
      twoOrThree(grid, c) &&
      moreThanThree(grid, c) &&
      comesBackAlive(grid, c)
    );
  });

  res.map((c: Cell) => {
    c.alive = true;
  });

  return res;
};
