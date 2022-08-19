import React from 'react';
import { createRoot } from 'react-dom/client';
import { awesomeThingsHappen } from './backend';
import { Cell } from './backend/Cell';
import { gridGenerator } from './backend/gridGenerator';

const App: React.FC<{ c: Cell[] }> = ({ c }) => {
  const ListItem: React.FC<{ c: Cell }> = ({ c }) => {
    return <li>{c.toString()}</li>;
  };

  const list = c.map((cell) => <ListItem key={cell.toString()} c={cell} />);

  return (
    <div>
      <h1>Game of Life:</h1>
      <ol>{list}</ol>
    </div>
  );
};

const [gr, n] = gridGenerator(5);
createRoot(document.getElementById('root')!).render(
  <App c={awesomeThingsHappen(gr, n)} />
);

console.log(awesomeThingsHappen(gr, n));
