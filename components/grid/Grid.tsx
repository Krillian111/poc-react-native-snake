import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import Dimension from '../../constants/Dimension';
import CellCoordinate from '../../models/Coordinate';
import GameSettings from '../../constants/GameSettings';

interface GridProps {
  snake: Array<CellCoordinate>;
  food: CellCoordinate;
}

const styles = StyleSheet.create({
  grid: {
    flex: 2,
    flexBasis: Dimension.gridAxisLength,
  },
});

export default function Grid({ snake, food }: GridProps) {
  const rows = [...new Array(GameSettings.numberOfSquaresAlongAxis).keys()];
  return (
    <View style={styles.grid}>
      {rows.map((rowIndex) => (
        <Row
          snake={snake}
          food={food}
          key={`row-${rowIndex}`}
          rowIndex={rowIndex}
        />
      ))}
    </View>
  );
}
