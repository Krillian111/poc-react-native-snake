import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import Dimension from '../../constants/Dimension';
import CellCoordinate from '../../models/Coordinate';

interface RowProps {
  rowIndex: number;
  headCoordinate: CellCoordinate;
}

const styles = StyleSheet.create({
  rows: {
    flexBasis: Dimension.squareAxisLength,
    flexDirection: 'row',
  },
});

export default function Row({ rowIndex, headCoordinate }: RowProps) {
  const columns = [...new Array(Dimension.gridCellsPerAxis).keys()];
  return (
    <View style={styles.rows}>
      {columns.map((columnIndex) => (
        <Cell
          headCoordinate={headCoordinate}
          key={`cell-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </View>
  );
}
