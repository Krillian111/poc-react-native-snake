import React, { useState, useEffect } from 'react';
import Direction from '../../models/Direction';
import Coordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';
import Grid from '../grid/Grid';

export default function Game() {
  const [headCoordinate, setHeadCoordinate] = useState({ row: 4, column: 4 });
  const [headDirection] = useState(Direction.UP);
  useEffect(() => {
    setTimeout(
      () => setHeadCoordinate(moveHeadByOne(headCoordinate, headDirection)),
      500
    );
  });
  return <Grid headCoordinate={headCoordinate} />;
}

function moveHeadByOne(
  coordinate: Coordinate,
  direction: Direction
): Coordinate {
  const maxValue = Dimension.gridSize - 1;
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
    return Dimension.gridSize - 1;
  } else {
    return resultWithoutOverflow % Dimension.gridSize;
  }
}
