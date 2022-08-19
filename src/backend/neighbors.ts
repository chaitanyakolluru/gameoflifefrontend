import { Cell } from './Cell';
import { distanceFrom } from './distance';

export const neighbors = (grid: Array<Cell>, cell: Cell): Array<Cell> => {
  return grid.filter((c: Cell) => {
    const dist = distanceFrom(c, cell);
    return dist < 2 && dist > 0;
  });
};
