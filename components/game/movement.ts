import CellCoordinate from '../../models/Coordinate';
import Direction from '../../models/Direction';
import GameSettings from '../../constants/GameSettings';

function addWithOverflow(coordinate: number, increment: number) {
  const resultWithoutOverflow = coordinate + increment;
  if (resultWithoutOverflow < 0) {
    return GameSettings.numberOfSquaresAlongAxis - 1;
  }
  return resultWithoutOverflow % GameSettings.numberOfSquaresAlongAxis;
}

function moveCellByOne(
  cell: CellCoordinate,
  direction: Direction
): CellCoordinate {
  if (direction === Direction.UP) {
    return {
      row: addWithOverflow(cell.row, -1),
      column: cell.column,
    };
  }
  if (direction === Direction.DOWN) {
    return {
      row: addWithOverflow(cell.row, 1),
      column: cell.column,
    };
  }
  if (direction === Direction.LEFT) {
    return {
      row: cell.row,
      column: addWithOverflow(cell.column, -1),
    };
  }
  if (direction === Direction.RIGHT) {
    return {
      row: cell.row,
      column: addWithOverflow(cell.column, 1),
    };
  }
  throw new Error(`unknown moveByOne direction ${direction}`);
}

export default function moveSnakeByOne(
  snake: Array<CellCoordinate>,
  direction: Direction
): Array<CellCoordinate> {
  const head = snake[snake.length - 1];
  const newHead = moveCellByOne(head, direction);
  return [...snake.slice(1), newHead];
}
