import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  barChart: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  barChartLabel: {
    marginVertical: 5,
  },
});

export const StyledChartBar = styled(View)<{height?: number}>`
  background: ${p => p.theme.colors.backgroundPurple};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 6px;
  height: ${p => p.height ?? 100}px;
  align-self: flex-end;
`;
