import { Cell } from './Cell';

// export const gridGenerator = (x: number): [Array<Cell>, number] => {
//   let res: Array<Cell> = [];
//   for (let i = 0; i <= x - 1; i++) {
//     for (let j = 0; j <= x - 1; j++) {
//       if ((i + j) % 2 === 0) {
//         i % 2 === 0
//           ? res.push(Cell.createCell(true, i, j))
//           : res.push(Cell.createCell(false, i, j));
//       } else {
//         j % 2 != 0
//           ? res.push(Cell.createCell(false, i, j))
//           : res.push(Cell.createCell(true, i, j));
//       }
//     }
//   }
//   return [res, x];
// };

export const gridGenerator = (x: number): [Array<Cell>, number] => {
  let res: Array<Cell> = [
    Cell.createCell(false, 0, 0),
    Cell.createCell(false, 0, 1),
    Cell.createCell(false, 0, 2),
    Cell.createCell(false, 0, 3),
    Cell.createCell(false, 0, 4),
    Cell.createCell(false, 1, 0),
    Cell.createCell(false, 1, 1),
    Cell.createCell(true, 1, 2),
    Cell.createCell(false, 1, 3),
    Cell.createCell(false, 1, 4),
    Cell.createCell(false, 2, 0),
    Cell.createCell(false, 2, 1),
    Cell.createCell(true, 2, 2),
    Cell.createCell(false, 2, 3),
    Cell.createCell(false, 2, 4),
    Cell.createCell(false, 3, 0),
    Cell.createCell(false, 3, 1),
    Cell.createCell(true, 3, 2),
    Cell.createCell(false, 3, 3),
    Cell.createCell(false, 3, 4),
    Cell.createCell(false, 4, 0),
    Cell.createCell(false, 4, 1),
    Cell.createCell(false, 4, 2),
    Cell.createCell(false, 4, 3),
    Cell.createCell(false, 4, 4),
  ];

  return [res, x];
};

// let res: Array<Cell> = [
//   Cell.createCell(false, 0, 0),
//   Cell.createCell(false, 0, 1),
//   Cell.createCell(false, 0, 2),
//   Cell.createCell(false, 0, 3),
//   Cell.createCell(false, 0, 4),
//   Cell.createCell(false, 1, 0),
//   Cell.createCell(false, 1, 1),
//   Cell.createCell(false, 1, 2),
//   Cell.createCell(false, 1, 3),
//   Cell.createCell(false, 1, 4),
//   Cell.createCell(false, 2, 0),
//   Cell.createCell(true, 2, 1),
//   Cell.createCell(true, 2, 2),
//   Cell.createCell(true, 2, 3),
//   Cell.createCell(false, 2, 4),
//   Cell.createCell(false, 3, 0),
//   Cell.createCell(false, 3, 1),
//   Cell.createCell(false, 3, 2),
//   Cell.createCell(false, 3, 3),
//   Cell.createCell(false, 3, 4),
//   Cell.createCell(false, 4, 0),
//   Cell.createCell(false, 4, 1),
//   Cell.createCell(false, 4, 2),
//   Cell.createCell(false, 4, 3),
//   Cell.createCell(false, 4, 4),
// ];
