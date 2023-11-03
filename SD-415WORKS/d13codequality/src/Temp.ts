export function convertTemp(FahrTemp: number): number {
    let celsTemp: number = ((FahrTemp - 32) * 5) / 9;
    return celsTemp;
  }
