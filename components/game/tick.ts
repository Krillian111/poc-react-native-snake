import moveSnakeByOne from './movement';
import GameSettings from '../../constants/GameSettings';
import { generateNewFoodSpawn, isSnakeEatingThisTurn } from './food';
import CellCoordinate from '../../models/Coordinate';
import Direction from '../../models/Direction';

export default function handleGameTick(
  headDirection: Direction,
  snake: Array<CellCoordinate>,
  setSnake: (snake: Array<CellCoordinate>) => void,
  snakeHasEatenLastTurn: boolean,
  setSnakeHasEaten: (hasEaten: boolean) => void,
  food: CellCoordinate,
  setFood: (newFood: CellCoordinate) => void
) {
  const timeoutId = setTimeout(() => {
    setSnake(moveSnakeByOne(snake, headDirection, snakeHasEatenLastTurn));
    if (snakeHasEatenLastTurn) {
      setSnakeHasEaten(false);
    }
    if (isSnakeEatingThisTurn(snake, food)) {
      setSnakeHasEaten(true);
      setFood(generateNewFoodSpawn(food, snake));
    }
  }, GameSettings.updateInterval);
  return () => clearInterval(timeoutId);
}
