import React from 'react';
import { StyleSheet, View } from 'react-native';
import CellCoordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  headCoordinate: CellCoordinate;
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
  empty: {},
});

export default function Cell({
  rowIndex,
  columnIndex,
  headCoordinate,
}: CellProps) {
  const isHeadCell =
    rowIndex === headCoordinate.row && columnIndex === headCoordinate.column;
  const style = StyleSheet.compose(
    styles.cell,
    isHeadCell ? styles.snakeHead : styles.empty
  );
  return <View style={style} />;
}
