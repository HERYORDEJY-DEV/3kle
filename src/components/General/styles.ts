import styled from 'styled-components';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

export const StyledText = styled(Text)<{
  family?: string;
  color?: string;
  size?: string;
  textAlign?: string;
  height?: number;
}>`
  font-size: ${p =>
    p.size ? p.theme.fontSize.custom(Number(p.size)) : p.theme.fontSize.s};
  color: ${p => p.color ?? p.theme.colors.textGrey};
  font-family: ${p => p.family ?? p.theme.fontFamily.regular};
  line-height: ${p => p.height ?? '15'}px;
  text-align: ${p => p.textAlign ?? 'left'};
`;

export const StyledContainerLayout = styled(SafeAreaView)`
  background-color: ${p => p.theme.colors.white};
  flex: 1;
  height: 100%;
`;

export const StyledContentLayout = styled(Animated.ScrollView)<{
  backgroundColor?: string;
}>`
  background-color: ${p => p.backgroundColor ?? 'transparent'};
  padding: 10px 0;
  height: 100%;
  flex: 1;
`;

export const FlexRow = styled(View)<{
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
}>`
  flex-direction: row;
  align-items: ${p => p.alignItems ?? 'center'};
  justify-content: ${p => p.justifyContent ?? 'space-between'};
  background-color: ${p => p.backgroundColor ?? 'transparent'};
`;
