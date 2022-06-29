import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from 'styled-components';
import {VictoryPie} from 'victory-native';

interface Props {
  data: Array<{fill: string; x: string; y: number}>;
}

export default function AggressiveChartItem({data}: Props) {
  const theme = useTheme();
  return (
    <View style={{alignItems: 'center'}}>
      <VictoryPie
        height={250}
        innerRadius={30}
        radius={70}
        style={{
          data: {fill: ({datum}) => datum.fill},

          labels: {
            fontSize: 12,
            fill: theme.colors.textBlue,
            fontFamily: theme.fontFamily.semiBold,
            flex: 1,
            flexWrap: 'wrap',
            flexGrow: 0,
          },
        }}
        data={data}
      />
    </View>
  );
}
