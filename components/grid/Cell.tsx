import React from 'react';
import { StyleSheet, View } from 'react-native';
import Coordinate from '../../models/Coordinate';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  headCoordinate: Coordinate;
}

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

const styles = StyleSheet.create({
  cell: {
    width: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
  snakeHead: {
    backgroundColor: '#f00',
  },
  empty: {},
});
