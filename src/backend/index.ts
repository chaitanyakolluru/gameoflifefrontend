import { Cell } from './Cell';
import { gridGenerator } from './gridGenerator';
import { processGrid } from './processGrid';

export const awesomeThingsHappen = (grid: Array<Cell>, n: number): Cell[] => {
  return processGrid(grid, n);

  // setTimeout(() => {
  //   awesomeThingsHappen(gr2, n);
  // }, 10000);
};

const [gr, n] = gridGenerator(5); // gridGenerator assigns a cell as being alive if the sum of x and y cooridnates equals an even number and dead if they sum upto an odd number
console.log('Initial grid: ', gr);
awesomeThingsHappen(gr, n);
