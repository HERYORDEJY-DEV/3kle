import {View, Text} from 'react-native';
import React from 'react';
import {FlexRow} from '../General/styles';
import {styles} from './styles';
import CustomText from '../General/text';
import {useTheme} from 'styled-components';
import Svgs from '../../assets/svg';
import responsive from '../../utils/responsive';
import {VictoryPie} from 'victory-native';

const {ArrowRight} = Svgs;

export default function PortfolioBreakDown() {
  const theme = useTheme();

  const renderBreakdownItem = ({
    title,
    index,
  }: {
    title: string;
    value: number;
    index: number;
  }) => (
    <FlexRow
      key={title}
      style={styles.breakdownItem}
      backgroundColor={theme.colors.itemBackground3}
    >
      {/* <View style={styles.breakdownItemBg} /> */}
      <CustomText
        size="14"
        color={theme.colors.textBlue}
        family="bold"
        style={{flex: 0.8}}
        numberOfLines={2}
      >
        {title}
      </CustomText>
      <FlexRow style={{flex: 0.3}}>
        {renderPieChart(index)}
        <ArrowRight />
      </FlexRow>
    </FlexRow>
  );
  const renderOutcomeItem = () => (
    <FlexRow
      style={[styles.breakdownItem, {width: responsive.width(50), height: 70}]}
      backgroundColor={theme.colors.itemBackground3}
    >
      <View>
        <CustomText size="14" family="bold">
          Prospective Outcome
        </CustomText>
        <CustomText size="12" style={{paddingVertical: 5}}>
          Risk: 6
        </CustomText>
        <CustomText size="12">Returns 10-15%</CustomText>
      </View>
      <FlexRow />
    </FlexRow>
  );

  const pieData = [
    {x: 'Large Company\nStocks(VOO)', y: 55, fill: theme.colors.pieBlue1},
    {x: 'Medium Company\nStocks(IJH)', y: 10, fill: theme.colors.pieBlue1},
    {x: 'Small Company\nStocks(IJR)', y: 5, fill: theme.colors.pieBlue1},
    {
      x: 'International\nCompany Stocks (IXUS)',
      y: 30,
      fill: theme.colors.pieBlue1,
    },
  ];

  const renderPieChart = (i: number) => {
    const _data = pieData.filter((item, index) => index == i);
    const _pieData = [..._data, {x: '', y: 40, fill: '#EEEFFF'}];
    return (
      <View style={{alignItems: 'center'}}>
        <VictoryPie
          // standalone={false}
          height={180}
          width={80}
          innerRadius={15}
          radius={25}
          style={{
            data: {fill: ({datum}) => datum.fill},
            labels: {
              display: 'none',
              fontSize: 12,
              fill: theme.colors.textBlue,
              fontFamily: theme.fontFamily.semiBold,
            },
          }}
          data={_pieData}
        />
        <View style={{position: 'absolute', zIndex: 1000000}}>
          <CustomText family="bold" color={'#243B80'}>
            50%
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.breakdownContainer}>
      {renderOutcomeItem()}
      {data.map((item: any, index: number) =>
        renderBreakdownItem({...item, index}),
      )}
    </View>
  );
}

// const data = [
//   {title: 'Large Company Stocks\n(VOO)', value: 55},
//   {title: 'Medium Company Stocks\n(IJH)', value: 10},
//   {title: 'Small Company Stocks\n(IJR)', value: 5},
//   {title: 'International Company\nStocks (IXUS)', value: 30},
// ];

const data = [
  {title: 'Large Company Stocks(VOO)', value: 55},
  {title: 'Medium Company Stocks(IJH)', value: 10},
  {title: 'Small Company Stocks(IJR)', value: 5},
  {title: 'International Company Stocks (IXUS)', value: 30},
];
