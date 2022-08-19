import { Cell } from '../Cell';
import { neighbors } from '../neighbors';

export const comesBackAlive = (grid: Array<Cell>, cell: Cell): boolean => {
  if (cell.alive) return true;
  return (
    neighbors(grid, cell).filter((neh: Cell) => {
      return neh.alive;
    }).length === 3
  );
};
