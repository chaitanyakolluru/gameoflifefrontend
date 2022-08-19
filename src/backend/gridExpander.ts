import { Cell } from './Cell';

export const gridExpander = (
  grid: Array<Cell>,
  gridSize: number
): Array<Cell> => {
  let i = 0;
  let j = 0;
  let res: Array<Cell> = [];

  while (i <= gridSize - 1) {
    while (j <= gridSize - 1) {
      let tempRes = grid.filter((c) => {
        return c.x === i && c.y === j;
      });

      if (tempRes.length === 0) {
        res.push(Cell.createCell(false, i, j));
      } else {
        res.push(tempRes[0]);
      }
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return res;
};
