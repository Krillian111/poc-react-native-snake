import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import { Direction, Coordinate } from './Types';
import { Dimensions } from './Constants';

export default function Grid() {
  const [headCoordinate, setHeadCoordinate] = useState({ row: 4, column: 4 });
  const [headDirection] = useState(Direction.UP);
  useEffect(() => {
    setTimeout(
      () =>
        setHeadCoordinate(
          createNewHeadCoordinate(headCoordinate, headDirection)
        ),
      500
    );
  });
  const rows = [...new Array(Dimensions.gridSize).keys()];
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

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
});

function createNewHeadCoordinate(
  coordinate: Coordinate,
  direction: Direction
): Coordinate {
  const maxValue = Dimensions.gridSize - 1;
  switch (direction) {
    case Direction.UP:
      return {
        row: addWithOverflow(coordinate.row, -1),
        column: coordinate.column,
      };
    case Direction.DOWN:
      return {
        row: addWithOverflow(coordinate.row, 1),
        column: coordinate.column,
      };
    case Direction.LEFT:
      return {
        row: coordinate.row,
        column: addWithOverflow(coordinate.column, -1),
      };
    case Direction.RIGHT:
      return {
        row: coordinate.row,
        column: addWithOverflow(coordinate.column, 1),
      };
  }
}

function addWithOverflow(coordinate: number, increment: number) {
  const resultWithoutOverflow = coordinate + increment;
  if (resultWithoutOverflow < 0) {
    return Dimensions.gridSize - 1;
  } else {
    return resultWithoutOverflow % Dimensions.gridSize;
  }
}
