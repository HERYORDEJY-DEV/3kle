import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {VictoryBar, VictoryStack} from 'victory-native';
import responsive from '../../utils/responsive';
import {useTheme} from 'styled-components';
import {StyledChartBar} from './styles';

import {styles} from './styles';
import CustomText from '../General/text';

export default function BarChart() {
  const theme = useTheme();

  const renderBar = ({
    label,
    value,
    index,
  }: {
    label: number;
    value: number;
    index: number;
  }) => (
    <View style={{alignItems: 'center'}} key={label}>
      <TouchableOpacity
        style={{
          justifyContent: 'flex-end',
          height: 140,
        }}
      >
        <StyledChartBar
          style={{
            // ...StyleSheet.absoluteFillObject,
            height: value + 10,
            backgroundColor: '#EDD9FC',
            position: 'absolute',
            bottom: 0,
          }}
        />
        <StyledChartBar style={{height: value}} />
      </TouchableOpacity>
      <CustomText style={styles.barChartLabel} family="medium">
        {Number.isInteger(label) ? label : ''}
      </CustomText>
    </View>
  );

  return (
    <View style={styles.barChart}>
      {data.map((item, index) => renderBar({...item, index}))}
    </View>
  );
}

const data = [
  {label: 0, value: Math.floor(Math.random() * 130)},
  {label: 2.5, value: Math.floor(Math.random() * 130)},
  {label: 5, value: Math.floor(Math.random() * 130)},
  {label: 7.5, value: Math.floor(Math.random() * 130)},
  {label: 10, value: Math.floor(Math.random() * 130)},
  {label: 12.5, value: Math.floor(Math.random() * 130)},
  {label: 15, value: Math.floor(Math.random() * 130)},
  {label: 17.5, value: Math.floor(Math.random() * 130)},
  {label: 20, value: Math.floor(Math.random() * 130)},
  {label: 22.5, value: Math.floor(Math.random() * 130)},
  {label: 25, value: Math.floor(Math.random() * 130)},
  {label: 27.5, value: Math.floor(Math.random() * 130)},
  {label: 30, value: Math.floor(Math.random() * 130)},
  {label: 32.5, value: Math.floor(Math.random() * 130)},
  {label: 35, value: Math.floor(Math.random() * 130)},
  {label: 37.5, value: Math.floor(Math.random() * 130)},
  {label: 40, value: Math.floor(Math.random() * 130)},
];
