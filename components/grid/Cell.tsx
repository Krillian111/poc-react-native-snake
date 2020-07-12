import React from 'react';
import { StyleSheet, View } from 'react-native';
import CellCoordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  snake: Array<CellCoordinate>;
}

const styles = StyleSheet.create({
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: Dimension.squareAxisLength,
    borderWidth: 1,
    borderColor: '#000',
  },
  snakeHead: {
    backgroundColor: '#f00',
  },
  body: {
    backgroundColor: '#0f0',
  },
});

function equals(cell1: CellCoordinate, cell2: CellCoordinate) {
  return cell1.row === cell2.row && cell1.column === cell2.column;
}

export default function Cell({ rowIndex, columnIndex, snake }: CellProps) {
  const cellCoordinates = { row: rowIndex, column: columnIndex };
  const head = snake[snake.length - 1];
  const isHeadCell = equals(cellCoordinates, head);
  const isBodyCell = snake
    .slice(0, snake.length - 1)
    .some((bodyPart) => equals(cellCoordinates, bodyPart));
  const cellStyle: Array<any> = [styles.cell];
  if (isBodyCell) {
    cellStyle.push(styles.body);
  }
  if (isHeadCell) {
    cellStyle.push(styles.snakeHead);
  }
  return <View style={cellStyle} />;
}
