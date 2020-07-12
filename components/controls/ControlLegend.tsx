import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  legend: {
    flex: 1,
  },
});

export default function ControlLegend() {
  return <View style={styles.legend} />;
}
