import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Cell } from './backend/Cell';
import { gridExpander } from './backend/gridExpander';
import { gridGenerator } from './backend/gridGenerator';
import { processGrid } from './backend/processGrid';
import MyGrid from './MyGrid';

const awesomeThingsHappen = (
  grid: Array<Cell>,
  n: number,
  set = (c: Cell[]) => {}
): void => {
  const gr2 = gridExpander(processGrid(grid, n), n);
  set(gr2);
};

const App: React.FC<{ gr: Cell[]; n: number }> = ({ gr, n }) => {
  const [cellsState, setCellsState] = useState<Cell[]>([]);

  useEffect(() => {
    setInterval(() => awesomeThingsHappen(gr, n, setCellsState), 2000);
  }, []);

  return (
    <div>
      <h1>Game of Life:</h1>
      <MyGrid size={0} cells={cellsState} />
    </div>
  );
};

let [gr, n] = gridGenerator(5);
createRoot(document.getElementById('root')!).render(<App gr={gr} n={n} />);

// const [gr, n] = gridGenerator(5); // gridGenerator assigns a cell as being alive if the sum of x and y cooridnates equals an even number and dead if they sum upto an odd number
// console.log('Initial grid: ', gr);
// awesomeThingsHappen(gr, n);
