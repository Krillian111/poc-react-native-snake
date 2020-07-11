import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { Coordinate } from './Types';
import { Dimensions } from './Constants';

interface RowProps {
  rowIndex: number;
  headCoordinate: Coordinate;
}

export default function Row({ rowIndex, headCoordinate }: RowProps) {
  const columns = [...new Array(Dimensions.gridSize).keys()];
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

const styles = StyleSheet.create({
  rows: {
    height: 60,
    flexDirection: 'row',
  },
});
