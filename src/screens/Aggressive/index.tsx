import {View, StatusBar, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  FlexRow,
  StyledContainerLayout,
  StyledContentLayout,
} from '../../components/General/styles';
import NavBar from '../../components/Nav-Bar';
import {StyledScreenTitle} from '../FamilyPlus/styles';
import {useTheme} from 'styled-components';
import PortfolioBreakDown from '../../components/Aggressive/breakdown';
import PortfolioSelected from '../../components/Button/portfolio-selected';
import Svgs from '../../assets/svg';
import responsive from '../../utils/responsive';
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import PaginationDot from '../../components/General/pagin-dot';
import AggressiveChartItem from '../../components/Aggressive/aggressive-chart';

const {QuestionC} = Svgs;

const {width} = Dimensions.get('window');

export default function AggressivePortfolio() {
  const theme = useTheme();

  const data = [...Array(4).keys()];

  const sharedValue = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const {x} = event.contentOffset;
      sharedValue.value = x;
    },
  });

  const activeIndexValue = useDerivedValue(() => {
    return Math.round(sharedValue.value / width);
  });

  const pieData = [
    {x: 'Large Company\nStocks(VOO)', y: 55, fill: theme.colors.pieBlue1},
    {x: 'Medium Company\nStocks(IJH)', y: 10, fill: '#7982FA'},
    {x: 'Small Company\nStocks(IJR)', y: 5, fill: '#C2C7FF'},
    {x: 'International\nCompany Stocks\n(IXUS)', y: 30, fill: '#EEEFFF'},
  ];

  return (
    <StyledContainerLayout>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <NavBar
        showBackButton={true}
        renderRight={<QuestionC />}
        theme={'blue'}
      />
      <StyledContentLayout
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <StyledScreenTitle
          family="bold"
          color={theme.colors.textBlue}
          size={'24'}
          height={36}
        >
          Aggressive Portfolio
        </StyledScreenTitle>
        <FlexRow justifyContent="center" style={{paddingTop: 10}}>
          {data.map((item: any, index: number) => (
            <PaginationDot
              key={`${index}`}
              dotIndex={index}
              activeDotIndex={activeIndexValue}
              borderColor={'#1826D0'}
              activeBorderColor={'#1826D0'}
              borderWidth={1}
              backgroundColor={'transparent'}
              activeBackgroundColor={'#1826D0'}
              size={16}
              activeSize={22}
            />
          ))}
        </FlexRow>
        <Animated.ScrollView
          disableIntervalMomentum={true}
          horizontal={true}
          snapToInterval={width}
          onScroll={onScrollHandler}
        >
          {[...pieData].map((item: any, index: number) => (
            <AggressiveChartItem key={`${index}`} data={pieData} />
          ))}
        </Animated.ScrollView>
        <PortfolioBreakDown />
        <PortfolioSelected />
      </StyledContentLayout>
    </StyledContainerLayout>
  );
}
