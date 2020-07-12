import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Direction from '../../models/Direction';
import CellCoordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';
import Grid from '../grid/Grid';
import SwipeDirectionControl from '../controls/SwipeDirectionControl';

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

function addWithOverflow(coordinate: number, increment: number) {
  const resultWithoutOverflow = coordinate + increment;
  if (resultWithoutOverflow < 0) {
    return Dimension.gridCellsPerAxis - 1;
  }
  return resultWithoutOverflow % Dimension.gridCellsPerAxis;
}

function moveHeadByOne(
  coordinate: CellCoordinate,
  direction: Direction
): CellCoordinate {
  if (direction === Direction.UP) {
    return {
      row: addWithOverflow(coordinate.row, -1),
      column: coordinate.column,
    };
  }
  if (direction === Direction.DOWN) {
    return {
      row: addWithOverflow(coordinate.row, 1),
      column: coordinate.column,
    };
  }
  if (direction === Direction.LEFT) {
    return {
      row: coordinate.row,
      column: addWithOverflow(coordinate.column, -1),
    };
  }
  if (direction === Direction.RIGHT) {
    return {
      row: coordinate.row,
      column: addWithOverflow(coordinate.column, 1),
    };
  }
  throw new Error(`unknown moveByOne direction ${direction}`);
}

export default function Game() {
  const [headCoordinate, setHeadCoordinate] = useState({
    row: 4,
    column: 4,
  });
  const [headDirection, setHeadDirection] = useState(Direction.UP);
  useEffect(() => {
    const timeoutId = setTimeout(
      () => setHeadCoordinate(moveHeadByOne(headCoordinate, headDirection)),
      500
    );
    return () => clearInterval(timeoutId);
  }, [headDirection, headCoordinate]);

  return (
    <View style={styles.game}>
      <Grid headCoordinate={headCoordinate} />
      <SwipeDirectionControl
        updateDirection={(direction) => setHeadDirection(direction)}
      />
    </View>
  );
}
