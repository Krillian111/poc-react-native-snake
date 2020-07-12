import React, { useState, useEffect } from 'react';
import Direction from '../../models/Direction';
import Coordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';
import Grid from '../grid/Grid';
import Rotate from '../controls/Rotate';

function addWithOverflow(coordinate: number, increment: number) {
  const resultWithoutOverflow = coordinate + increment;
  if (resultWithoutOverflow < 0) {
    return Dimension.gridSize - 1;
  }
  return resultWithoutOverflow % Dimension.gridSize;
}

function moveHeadByOne(
  coordinate: Coordinate,
  direction: Direction
): Coordinate {
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
  throw new Error(`unknown direction ${direction}`);
}

export default function Game() {
  const [headCoordinate, updateHeadCoordinate] = useState({
    row: 4,
    column: 4,
  });
  const [headDirection, updateHeadDirection] = useState(Direction.UP);
  useEffect(() => {
    setTimeout(
      () => updateHeadCoordinate(moveHeadByOne(headCoordinate, headDirection)),
      500
    );
  });

  return (
    <>
      <Rotate
        currentDirection={headDirection}
        updateDirection={(direction: Direction) => {
          updateHeadDirection(direction);
        }}
      />
      <Grid headCoordinate={headCoordinate} />
    </>
  );
}
