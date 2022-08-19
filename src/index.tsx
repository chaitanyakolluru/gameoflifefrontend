import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { awesomeThingsHappen } from './backend';
import { Cell } from './backend/Cell';
import { gridGenerator } from './backend/gridGenerator';
import MyGrid from './MyGrid';

const App: React.FC<{ cells: Cell[] }> = ({ cells }) => {
  console.log('App rendeing');
  const [cellsState, SetCellsState] = useState<Cell[]>([]);

  setTimeout(() => {
    SetCellsState(awesomeThingsHappen(gr, n));
  }, 2000);

  return (
    <div>
      <h1>Game of Life:</h1>
      {/* <ol>{cells}</ol> */}
      <MyGrid size={0} cells={cellsState} />
    </div>
  );
};

const [gr, n] = gridGenerator(5);
createRoot(document.getElementById('root')!).render(
  <App cells={awesomeThingsHappen(gr, n)} />
);
