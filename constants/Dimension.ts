import GameSettings from './GameSettings';

const squareSize = 40;

const Dimension = {
  minSwipeLength: 30,
  squareAxisLength: squareSize,
  swipeControlAxisLength: 200,
  gridAxisLength: squareSize * GameSettings.numberOfSquaresAlongAxis,
};

export default Dimension;
