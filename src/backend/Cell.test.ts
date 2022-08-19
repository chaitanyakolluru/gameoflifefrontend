import { Cell } from './Cell';

describe('cells', () => {
  it('should have a cell object with alive, x and y props', () => {
    const cc = Cell.createCell(true, 0, 0);
    expect(cc).toBeDefined();
    expect(cc.alive).toBe(true);
    expect(cc.x).toBe(0);
    expect(cc.y).toBe(0);
  });
});
