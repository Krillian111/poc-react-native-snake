import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import Dimension from '../../constants/Dimension';
import CellCoordinate from '../../models/Coordinate';

interface GridProps {
  headCoordinate: CellCoordinate;
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
});


export default function Grid({ headCoordinate }: GridProps) {
  const rows = [...new Array(Dimension.gridSize).keys()];
  return (
    <View style={styles.grid}>
      {rows.map((rowIndex) => (
        <Row
          headCoordinate={headCoordinate}
          key={`row-${rowIndex}`}
          rowIndex={rowIndex}
        />
      ))}
    </View>
  );
}

