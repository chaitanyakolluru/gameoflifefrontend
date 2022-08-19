import React from 'react';
import { createRoot } from 'react-dom/client';
import { awesomeThingsHappen } from './backend';
import { Cell } from './backend/Cell';
import { gridGenerator } from './backend/gridGenerator';
import MyGrid from './MyGrid';

const App: React.FC<{ cells: Cell[] }> = ({ cells }) => {
  // const ListItem: React.FC<{ c: Cell }> = ({ c }) => {
  //   return <li>{c.toString()}</li>;
  // };

  // const cells = c.map((cell) => <ListItem key={cell.toString()} c={cell} />);

  return (
    <div>
      <h1>Game of Life:</h1>
      {/* <ol>{cells}</ol> */}
      <MyGrid size={0} cells={cells} />
    </div>
  );
};

const [gr, n] = gridGenerator(5);
createRoot(document.getElementById('root')!).render(
  <App cells={awesomeThingsHappen(gr, n)} />
);

console.log(awesomeThingsHappen(gr, n));
