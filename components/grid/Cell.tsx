import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Cell() {
  return <View style={styles.cell} />;
}

const styles = StyleSheet.create({
  cell: {
    width: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
});
