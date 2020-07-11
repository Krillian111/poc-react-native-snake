import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';

interface GridProps {
  numberOfRows: number;
  numberOfColumns: number;
}

export default function Grid({ numberOfRows, numberOfColumns }: GridProps) {
  const rows = [...new Array(numberOfRows).keys()];
  return (
    <View style={styles.grid}>
      {rows.map(() => (
        <Row numberOfColumns={numberOfColumns} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
});
