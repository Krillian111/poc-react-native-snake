import React from 'react';
import { View, StyleSheet } from 'react-native';
import Direction from '../../models/Direction';

interface RotateProps {
  currentDirection: Direction;
  updateDirection: (direction: Direction) => void;
}

function rotate(
  currentDirection: Direction,
) {
  if(currentDirection === Direction.UP) {
    return Direction.RIGHT;
  }
  if(currentDirection === Direction.RIGHT) {
    return Direction.DOWN;
  }
  if(currentDirection === Direction.DOWN) {
    return Direction.LEFT;
  }
  if(currentDirection === Direction.LEFT){
    return Direction.UP;
  }
  throw new Error(`unknown rotate direction ${currentDirection}`);
}

const styles = StyleSheet.create({
  rotate: {
    backgroundColor: '#0f0',
    width: 60,
    height: 60,
  },
});


export default function DebugRotate({
  currentDirection,
  updateDirection,
}: RotateProps) {
  return (
    <View
      style={styles.rotate}
      onTouchStart={() => updateDirection(rotate(currentDirection))}
    />
  );
}



