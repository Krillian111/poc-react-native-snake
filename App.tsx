import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/grid/Grid';

export default function App() {
  return <Grid numberOfRows={8} numberOfColumns={8} />;
}
