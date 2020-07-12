import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Direction from '../../models/Direction';
import Dimension from '../../constants/Dimension';

interface ScreenCoordinate {
  x: number;
  y: number;
}

function computeSwipeDirection(
  start: ScreenCoordinate,
  end: ScreenCoordinate
): Direction | undefined {
  const diffX = end.x - start.x;
  const diffY = end.y - start.y;
  const { minSwipeLength } = Dimension;
  const isSwipeLongEnough =
    Math.abs(diffX) > minSwipeLength || Math.abs(diffY) > minSwipeLength;
  const isXAxisPrimaryDirection = Math.abs(diffX) > Math.abs(diffY);
  const isXAxisSwipe = isSwipeLongEnough && isXAxisPrimaryDirection;
  const isYAxisSwipe = isSwipeLongEnough && !isXAxisPrimaryDirection;
  if (isXAxisSwipe) {
    return diffX > 0 ? Direction.RIGHT : Direction.LEFT;
  }
  if (isYAxisSwipe) {
    return diffY > 0 ? Direction.DOWN : Direction.UP;
  }
  return undefined;
}

const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: '#30b6ff',
    flexBasis: Dimension.swipeControlAxisLength,
    flexShrink: 1,
    flexGrow: 1,
  },
});

interface SwipeDirectionControlProps {
  updateDirection: (direction: Direction) => void;
}

/** using negotiation methods from  https://reactnative.dev/docs/gesture-responder-system */
export default function SwipeDirectionControl({
  updateDirection,
}: SwipeDirectionControlProps) {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  return (
    <View
      style={styles.swipeContainer}
      onStartShouldSetResponder={() => true}
      onResponderGrant={({ nativeEvent: { locationX, locationY } }) => {
        setStartPosition({ x: locationX, y: locationY });
      }}
      onResponderTerminationRequest={() => true}
      onResponderRelease={({ nativeEvent: { locationX, locationY } }) => {
        const newDirection = computeSwipeDirection(startPosition, {
          x: locationX,
          y: locationY,
        });
        if (newDirection) {
          updateDirection(newDirection);
        }
      }}
    />
  );
}
