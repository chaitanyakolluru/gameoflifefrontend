import { Cell } from './Cell';

export const gridGenerator = (x: number): [Array<Cell>, number] => {
  let res: Array<Cell> = [];
  for (let i = 0; i <= x - 1; i++) {
    for (let j = 0; j <= x - 1; j++) {
      if ((i + j) % 2 === 0) {
        res.push(Cell.createCell(true, i, j));
      } else {
        res.push(Cell.createCell(false, i, j));
      }
    }
  }
  return [res, x];
};
