import CellCoordinate, { equals } from '../../models/Coordinate';
import GameSettings from '../../constants/GameSettings';

function createArrayWithAllCells(): Array<CellCoordinate> {
  const allCells = [];
  for (let row = 0; row < GameSettings.numberOfSquaresAlongAxis; row += 1) {
    for (
      let column = 0;
      column < GameSettings.numberOfSquaresAlongAxis;
      column += 1
    ) {
      allCells.push({ row, column });
    }
  }
  return allCells;
}

const allCells = createArrayWithAllCells();

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function generateNewFoodSpawn(
  food: CellCoordinate,
  snake: Array<CellCoordinate>
): CellCoordinate {
  const forbiddenCells = [...snake, food];
  const potentialFoodCells = allCells.filter(
    (cell) =>
      !forbiddenCells.some((forbiddenCell) => equals(cell, forbiddenCell))
  );
  const newRandomFoodCellIndex = getRandomInt(potentialFoodCells.length);
  return potentialFoodCells[newRandomFoodCellIndex];
}

export function isSnakeEatingThisTurn(
  snake: Array<CellCoordinate>,
  food: CellCoordinate
) {
  const head = snake[snake.length - 1];
  return equals(head, food);
}
