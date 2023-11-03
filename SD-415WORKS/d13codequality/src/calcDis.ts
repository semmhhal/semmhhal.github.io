export function calcDis(x1: number, y1: number, x2: number, y2: number): number {
    const d = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    return Math.sqrt(d);
  }