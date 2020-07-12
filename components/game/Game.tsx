import React, { useState, useEffect } from 'react';
import Direction from '../../models/Direction';
import CellCoordinate from '../../models/Coordinate';
import Dimension from '../../constants/Dimension';
import Grid from '../grid/Grid';
import Rotate from '../controls/DebugRotate';
import SwipeDirectionControl from '../controls/SwipeDirectionControl';

function addWithOverflow(coordinate: number, increment: number) {
  const resultWithoutOverflow = coordinate + increment;
  if (resultWithoutOverflow < 0) {
    return Dimension.gridSize - 1;
  }
  return resultWithoutOverflow % Dimension.gridSize;
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
    <>
      <Rotate
        currentDirection={headDirection}
        updateDirection={(direction) => setHeadDirection(direction)}
      />
      <SwipeDirectionControl
        updateDirection={(direction) => setHeadDirection(direction)}
      >
        <Grid headCoordinate={headCoordinate} />
      </SwipeDirectionControl>
    </>
  );
}
