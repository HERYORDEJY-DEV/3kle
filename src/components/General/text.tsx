import React from 'react';

import {Text, TextProps} from 'react-native';
import {StyledText} from './styles';
import {useTheme} from 'styled-components';

interface Props extends TextProps {
  family?: string;
  color?: string;
  size?: string;
  height?: number;
  textAlign?: string;
}

export default function CustomText({family = 'regular', ...props}: Props) {
  const theme = useTheme();

  const fontFamily = (family: string) => {
    switch (family) {
      case 'regular':
        return theme.fontFamily.regular;

      case 'light':
        return theme.fontFamily.light;

      case 'medium':
        return theme.fontFamily.medium;

      case 'semiBold':
        return theme.fontFamily.semiBold;

      case 'light':
        return theme.fontFamily.light;

      case 'bold':
        return theme.fontFamily.bold;

      default:
        break;
    }
  };

  return (
    <StyledText
      numberOfLines={2}
      {...props}
      size={props.size}
      family={fontFamily(family ?? 'regular')}
      height={props.height}
    >
      {props.children}
    </StyledText>
  );
}
