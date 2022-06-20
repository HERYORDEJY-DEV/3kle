import styled from 'styled-components';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const StyledText = styled(Text)<{
  family?: string;
  color?: string;
  size?: string;
}>`
  font-size: ${p =>
    p.size ? p.theme.fontSize.custom(Number(p.size)) : p.theme.fontSize.s};
  color: ${p => p.color ?? p.theme.colors.text};
  font-family: ${p => p.family ?? p.theme.fontFamily.regular};
`;

export const StyledContainerLayout = styled(SafeAreaView)`
  background-color: ${p => p.theme.colors.background};
  flex: 1;
  height: 100%;
`;

export const StyledContentLayout = styled(ScrollView)`
  background-color: ${p => p.theme.colors.background};
  padding: 10px 0;
  height: 100%;
  flex: 1;
`;
