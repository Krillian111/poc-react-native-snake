import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';

interface RowProps {
  numberOfColumns: number;
}

export default function Row({ numberOfColumns }: RowProps) {
  const columns = [...new Array(numberOfColumns).keys()];
  return (
    <View style={styles.rows}>
      {columns.map(() => (
        <Cell />
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
