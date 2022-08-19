import { Cell } from '../Cell';
import { neighbors } from '../neighbors';

export const twoOrThree = (grid: Array<Cell>, cell: Cell): boolean => {
  let noOfAliveCells = neighbors(grid, cell).filter((neh: Cell) => {
    return neh.alive;
  }).length;

  return noOfAliveCells === 2 || noOfAliveCells === 3;
};
