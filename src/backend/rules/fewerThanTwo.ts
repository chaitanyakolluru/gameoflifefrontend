import { Cell } from '../Cell';
import { neighbors } from '../neighbors';

export const fewerThanTwo = (grid: Array<Cell>, cell: Cell): boolean => {
  return !(
    neighbors(grid, cell).filter((neh: Cell) => {
      return neh.alive;
    }).length < 2
  );
};
