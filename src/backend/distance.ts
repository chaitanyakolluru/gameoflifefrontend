import { Cell } from './Cell';
export const distanceFrom = (a: Cell, b: Cell): number => {
  return Math.trunc(Math.hypot(b.x - a.x, b.y - a.y));
};
