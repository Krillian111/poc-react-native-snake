import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import Dimension from '../../constants/Dimension';
import CellCoordinate from '../../models/Coordinate';
import GameSettings from '../../constants/GameSettings';

interface RowProps {
  rowIndex: number;
  snake: Array<CellCoordinate>;
}

const styles = StyleSheet.create({
  rows: {
    flexBasis: Dimension.squareAxisLength,
    flexDirection: 'row',
  },
});

export default function Row({ rowIndex, snake }: RowProps) {
  const columns = [...new Array(GameSettings.numberOfSquaresAlongAxis).keys()];
  return (
    <View style={styles.rows}>
      {columns.map((columnIndex) => (
        <Cell
          snake={snake}
          key={`cell-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </View>
  );
}
