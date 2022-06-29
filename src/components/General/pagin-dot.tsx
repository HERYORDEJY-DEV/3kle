import React from 'react';
import {View, ViewStyle} from 'react-native';
import Animated, {
  StyleProps,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components';

interface PaginationDotProps {
  dotIndex: number;
  activeDotIndex: Animated.SharedValue<number>;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  borderColor?: string;
  activeBorderColor?: string;
  borderWidth?: number;
  dotStyle?: StyleProps;
  size?: number;
  activeSize?: number;
}

export default function PaginationDot(props: PaginationDotProps) {
  const theme = useTheme();
  const {dotIndex, activeDotIndex} = props;

  const pagDotStyle = useAnimatedStyle(() => {
    const isActive = dotIndex === +activeDotIndex.value;
    return {
      //
      backgroundColor: withTiming(
        isActive
          ? props.activeBackgroundColor ?? theme.colors.barPurple
          : props.backgroundColor ?? '#C9C9CA',
        {duration: 100},
      ),
      height: isActive ? props.activeSize ?? 10 : props.size ?? 10,
      width: isActive ? props.activeSize ?? 10 : props.size ?? 10,
      borderRadius: isActive ? props.activeSize ?? 10 : props.size ?? 10,
      borderWidth: props.borderWidth ?? 0,
      borderColor: withTiming(
        isActive
          ? props.activeBorderColor ?? theme.colors.barPurple
          : props.borderColor ?? '#C9C9CA',
        {duration: 100},
      ),

      marginHorizontal: 2,
      ...props.dotStyle,
    };
  });

  return (
    <Animated.View
      key={`${dotIndex}`}
      style={{
        ...pagDotStyle,
      }}
    />
  );
}
