export default interface CellCoordinate {
  row: number;
  column: number;
}

export function equals(cell1: CellCoordinate, cell2: CellCoordinate) {
  return cell1.row === cell2.row && cell1.column === cell2.column;
}
