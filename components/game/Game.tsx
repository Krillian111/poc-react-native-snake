import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Direction from '../../models/Direction';
import Grid from '../grid/Grid';
import SwipeDirectionControl from '../controls/SwipeDirectionControl';
import handleGameTick from './tick';

const styles = StyleSheet.create({
  game: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default function Game() {
  const [snake, setSnake] = useState([
    { row: 4, column: 6 },
    { row: 4, column: 5 },
    { row: 4, column: 4 },
  ]);
  const [headDirection, setHeadDirection] = useState(Direction.UP);
  const [snakeHasEaten, setSnakeHasEaten] = useState(false);
  const [food, setFood] = useState({ row: 2, column: 2 });
  useEffect(
    () =>
      handleGameTick(
        headDirection,
        snake,
        setSnake,
        snakeHasEaten,
        setSnakeHasEaten,
        food,
        setFood
      ),
    [headDirection, snake, snakeHasEaten, food]
  );

  return (
    <View style={styles.game}>
      <Grid snake={snake} food={food} />
      <SwipeDirectionControl
        currentDirection={headDirection}
        updateDirection={(direction) => setHeadDirection(direction)}
      />
    </View>
  );
}
