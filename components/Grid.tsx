import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Grid() {
  const rows = [...new Array(8).keys()];
  const columns = [...new Array(8).keys()];
  return (
    <View style={styles.grid}>
      {rows.map(() => (
        <View style={styles.rows}>
          {columns.map(() => (
            <View style={styles.cell} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    heigh: 60,
    width: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
});
